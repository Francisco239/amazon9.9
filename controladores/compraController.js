import { CompraModel, CouponModel, ProductModel } from "../models/index.js";

const create = async (req, res) => {
  try {


    let products = [];
    let totalPrice = 0;
    let originalPrice = 0;
    let discount = 0;
    let foundProducts = await ProductModel.find({_id: { $in: req.body.products}});
    if(foundProducts.length > 0) {
      
        foundProducts.forEach((product) => {
            originalPrice += product.price;
            products.push({
                productId: product._id,
                price: product.price,
            });
        });

    }

    let foundCoupon = undefined;
    if(req.body.coupon && req.body.coupon !== '') {
        foundCoupon = await CouponModel.findOne({code: req.body.coupon});
        if(foundCoupon && foundCoupon.uses === foundCoupon.limit) {
            res.status(400).json({ msg: 'Coupon invalid' });
        }
        if(foundCoupon && foundCoupon.type == '%') {
            discount = (originalPrice * (foundCoupon.discount/100));
            totalPrice =  originalPrice - discount;
            foundCoupon.uses += 1;
            await foundCoupon.save();
        } else if (foundCoupon) {
            discount =  foundCoupon.discount;
            totalPrice = originalPrice - foundCoupon.discount;
            foundCoupon.uses += 1;
            await foundCoupon.save();
        }
    }
    const newCompra = {
      ...req.body,
      products,
      originalPrice,
      discount,
      totalPrice,
      userId: req.user._id,
      status: 0
    };
    const createdCompra = await CompraModel.create(newCompra);
    res.status(201).json(createdCompra);
  } catch (err) {
    console.log('err :>> ', err);
    return res.status(500).json({ err });
  }
};


const getCarrito = async (req, res) => {
    try {

        const allCompras = await CompraModel.find({userId: req.user._id, status: 0})
        res.status(201).json(allCompras);
      } catch (err) {
        console.log('err :>> ', err);
        return res.status(500).json({ err });
      }
};

const getAllCompras = async (req, res) => {
    try {

        const allCompras = await CompraModel.find({userId: req.user._id, status: 1})
        res.status(201).json(allCompras);
      } catch (err) {
        console.log('err :>> ', err);
        return res.status(500).json({ err });
      }
};

const comprar = async (req, res) => {
    try {

        const compra = await CompraModel.findOne({_id: req.body.compraId, status: 0})
        if(!compra) {
            res.status(400).json({msg:'no compra found'});
        }
        compra.status = 1;
        compra.card = req.body.card;
        await compra.save();
        res.status(201).json(compra);
      } catch (err) {
        console.log('err :>> ', err);
        return res.status(500).json({ err });
      }
};


export { create, getAllCompras, getCarrito, comprar };
