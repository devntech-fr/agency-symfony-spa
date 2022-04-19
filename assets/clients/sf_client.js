export default class SFClient {
    base_url = 'http://localhost:8001/api';
    get(url) {
        const requestInit = {};
        return fetch(this.base_url+url, requestInit)
            .then(response => response.json())
            .then(data => {
                console.log('get data', data)
                return data
            });
    }
    async post(url, params) {
        const requestInit = {
            method: "POST",
            body: JSON.stringify(params),
            mode: 'no-cors',
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            }
        };
        return await fetch(this.base_url+url, requestInit)
            .then(response => response.json())
            .then(json => {
                console.log('post json response', json)
                return json
            })
        ;
    }
}
