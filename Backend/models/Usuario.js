const { Schema, model } = require('mongoose');

const UsuarioSchema = Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password:{
        type: String,
        require: true
    },    
});

module.exports = model('usuario', UsuarioSchema)
//var schema = new Schema({name: String}, {collection: 'actores'}), para definir el nombre de la tabla en la BD