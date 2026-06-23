const express = require('express');
const clienteController = require('../controllers/cliente.controller');
const servicioController = require('../controllers/servicios.controller');
const router = express.Router();

router.get('/clientes', clienteController.obtenerClientes);
router.post('/clientes', clienteController.crearCliente);
router.get('/servicios', servicioController.obtenerServicios);
router.post('/servicios/seed', servicioController.insertarDatosIniciales);
router.get('/listadoclientes', clienteController.vistaListadoClientes);

module.exports = router;
