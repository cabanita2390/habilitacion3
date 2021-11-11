const { getProductos, crearProducto, actualizarProducto, eliminarProducto, getCategorias} = require('../controllers/productos');
const { validarJWT } = require('../middlewares/validar-jwt.js');
const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const router = Router();

/**Aplicar validacion de token a todas las rutas por defecto */
router.use(validarJWT);

router.get('/listar', getProductos);

router.post(
    '/crear', 
    [
        check('name', 'El nombre del producto es obligatorio').not().isEmpty(),
        check('bar_code', 'El codigo de barras del producto es obligatorio').not().isEmpty(),
        //check('category', 'La categoria del producto es obligatoria').not().isEmpty(),
        validarCampos
    ],
    crearProducto);

router.put(
    '/actualizar/:id', 
    [
        check('name', 'El nombre del producto es obligatorio').not().isEmpty(),
        check('bar_code', 'El codigo de barras del producto es obligatorio').not().isEmpty(),
        //check('category', 'La categoria del producto es obligatoria').not().isEmpty(),
        validarCampos
    ],
    actualizarProducto);

router.delete('/eliminar/:id', eliminarProducto);

router.get('/categorias', getCategorias);

module.exports = router;