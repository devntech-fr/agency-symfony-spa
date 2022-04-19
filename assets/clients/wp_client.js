export default class WPClient {
    base_url = 'http://devntech.local:8002/wp-json/wp/v2';
    get(url) {
        const requestInit = {};
        return fetch(this.base_url+url, requestInit)
            .then(response => response.json())
            .then(data => data["hydra:member"]);
    }
    post(url, data) {
        const requestInit = {
            method: 'POST',
            headers: {},
            body: {
                data: JSON.stringify(data)
            },
        };
        return fetch(this.base_url+url, requestInit)
            .then(response => response.json())
            .then(data => data["hydra:member"]);
    }
}
