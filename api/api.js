import express from 'express';
import { couponRoutes, productRoutes, userRoutes,compraRoutes } from '../rutas/index.js';

const api = express();

api.get('/api', (_, res) => {
  return res.json({
    msg: 'API funcionando',
  });
});

api.use(express.json());
api.use(express.urlencoded({ extended: true }));

api.use('/api/coupon', couponRoutes)
api.use('/api/product', productRoutes)
api.use('/api/user', userRoutes)
api.use('/api/compras', compraRoutes)



export default api;
