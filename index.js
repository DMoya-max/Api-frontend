require('dotenv').config();
const crypto = require('crypto');
global.crypto = crypto;
const express = require('express');
const conectarDB = require('./config/connectiondb');


const clienteController = require('./controllers/cliente.controller');
const servicioController = require('./controllers/servicios.controller');

const app = express();

app.set('view engine', 'ejs');


app.use(express.json());

// Parse URL-encoded bodies (from HTML forms)
app.use(express.urlencoded({ extended: true }));

conectarDB();

app.get('/', (req, res) => {
  res.render('pages/index');
});

app.get('/home', clienteController.home);
app.get('/formulario', clienteController.formulario)

app.get('/clientes', clienteController.obtenerClientes);
app.post('/clientes', clienteController.crearCliente);
app.get('/servicios', servicioController.obtenerServicios);
app.post('/servicios/seed', servicioController.insertarDatosIniciales);
app.get('/listadoclientes', clienteController.vistaListadoClientes);


const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto http://localhost:${PORT}/`);
});