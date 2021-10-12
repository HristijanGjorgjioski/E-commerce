import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:5243/' })

export const login = (formData) = API.post('/user/login', formData)
