import express from 'express';
import protectedRoute from '../middlewares/protectedMiddleware.js';
import { couponController } from './../controladores/index.js';
const router = express.Router()

router.post('/create', protectedRoute ,  couponController.create)


export default router;