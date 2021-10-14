import express from 'express'

import { createProduct } from '../controllers/productController.js'

const router = express.Router()

router.post('/createproduct', createProduct)

export default router
