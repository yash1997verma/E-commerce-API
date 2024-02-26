import { Router } from 'express';
import { getCategoryList, getCategoryDetails } from '../controllers/CategoryController.js';

const router = Router();

// get a list of all categories
router.get('/list', getCategoryList);

// get details of a specific category by its ID
router.get('/details/:categoryId', getCategoryDetails);

export default router;