import http from "./base-api-service";

const list = (searchQuery) => http.get(`/products?title=${searchQuery}`);

const service = {
    list
}
export default service;