import dotenv from 'dotenv';

dotenv.config({});

//TODO: cargar las variables de entorno faltantes

export default {
  database: {
    uri: 'mongodb+srv://root1:root1@cluster0.qmeg72g.mongodb.net',
    // uri: 'mongodb://localhost:27017',
    name: 'ecomerce',
  },
  token: {
    secret: '1234567890sdfghjkl',
  },
};
