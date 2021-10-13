import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:4001/' })

export const logIn = (formData) => API.post('/user/login', formData)
