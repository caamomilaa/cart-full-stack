const express = require('express');
const app = express();
const cors = require('cors');
const connectDB = require('./config/db');
const userRoutes = require('./routes/users.routes');

require('dotenv').config(); //permite leer el archivo .env. SI NO EXISE ESTA LINEA, NO PODEMOS ACCEDER AL ARCHIVO ENV.

//IMPORTANTE METER EN GITIGNORE EL ARCHIVO ENV

const port = process.env.PORT; //de esta manera accedemos a lasvariables de entorno => procésame esta variable de entorno. Se llama '.PORT', porquese ha decidido así en el archivo .env

// ?) Por qué lo ponemos aquí y no dentro del app.listen, como aparece en los apuntes?


const corsOptions = {
  origin: '*', // Orígenes permitidos (cuando esté en un dominio real, lo cambiaremos por ese dominio)
  methods: ['GET', 'POST', 'PATCH', 'DELETE'], // Métodos permitidos
  allowedHeaders: ['Content-Type', 'Authorization'] // Headers permitidos
};

app.use(cors(corsOptions));
app.use(express.json());

app.use('/api/users', userRoutes);

app.listen(port, async () => {
  console.log(`Server is running on port ${port}`);
  await connectDB();
});
