import mongoose from 'mongoose';


const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    manufacturer: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    specs: {
        type: String,
        required: true
    }
});

export default mongoose.model('Product',productSchema)



/**
 * ​
  - Nombre del producto
  - Proveedor
  - Stock
  - Precio
  - Categoría
  - Especificaciones
  - Descripción del producto
 */