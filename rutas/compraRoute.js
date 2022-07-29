import express from 'express';
import protectedRoute from '../middlewares/protectedMiddleware.js';
import { compraController } from './../controladores/index.js';
const router = express.Router()

router.post('/compra' ,  compraController.create)
router.get('/carrito' , protectedRoute, compraController.getCarrito)
router.get('/compras' , protectedRoute,  compraController.getAllCompras)

router.post('/realizarcompra' ,protectedRoute,  compraController.comprar)

export default router;