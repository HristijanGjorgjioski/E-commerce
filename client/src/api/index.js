import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:8000/' });

// AUTH APIs
export const logIn = (formData) => API.post('/user/login', formData);
export const createAdmin = (formData) => API.post('/user/addAdmin', formData);

// PRODUCT APIs

    // GET APIS
export const getProducts = () => API.get('/product/get-all-products');

    // POST APIs
export const createProduct = (product) => API.post('/product/create-product', product);
export const updateProduct = (id, updatedProduct) => API.patch(`/product/${id}`, updatedProduct)
export const deleteProduct = (id) => API.delete(`/product/${id}`)
