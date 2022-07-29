import mongoose from "mongoose"

const couponsSchema = new mongoose.Schema({

    code:{
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    discount:{
        type: Number,
        required: true
    },
    limit:{
        type: Number,
        required: true
    },
    uses:{
        type: Number,
        required: true
    }
})

export default mongoose.model('Coupon', couponsSchema)

/* - Tipo de cupon (% o monto)
  - Límite de usos */