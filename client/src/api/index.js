import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:8000/' });

export const logIn = (formData) => API.post('/user/login', formData);
export const createAdmin = (formData) => API.post('/user/addAdmin', formData);

export const createProduct = (product) => API.post('/product/create-product', product);
