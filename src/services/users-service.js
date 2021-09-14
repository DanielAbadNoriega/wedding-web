import http from './base-api-service'

const login = (email, password) => http.post('/login', {email, password})

const logout= () => http.post('/logout')

const create = (user) => http.post('/users', user)

const remove = (id) => http.delete(`/users/${id}`)

const profile = () => http.get('/profile')

const service = {
    login,
    logout,
    create,
    remove,
    profile
};

export default service;