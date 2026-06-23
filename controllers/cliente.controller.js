
const Cliente = require('../models/cliente.model');

exports.home = async (req, res) => {
  res.render('pages/index');
};

exports.formulario = async (req, res) => {
  res.render('pages/registrarcliente', { mensaje: null});
}


exports.obtenerClientes = async (req, res) => {
  try {
    const listado = await Cliente.find();
    res.render('pages/listadoclientes', { clientes: listado }); 
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.crearCliente = async (req, res) => {
  try {
    const nuevoCliente = new Cliente(req.body);
    await nuevoCliente.save();
    res.status(201).render('pages/registrarcliente', { mensaje: 'Cliente creado', cliente: nuevoCliente }); 
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


exports.actualizarCliente = async (req, res) => {
  try {
    const clienteActualizado = await Cliente.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(clienteActualizado);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


exports.eliminarCliente = async (req, res) => {
  try {
    await Cliente.findByIdAndDelete(req.params.id);
    res.json({ mensaje: "Cliente eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.listadoclientes = async (req, res) => {
  try {
    const listado = await Cliente.find(); 
    res.render('pages/listadoclientes', { clientes: listado });
  } catch (error) {
    res.status(500).send("Error al cargar la página de clientes: " + error.message);
  }
};
exports.formulario = async (req, res) => {
  res.render('pages/registrarcliente');
}    