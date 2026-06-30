require('dotenv').config();
const express = require('express');
const path = require('path');
const conectarDB = require('./config/connectiondb');
const methodOverride = require('method-override');


const clienteController = require('./controllers/cliente.controller');
const servicioController = require('./controllers/servicios.controller');

const app = express();

const enrutador = require('./router/cliente.router');
const servicioRouter = require('./router/servicios.router');
app.use(methodOverride('_method'));


app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api/v1', enrutador);
app.use('/api/v1', servicioRouter);


app.use(express.json());

conectarDB();

app.get('/', (req, res) => {
  res.render('pages/index');
});

app.get('/formularioservicios', (req, res) => {
  res.render('pages/formularioservicios');
});

app.get('/home', clienteController.home);
app.get('/formulario', clienteController.formulario);
app.get('/clientes', clienteController.obtenerClientes);
app.post('/clientes', clienteController.crearCliente);
app.get('/formularioservicio', servicioController.formularioServicio);
app.get('/servicios', servicioController.obtenerServicios);
app.post('/servicios', servicioController.crearServicio);
app.post('/servicios/seed', servicioController.insertarDatosIniciales);
app.get('/listadoclientes', clienteController.listadoclientes);

const PORT = process.env.PORT || 8000;

// Agregamos '0.0.0.0' como segundo argumento
app.listen(PORT, '0.0.0.0', () => {
  console.log(`"Servidor corriendo en el puerto. Http://localhost:${PORT}/api/v1/home"`);
});