import * as bcrypt from 'bcrypt';
import jwt from 'jwt-simple';
import config from '../api/config/index.js';
import { UserModel } from '../models/index.js';


const create = async (req, res) => {
  try {
    const newUser = {
      ...req.body,
    };
    const createdUser = await UserModel.create(newUser);
    res.status(201).json(createdUser);
  } catch (err) {
    return res.status(500).json({ err });
  }
};

const login = async (req, res) => {
  try {
    const user = await UserModel.findOne(req.username);
    if (!user) {
      return res.status(404).json({
        msg: 'No user fond',
      });
    }
    const compared = req.body.password === user.password;
    if (!compared) {
      return res.status(401).json({
        msg: 'Bad credentials',
      });
    }
    delete user.password;
    const token = jwt.encode(user, config.token.secret);
    return res.json({
      msg: 'Login satisfactorio',
      token,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      msg: 'Error al hacer login',
    });
  }
};

const getUserByIdToken = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await UserModel.findById(id);

    if (req.user.isAdmin) {
      return res.json({
        msg: 'Usuario encontrado',
        user,
      });
    }

    if (!req.user.isAdmin) {
      return res.json({
        msg: 'Usuario encontrado',
        user: req.user,
      });
    }
  } catch (error) {
    return res.status(500).json({
      msg: 'Error al obtener Usuario',
      error,
    });
  }
};



export { login, getUserByIdToken, create};
