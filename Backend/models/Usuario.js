const { Schema, model } = require('mongoose');

const UsuarioSchema = Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },    
});

module.exports = model('usuario', UsuarioSchema)
//var schema = new Schema({name: String}, {collection: 'actores'}), para definir el nombre de la tabla en la BD