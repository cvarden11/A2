import express from 'express';
import { createProduct, getProductById,  } from '../controllers/product.controller.js';

const router = express.Router();

router.get('/:id', getProductById)

router.post("/",  createProduct)

export default router;