const express = require('express');
const clienteController = require('../controllers/cliente.controller');
const router = express.Router();

router.get('/home', clienteController.home);
router.get('/formulario', clienteController.formulario)

router.get('/clientes', clienteController.obtenerClientes);
router.post('/clientes', clienteController.crearCliente);
router.get('/listadoclientes', clienteController.listadoclientes);
router.post('/clientes/actualizar', clienteController.actualizarCliente);
router.delete('/clientes/eliminar', clienteController.eliminarCliente);
module.exports = router;
