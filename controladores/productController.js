import { ProductModel } from "../models/index.js";

const create = async (req, res) => {
    try {

      if(!req.user.isAdmin) {
        return res.status(403).json({msg: 'Only admin could create products'});
      }
      const newProduct = {
        ...req.body,
      };
      const createdProduct = await ProductModel.create(newProduct);
      res.status(201).json(createdProduct);
    } catch (err) {
      return res.status(500).json({ err });
    }
  };
  export { create };
