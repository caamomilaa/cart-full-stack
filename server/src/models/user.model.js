const mongoose = require('mongoose'); // npm i mongoose

const userSchema = new mongoose.Schema(
  //ESQUEMA: estructura que tendrá los objetos que guardemos. 
  //Solo recibe dos objetos => mongoose.Schema(definicion, opciones)

  //  1. Define la estructura del documento  (nombre, email, validaciones, requires...)
  //  2. OPCIONAL: define las opciones el esquema (timestaps, collection...)
  {
    name: { type: String, required: true },
    email: String
  },
  { timestamps: true, collection: 'usersCollection' }
);

const UserModel = mongoose.model('User', userSchema); //MODELO: compilación del esquema para que JS pueda entender y trabajar con la base de datos.

module.exports = UserModel;
