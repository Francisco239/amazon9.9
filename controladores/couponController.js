import { CouponModel } from "../models/index.js";

const create = async (req, res) => {
  try {
    if(!req.user.isAdmin) {
      return res.status(403).json({msg: 'Only admin could create products'});
    }
    const newCoupon = {
      ...req.body,
      uses: 0,
    };
    const createdCoupon = await CouponModel.create(newCoupon);
    res.status(201).json(createdCoupon);
  } catch (err) {
    return res.status(500).json({ err });
  }
};


export { create };
