
import express from 'express';
import { userController } from '../controladores/index.js';
const router = express.Router();

router.post('/login', userController.login);
router.post('/create', userController.create);


export default router;
