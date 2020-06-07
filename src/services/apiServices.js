const BASE_API_URL = 'https://run.mocky.io/v3/066dd5f2-28fd-440b-95e9-c2a1ba349574';

export const getRulesList = () => {
    const url = `${BASE_API_URL}`;
    return fetch(url, {
        headers: {
            'Accept': 'application/json'
        }
    }).then(res => res.json());
}

export const createPostRule = (obj) => {
    const url = `${BASE_API_URL}`;
    return fetch(url, {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    }).then(res => {
        if (!res.ok) {
            throw new Error(res.statusText);
        }
        return res.json()
    });
}

export const updatePutRule = (obj) => {
    const url = `${BASE_API_URL}`;
    return fetch(url, {
        method: 'PUT',
        body: JSON.stringify(obj),
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    }).then(res => {
        if (!res.ok) {
            throw new Error(res.statusText);
        }
        return res.json()
    });
}