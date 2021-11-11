const { Schema, model } = require('mongoose');

const VendedorSchema = Schema({
    nombre: {
        type: String,
        required: true
    },
    usuario: {
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true
    },
    perfil:{
        type: Schema.Types.ObjectId,
        ref: 'perfil',
        required: true
    },
    estado:{
        type: Boolean,
        required: true
    },
    fecha:{
        type: Date,
        default: Date.now
    }
},
{
    collection: 'vendedores'
});

module.exports = model('vendedor', VendedorSchema)
