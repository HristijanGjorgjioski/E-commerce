import express from 'express'

const router = express.Router()

import { createProduct } from '../controllers/productController.js'

router.post('/create-product', createProduct);

export default router
