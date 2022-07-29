import mongoose from "mongoose";



const comprasSchema = new mongoose.Schema({
    products: [{ type : { price: { type:Number}, productId: { type : String }}}],
    totalPrice: { type : Number },
    originalPrice: { type : Number },
    discount: { type : Number },
    coupon:{ type : String },
    userId:{ type: String },
    status: { type: Number}, // 0 esta carrito, 1 la compro
    card: { type: String }
})


export default mongoose.model('Compra', comprasSchema)

/*- Un rango de precio
  - Buscar por categoría
  - Por nombre
  - Por proveedor
  - Disponibilidad*/
