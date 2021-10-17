import express from 'express'

const router = express.Router()

import { createProduct, deleteProduct, getProducts, updateProduct } from '../controllers/productController.js';

router.get('/get-all-products', getProducts);

router.post('/create-product', createProduct);
router.patch('/:id', updateProduct);
router.delete('/:id', deleteProduct)

export default router
