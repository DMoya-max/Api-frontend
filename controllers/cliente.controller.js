const Cliente = require('../models/cliente.model');


exports.consultar = async (req,res)=>{
  try {
    const clientes = await Cliente.find({});
    console.log(clientes);
    res.json(clientes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

exports.consultarId = async (req,res)=>{
  try {
    const clientes = await Cliente.findOne({email:req.params.email});
    console.log(clientes);
    res.json(clientes);
  } catch (error) {
    res.status(500).json({ error: error.message });
    }
}

exports.registrar = async (req, res)=>{

    try {
        let nuevo={
            nombre:req.body.nombre,
            email:req.body.email,
            telefono:req.body.telefono,
        }
      
        const clientes = await Cliente.create(nuevo);
        res.json(clientes);

    } catch (error) {   
      res.status(500).json({ error: error.message });
    }
} 

exports.actualizar = async (req, res) => {
  try {
    const actualizado = await Cliente.findOneAndUpdate(
      { email: req.params.email },
      req.body,
      {new: true} // devuelve el cliente actualizado
    );
    res.json(actualizado);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.eliminar = async (req, res) => {
  try {
    const eliminado = await Cliente.findOneAndDelete({ email: req.params.email });
    res.json({ mensaje: 'Cliente eliminado', cliente: eliminado });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/**
 
en lugar de usar
module.exports para exportar
puede poner la palabra exports directamente en la funcion o variable
que deseo exportar


**/
