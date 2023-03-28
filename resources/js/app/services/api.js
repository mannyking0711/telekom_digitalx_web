import fetch from 'node-fetch';

let headers = {
    'X-Requested-With': 'XMLHttpRequest'
}

// set CSRF-Token
if (typeof document !== 'undefined') {
    let token = document.head.querySelector('meta[name="csrf-token"]');
    if (token) {
        headers['X-CSRF-TOKEN'] = token.content;
    } else {
        console.error('CSRF token not found!');
    }
}

class HTTPResponseError extends Error {
    constructor(response) {
        super(`HTTP Error Response: ${response.status} ${response.statusText}`);
        this.response = response;
    }
}

const checkStatus = response => {
    if (response.ok) {
        return true;
    } else {
        throw new HTTPResponseError(response);
    }
}

const fetchItem = async function(url, locale) {
    headers['Accept-Language'] = locale ? locale : 'de';
    const response = await fetch(url, { headers });
    try {
        checkStatus(response);
        if (response.status === 204) return '';
        return response.json();
    } catch (error) {
        console.error(error);
        const errorBody = await error.response.text();
        console.error(`Error body: ${errorBody}`);
    }
}

const postItem = async function(url, options, locale) {
    headers['Accept-Language'] = locale ? locale : 'de';
    options.headers = Object.assign(headers, options.headers || {})

    return fetch(url, options)
        .then(response => {
            checkStatus(response);
            if (response.status === 204) return '';
            return response.json();
        });
}

export { fetchItem, postItem };
