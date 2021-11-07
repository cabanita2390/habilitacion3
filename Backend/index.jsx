// Llamamos el paquete de express
const express = require('express');
require('dotenv').config();//para que lea el .env
const { dbConnection } = require('./database/config');

//console.log(process.env);

// Crear servidor express
const app = express();

// Levantar conexion a la BD
dbConnection();

// Directorio publico
app.use(express.static('Public'));

app.use(express.json());
// Rutas

app.use('/api/auth', require('./Routes/auth'));
// path => dominio.com/api/auth/login
// app.get('/', (req, res)=>{
//     res.json({
//         ok: true
//     })
// });

app.listen(process.env.Port, () =>{
    console.log(`Servidor corriendo en el puerto ${process.env.Port}`)
});