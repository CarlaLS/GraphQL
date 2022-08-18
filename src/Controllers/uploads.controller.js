// const {response } = require ('express')
const subirArchivo = require ('../helpers/subirArchivo')
const User =require('../models/User')
const Productos =require ('../models/Productos')
const uploadsController = {};

uploadsController.cargarArchivo = async (req, res) => {

  if (!req.files || Object.keys(req.files).length === 0) {
    res.status(400).json({msg:'No hay archivos que subir'});
    return;
  }

  if (!req.files.archivo ){
    res.status(400).json({msg:'No hay archivos que subir'});
    return;
  }
  //Imagenes
  const nombre = await subirArchivo (req.files, undefined, 'imagenes')
  res.json({ nombre})
  

}


uploadsController.actualizarImagen = async (req, res) => {
    const {id, coleccion} = req.params; 
    let modelo;
    switch (coleccion) {
      case 'users':
        modelo=  User.findById(id);
        if(!modelo){
          return res.status(400).json ({
            msg:`No existe un usuario con el id ${id}`
          });
        }
    break;
    case 'productos':
      modelo= Productos.findById(id);
      if(!modelo){
        return res.status(400).json ({
          msg:`No existe un producto con el id ${id}`
        });
      }
  break;
    default:
      return res.status(500).json ({ msg: 'Se me olvidó de validar esto'})
    }

const nombre = await subirArchivo (req.files, undefined, coleccion)
modelo.image = nombre
await modelo.save();

 res.json (modelo);
}

module.exports = uploadsController