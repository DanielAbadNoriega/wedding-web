import http from "./base-api-service";

const list = () => http.get('/products');

const service = {
    list
}
export default service;