// main.js

/**
 * --- Helper Functions ---
 */

// Prepares API request essentials: URL, headers, and the fetch utility.
function _prepareRequest(options) {
    const { config, utils } = options;
    let { apiUrl, token } = config;

    // Default to localhost if apiUrl is not provided.
    const DEFAULT_URL = "http://localhost:3000";
    let finalUrl = apiUrl?.trim() || DEFAULT_URL;

    // Ensure the URL has a protocol.
    if (!/^(https?:\/\/)/.test(finalUrl)) {
        finalUrl = `http://${finalUrl}`;
    }

    // Remove any trailing slash.
    if (finalUrl.endsWith('/')) {
        finalUrl = finalUrl.slice(0, -1);
    }

    const headers = {
        'Content-Type': 'application/json',
    };
    if (token) {
        headers['Authorization'] = `Bearer ${token}`;
    }

    return { url: finalUrl, headers, fetch: utils.tauriFetch };
}

// Gets detailed error information from a response or error object.
function _getErrorDetails(error) {
    const res = error?.response;

    if (res) {
        if (res.status === 401 || res.status === 403) return 'API密钥无效或缺失。';
        const data = res.data;
        if (data && typeof data === 'object') return data.message || data.error || JSON.stringify(data);
        if (typeof data === 'string' && data.length > 0) return data;
        return `服务返回 HTTP ${res.status} 错误。`;
    }
    
    if (error instanceof Error) {
        const msg = error.message;
        if (msg.includes('Failed to fetch') || msg.includes('error sending request')) {
            return '无法连接到翻译服务，请检查API地址和网络连接。';
        }
        return error.message;
    }

    if (typeof error === 'string') return error;
    
    return '发生未知错误。';
}


/**
 * --- Plugin Functions ---
 */

// Checks the health of the BergaRust translation service.
async function checkHealth(options) {
    const { url, headers, fetch } = _prepareRequest(options);

    try {
        const res = await fetch(`${url}/health`, { method: 'GET', headers });

        if (res.ok && res.data?.status === 'ok') {
            return true;
        }
        
        // Throw with response to be caught and formatted
        throw { response: res };

    } catch (error) {
        const details = _getErrorDetails(error);
        throw new Error(`健康检查失败.\n详情: ${details}`);
    }
}

// Translates text using the BergaRust service.
async function translate(text, from, to, options) {
    if (!text || typeof text !== 'string') {
        throw new Error('翻译失败：输入文本不能为空。');
    }
    if (!from || !to) {
        throw new Error('翻译失败：源语言和目标语言必须指定。');
    }

    const { url, headers, fetch } = _prepareRequest(options);
    const { detect } = options;

    const sourceLang = from === 'auto' ? detect : from;
    if (!sourceLang) {
        throw new Error('翻译失败：无法检测到源语言。');
    }

    const body = {
        from: sourceLang,
        to,
        text,
    };

    try {
        const res = await fetch(`${url}/translate`, {
            method: 'POST',
            headers,
            body: { type: 'Json', payload: body },
        });

        if (res.ok && res.data?.text) {
            return res.data.text;
        }
        
        // Throw with response to be caught and formatted
        throw { response: res };

    } catch (error) {
        const details = _getErrorDetails(error);
        throw new Error(`翻译失败.\n详情: ${details}`);
    }
}
