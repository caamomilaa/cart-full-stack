const mongoose = require('mongoose');
require('dotenv').config(); //?) no entiendo esta linea
const MONGODB_URL = process.env.MONGODB_URL; //dentro del archivo .env está el url que llevaala bas de dtaos. Aquí estoy diciendo que el url = link de mongo db

const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URL);
    // ?) entiendo que esto es asíncrono, pero a qué está esperando?
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1); // ?) no entiendo
  }
};

module.exports = connectDB;
