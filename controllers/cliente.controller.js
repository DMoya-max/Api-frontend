
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
    const { id, nombre, email, telefono } = req.body;

    await Cliente.findByIdAndUpdate(
      id,
      { nombre, email, telefono },
      { new: true }
    );

    res.redirect('/api/v1/listadoclientes');
  } catch (error) {
    res.status(400).send(error.message);
  }
};

exports.eliminarCliente = async (req, res) => {
    try {
        await Cliente.findByIdAndDelete(req.body.id);
        res.redirect('/api/v1/listadoclientes');
    } catch (error) {
        res.status(400).send(error.message);
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