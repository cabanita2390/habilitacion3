const { response } = require('express');
//const { validationResult } = require('express-validator'); para usar validaciones
const bcrypt = require('bcryptjs');
const Usuario = require('../models/Usuario');
const { generarJWT } = require('../helpers/jwt');



const crearUsuario = async (req, resp = response) => {

    //console.log(req.body);
    //const{name, email, password} = req.body;

    const { email, password } = req.body;

    try {
        let usuario = await Usuario.findOne({ email });
        if (usuario) {
            return resp.status(400).json({
                ok: false,
                msg: 'Ya existe un usuario registrado con ese email'
            })
        }
        usuario = new Usuario(req.body);

        //Encriptar contraseña

        const salt = bcrypt.genSaltSync();
        usuario.password = bcrypt.hashSync(password, salt);

        await usuario.save();

        resp.status(201).json({
            ok: true,
            msg: 'Registro de usuario exitoso',
            udi: usuario.id,
            name: usuario.name
        });
    } catch (error) {
        console.log(error);
        resp.status(500).json({
            ok: false,
            msg: 'Error al crear el usuario'
        })
    }
}

const loginUsuario = async (req, resp = response) => {
    const { email, password } = req.body;

    try {
        //confirmar email
        let usuario = await Usuario.findOne({ email });

        if (!usuario) {
            resp.status(400).json({
                ok: true,
                msg: 'Usuario o contraseña erradas'
            });
        }
        //confirmar contraseña
        const validPassword = bcrypt.compareSync(password, usuario.password);
        

        if (!validPassword) {
            resp.status(400).json({
                ok: true,
                msg: 'Usuario o contraseña erradas'
            });
        }
        //generar token
        const token = await generarJWT(usuario.id, usuario.name);
        resp.json({
            ok: true,
            msg: 'Ok',
            uid: usuario.id,
            name: usuario.name,
            token
        });
    } catch (error) {
        resp.status(500).json({
            ok: false,
            msg: 'Error al autenticar'
        })
    }
}

const revalidarToken = async (req, resp = response) => {

    const { uid, name } = req;
    //generar nuevo token
    const token = await generarJWT(uid, name);

    resp.json({
        ok: true,
        token: token
    });
}

module.exports = {
    crearUsuario,
    loginUsuario,
    revalidarToken
}