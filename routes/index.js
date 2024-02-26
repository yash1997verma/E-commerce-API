import { Router } from "express";
import userRoutes from './userRoutes.js'
import productsRoutes from './productsRoutes.js'
import categoryRoutes from './categoryRoutes.js'
const router = Router();

//user 
router.use('/user', userRoutes);
//products
router.use('/products', productsRoutes);
//categories
router.use('/categories', categoryRoutes);
// cart
router.use('/cart', cartRoutes);
// //orders
// router.use('/orders', orderRoutes);


export default router;