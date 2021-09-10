import axios from 'axios';

const http = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL || 'http://localhost:3001/api',
    withCredentials: true
})

http.interceptors.response.use(
    (response) => {
        return response.data;
    },
    (error) => {
        if(error?.response?.status === 401) {
            window.location.replace('login')
        }
        return Promise.reject(error);
    })

export default http;