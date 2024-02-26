import { Router } from "express";
import UserRoutes from './userRoutes.js'
const router = Router();

//user 
router.use('/user', UserRoutes);
// //products
// router.use('/products', productRoutes);
// //categories
// router.use('/categories', categoryRoutes);
// // cart
// router.use('/cart', cartRoutes);
// //orders
// router.use('/orders', orderRoutes);


export default router;