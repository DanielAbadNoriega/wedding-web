import http from './base-api-service'

const login = (email, password) => http.post('/login', {email, password})

const logout= () => http.post('/logout')

const create = (user) => http.post('/users', user)

const service = {
    login,
    logout,
    create
};

export default service;