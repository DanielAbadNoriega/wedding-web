import http from "./base-api-service";

const list = (searchQuery) => http.get(`/products?title=${searchQuery}`);

const detail = (id) => http.get(`/products/${id}`);

const service = {
    list,
    detail
}
export default service;