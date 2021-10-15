import express from 'express'

const router = express.Router()

import { createProduct, getProducts } from '../controllers/productController.js';

router.get('/get-all-products', getProducts);

router.post('/create-product', createProduct);

export default router
