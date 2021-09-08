import http from "./base-api-service";

const list = () => http.get('/products').then(res => res.data);

const service = {
    list
}
export default service;