const faker = require("faker")

export const ROUTE_FINANCE = 'finances';

const METHOD_GET = 'GET';
const METHOD_POST = 'POST';
const METHOD_PUT = 'PUT';
const METHOD_DELETE = 'DELETE';

export class FinanceApi {

    static main = new FinanceApi();

    constructor() {
        this.baseURL = 'http://localhost:8000/api'
    }

    isNotNull(obj) {
        return obj !== null && obj !== undefined;
    }

    getRouteUrl(route, params) {
        let url = `${this.baseURL}/${route}`;
        if (this.isNotNull(params))
            // example params: http://localhost:8000/myroute?param1=foo&param2=bar
            console.log('foo');
        return url;
    }


    jsonBody(obj) {
        return JSON.stringify(obj);
    }

    async get(route, params, body) {
        return this.fetchRequest(this.getRouteUrl(route, params), METHOD_GET, null, this.jsonBody(body))
    }

    async post(route, params, body) {
        return this.fetchRequest(this.getRouteUrl(route, params), METHOD_POST, null, this.jsonBody(body
            // {
            // userID : faker.random.uuid(),
            // userEmail: faker.internet.email(),
            // firstActive: faker.date.past(),
            // lastActive: faker.date.recent(),
            // gamesLinked: faker.hacker.verb(),
            // totalSpent: faker.finance.amount()
            // }
        ))
    }

    async put(route, params, body){
        return this.fetchRequest(this.getRouteUrl(route,params), METHOD_PUT, null, this.jsonBody(body))
    }

    async delete(route, params, body){
        return this.fetchRequest(this.getRouteUrl(route, params), METHOD_DELETE, null, this.jsonBody(body))
    }

    async fetchRequest(url, method, headers, body) {
        let chosenHeaders = {'Content-Type': 'application/json'};
        if (this.isNotNull(headers))
            chosenHeaders = headers;
        try {
            let params = {
                method: method,
                headers: chosenHeaders,
            }
            if (method !== METHOD_GET)
                params['body'] = body;
            const response = await fetch(url, params);
            let json = await response.json();
            console.log(json)
            return {error: null, data: json};
        } catch (e) {
            console.log(e)
            return {error: e, data: null}
        }
    }
}
