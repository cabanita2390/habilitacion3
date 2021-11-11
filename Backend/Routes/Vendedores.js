const { Router } = require('express');
const { getVendedores, setVendedor, actualizarVendedor, eliminarVendedor } = require('../controllers/vendedores')
const router = Router();

router.get('/listar', getVendedores);

router.post('/crear', setVendedor);

router.put('/actualizar/:id', actualizarVendedor);

router.delete('/eliminar/:id', eliminarVendedor);

module.exports = router;