import dotenv from 'dotenv';

dotenv.config({});

//TODO: cargar las variables de entorno faltantes

export default {
  database: {
    uri: process.env.DB_URI ,

    name: 'ecomerce',
  },
  token: {
    secret: process.env.SIC,
  },
};
