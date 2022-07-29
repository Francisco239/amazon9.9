import express from 'express';
import protectedRoute from '../middlewares/protectedMiddleware.js';
import { productController } from './../controladores/index.js';
const router = express.Router()

router.post('/create', protectedRoute, productController.create)


export default router;