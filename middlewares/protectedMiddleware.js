import jwt from 'jwt-simple';
import config from '../api/config/index.js';
import { UserModel } from "../models/index.js";

const protectedRoute = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({
      msg: 'Token requerido'
    });
  }
  try {
    const payload = jwt.decode(token, config.token.secret);
    const user = await UserModel.findById(payload._id);
    if (!user) {
      return res.status(401).json('Usuario no existente');
    }
    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({
      msg: 'Token invalido',
      error,
    });
  }
};

export default protectedRoute;