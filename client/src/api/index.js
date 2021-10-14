import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:3009/' })

export const logIn = (formData) => API.post('/user/login', formData)
export const createAdmin = (formData) => API.post('/user/addAdmin', formData)

export const createProduct = (product) => API.post('/product', product)
