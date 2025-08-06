// 统一处理 API 调用前的准备工作，包括 URL 和认证
function _prepareApiCall(options) {
    const { config, utils } = options;
    let { apiUrl, token } = config;

    // 设置默认 URL，并确保格式正确
    const processUrl = (url) => {
        const DEFAULT_URL = "http://localhost:3000";
        let processedUrl = url?.trim() || DEFAULT_URL;

        if (!/^(https?:\/\/)/.test(processedUrl)) {
            processedUrl = `http://${processedUrl}`;
        }
        return processedUrl.endsWith('/') ? processedUrl.slice(0, -1) : processedUrl;
    };

    const finalUrl = processUrl(apiUrl);

    const headers = {
        'Content-Type': 'application/json',
        ...(token && { 'Authorization': `Bearer ${token}` })
    };

    return { url: finalUrl, headers, fetch: utils.tauriFetch };
}

// 抛出标准化的错误信息
function _throwError(message, response = null) {
    if (response) {
        const details = typeof response.data === 'string' ? response.data : JSON.stringify(response.data);
        throw `${message}\nHTTP ${response.status}: ${details}`;
    }
    throw message;
}

// 健康检查
async function checkHealth(options) {
    try {
        const { url, headers, fetch } = _prepareApiCall(options);
        const res = await fetch(`${url}/health`, { method: 'GET', headers });

        if (res.ok && res.data?.status === 'ok') {
            return true;
        }
        // 如果服务返回了非 200 状态码，或者状态不是 'ok'
        _throwError('健康检查失败', res);
    } catch (error) {
        // 处理网络层面的错误或其他意外
        throw error.message || '翻译服务不可用，请检查服务状态';
    }
    return false; // 明确返回 false
}

// 翻译函数
async function translate(text, from, to, options) {
    // 前置健康检查
    const isHealthy = await checkHealth(options);
    if (!isHealthy) {
        throw '翻译服务不可用，请检查服务状态';
    }

    const { url, headers, fetch } = _prepareApiCall(options);
    const { detect } = options;

    // 如果源语言是自动检测，则使用检测结果
    const sourceLang = from === 'auto' ? detect : from;

    const body = { from: sourceLang, to, text };

    const res = await fetch(`${url}/translate`, {
        method: 'POST',
        headers,
        body: { type: 'Json', payload: body }
    });

    if (res.ok && res.data?.text) {
        return res.data.text;
    }

    // 如果响应成功但数据格式不正确，或响应失败
    _throwError('翻译失败', res);
}
