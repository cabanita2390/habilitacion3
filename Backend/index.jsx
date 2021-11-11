// Llamamos el paquete de express
const express = require('express');
require('dotenv').config();//para que lea el .env
const { dbConnection } = require('./database/config');
const cors = require('cors');

//console.log(process.env);

// Crear servidor express
const app = express();

// Levantar conexion a la BD
dbConnection();

//Usar cors
app.use(cors());

// Directorio publico
app.use(express.static('Public'));

app.use(express.json());
// Rutas

app.use('/api/auth', require('./Routes/auth'));
app.use('/api/productos', require('./Routes/Productos'));
app.use('/api/vendedores', require('./Routes/Vendedores'));

// path => dominio.com/api/auth/login
// app.get('/', (req, res)=>{
//     res.json({
//         ok: true
//     })
// });

app.listen(process.env.Port, () =>{
    console.log(`Servidor corriendo en el puerto ${process.env.Port}`)
});