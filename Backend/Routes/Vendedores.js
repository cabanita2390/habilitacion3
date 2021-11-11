const { Router } = require('express');
const { getVendedores, setVendedor, actualizarVendedor, eliminarVendedor, getPerfiles } = require('../controllers/vendedores')
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');
const router = Router();

router.use(validarJWT);

router.get('/listar', getVendedores);

router.post(
    '/crear',
    [
        check('nombre','El nombre del vendedor es obligatorio').not().isEmpty(),
        check('usuario','El usuario del vendedor es obligatorio').not().isEmpty(),
        check('perfil','El perfil del vendedor es obligatorio').not().isEmpty(),
        check('estado','El estado del vendedor es obligatorio').not().isEmpty(),
        validarCampos
    ],
    setVendedor);

router.put(
    '/actualizar/:id', 
    [
        check('nombre','El nombre del vendedor es obligatorio').not().isEmpty(),
        check('usuario','El usuario del vendedor es obligatorio').not().isEmpty(),
        check('perfil','El perfil del vendedor es obligatorio').not().isEmpty(),
        check('estado','El estado del vendedor es obligatorio').not().isEmpty(),
        validarCampos
    ],
    actualizarVendedor);

router.delete('/eliminar/:id', eliminarVendedor);

router.get('/perfiles', getPerfiles);

module.exports = router;