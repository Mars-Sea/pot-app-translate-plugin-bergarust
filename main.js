// 提取URL处理逻辑
function processUrl(url) {
    // 设置默认URL
    const DEFAULT_URL = "http://localhost:3000";
    
    // 如果URL为空则返回默认值
    if (!url?.trim()) {
        return DEFAULT_URL;
    }
    
    // 去除URL末尾的斜杠并确保有http前缀
    return (url.endsWith("/") ? url.slice(0, -1) : url)
        .startsWith("http") ? url : `http://${url}`;
}

async function translate(text, from, to, options) {
    const { config, utils, detect } = options;
    const { tauriFetch: fetch } = utils;
    let { apiUrl: url, token } = config;
    
    url = processUrl(url);
    
    // 先进行健康检查
    const healthCheck = await checkHealth(options);
    if (!healthCheck) {
        throw '翻译服务不可用，请检查服务状态';
    }
    
    const headers = {
        'Content-Type': 'application/json',
        ...(token && { 'Authorization': `Bearer ${token}` })
    };
    
    // 判断源语言类型，如果是自动检测则调用detect函数
    if (from === 'auto') {
        from = detect;  
    }
    const body = { from, to, text };
    
    const res = await fetch(`${url}/translate`, {
        method: 'POST',
        headers,
        body: { type: 'Json', payload: body }
    });
    
    if (res.ok) {
        const result = res.data;
        return result?.text || Promise.reject('服务器返回数据格式错误');
    } else {
        throw `请求失败\nHTTP状态码: ${res.status}\n${JSON.stringify(res.text)}`;
    }
}


// 健康检查
async function checkHealth(options) {
    const { config, utils, detect } = options;
    const { tauriFetch: fetch } = utils;
    let { apiUrl: url, token } = config;
    
    url = processUrl(url);

    const headers = {
        // 加上 Bearer
        ...(token && { 'Authorization': `Bearer ${token}`})
    };
    
    const res = await fetch(`${url}/health`, {
        method: 'GET',
        headers
    });
    
    if (res.ok) {
        return res.data.status === 'ok';
    } else {
        throw `健康检查失败\nHTTP状态码: ${res.status}\n${JSON.stringify(res.data)}`;
    }
}