const express = require('express');
const app = express();
require('./config/connectiondb');
const clienteController = require('./controllers/cliente.controller');

app.use(express.json());

app.get ('/clientes', clienteController.consultar);
app.get('/clientes/:email', clienteController.consultarId);
app.post('/clientes', clienteController.registrar);
app.put('/clientes/:email', clienteController.actualizar);
app.delete('/clientes/:email', clienteController.eliminar);

app.listen(8000);