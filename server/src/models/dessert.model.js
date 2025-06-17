const mongoose = require('mongoose'); // npm i mongoose

const userSchema = new mongoose.Schema(
  //ESQUEMA: estructura que tendrá los objetos que guardemos.
  //Solo recibe dos objetos => mongoose.Schema(definicion, opciones)

  //  1. Define la estructura del documento  (nombre, email, validaciones, requires...)
  //  2. OPCIONAL: define las opciones el esquema (timestaps, collection...)
  {
    name: { type: String, required: true },
    title: { type: String, required: true },
    price: { type: Number, required: true },
    imgMobile: { type: String, required: true },
    imgTablet: { type: String, required: true },
    imgDesktop: { type: String, required: true },
    imgThumbnail: { type: String, required: true },
    alt: { type: String, required: true },
    stock: { type: Number, required: true }
  },
  { timestamps: true, collection: 'dessertsCollection' }
);

const UserModel = mongoose.model('User', userSchema); //MODELO: compilación del esquema para que JS pueda entender y trabajar con la base de datos.

module.exports = UserModel;
