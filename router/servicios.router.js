const express = require('express');
const servicioController = require('../controllers/servicios.controller');
const router = express.Router();


router.get('/formularioServicio', servicioController.formularioServicio);
router.get('/servicios', servicioController.obtenerServicios);
router.post('/servicios/seed', servicioController.insertarDatosIniciales);
router.post('/servicios', servicioController.crearServicio);

module.exports = router;