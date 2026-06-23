const express = require('express');
const clienteController = require('../controllers/cliente.controller');
const servicioController = require('../controllers/servicios.controller');
const router = express.Router();

router.get('/home', clienteController.home);
router.get('/formulario', clienteController.formulario)

router.get('/clientes', clienteController.obtenerClientes);
router.post('/clientes', clienteController.crearCliente);
router.get('/listadoclientes', clienteController.listadoclientes);

router.get('/servicios', servicioController.obtenerServicios);
router.post('/servicios/seed', servicioController.insertarDatosIniciales);
router.post('/servicios', servicioController.crearServicio);


module.exports = router;
