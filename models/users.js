import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true 
    },
    lastName:{
        type: String,
        required: true,
    },
    dateOfBirth:{
        type: String,
        required: true,
    },
    username:{
        type: String,
        required: true,
    },
    address:{
        type: String,
        required: true,
    },
    deliveryAddress:{
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    mail: {
        type: String,
        required: true 
    },
    password:{
        type: String,
        required: true 
    },
    isAdmin:{
        type: Boolean
    }
    
});

export default mongoose.model('User', userSchema )




   




/*- Nombre
  - Apellidos
  - Fecha de nacimiento
  - ID(identificación)
  - Dirección
  - Teléfono
  - Correo
  - Contraseña
  */