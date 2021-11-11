const e = require('express');
const { response } = require('express');
const bcrypt = require('bcryptjs');
const Perfil = require('../models/Perfil');
const Usuario = require('../models/Usuario');
const Vendedor = require('../models/Vendedor');

const getVendedores = async(req, resp = response) => {
    const vendedores = await Vendedor.find();
                                      //.populate('perfiles');
                  
    resp.status(200).json({
        ok: true,
        msg: 'Lista de vendedores',
        vendedores
    });
}

const setVendedor = async(req, resp = response) => {

    const { usuario, password } = new Vendedor(req.body);

    try {
        let vendedor = await Vendedor.findOne({ usuario });
        if(vendedor){
            return resp.status(400).json({
                ok: false,
                msg: 'Ya existe un vendedor registrado con ese Username'
            })
        }
        vendedor = new Vendedor(req.body);
        const salt = bcrypt.genSaltSync();
        vendedor.password = bcrypt.hashSync(password, salt);

        await vendedor.save();

        resp.status(201).json({
            ok: true,
            msg: 'Vendedor creado',
            vendedor: vendedor
        });
    } catch (error) {
        console.log(error);
        resp.status(500).json({
            ok: false,
            msg: 'Error al crear Vendedor',
        })
    }
}

const actualizarVendedor = async(req, resp = response) => {
    
    const vendedorId = req.params.id;
    // const {password} = new Vendedor(req.body);

    try {
        let vendedorActu = await Vendedor.findById(vendedorId);

        if(!vendedorActu){
            resp.status(404).json({
                ok: false,
                msg: 'El Id del vendedor no coincide con ningun elemento de la base de datos',
            });
        }

        // vendedorActu = new Vendedor(req.body);
        // const salt = bcrypt.genSaltSync();
        // vendedorActu.password = bcrypt.hashSync(password, salt);

        const vendedorActualizado = await Vendedor.findByIdAndUpdate(vendedorId, req.body, { new: true});

        resp.status(200).json({
            ok: true,
            msg: 'Vendedor actualizado correctamente',
            vendedorActu: vendedorActualizado
        })

    } catch (error) {
        console.log(error);
        resp.status(500).json({
            ok: false,
            msg: 'Error al actualizar el vendedor'
        });
    }
}

const eliminarVendedor = async(req, resp = response) => {
    
    const vendedorId = req.params.id;

    try {
        const vendedor = await Vendedor.findById(vendedorId);

        if(!vendedor){
            resp.status(404).json({
                ok: false,
                msg: 'El Id del vendedor no coincide con ningun elemento de la base de datos',
            });
        }

        await Vendedor.findByIdAndDelete(vendedorId);

        resp.status(200).json({
            ok: true,
            msg: 'Vendedor eliminado correctamente'
        });
    } catch (error) {
        console.log(error);
        resp.status(500).json({
            ok: false,
            msg: 'Error al eliminar el vendedor'
        });
    }
}

const getPerfiles = async (req, resp = response ) => {
    
    const perfiles = await Perfil.find();
    resp.status(200).json({
        ok: true,
        msg: 'Lista de perfiles',
        perfiles
    });
}

module.exports = {
    getVendedores,
    setVendedor,
    actualizarVendedor,
    eliminarVendedor,
    getPerfiles
}

