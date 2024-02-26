import { Router } from "express";
import { getProductList, getProductDetails } from '../controllers/ProductController.js';

const router = Router();

// get products based on category ID
router.get('/listing/:categoryId', getProductList);

// get details of a specific product by product ID
router.get('/details/:productId', getProductDetails);

export default router;