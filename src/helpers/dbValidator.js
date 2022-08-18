
const User = require('../models/User');
const Producto = require ('../models/Productos')


const existeUsuarioPorId = async( id ) => {

  // Verificar si el correo existe
  const existeUser = await User.findById(id);
  if ( !existeUser ) {
      throw new Error(`El id no existe ${ id }`);
  }
}


//Productos
 
const existeProductoPorId = async( id ) => {

    // Verificar si el correo existe
    const existeProducto = await Producto.findById(id);
    if ( !existeProducto ) {
        throw new Error(`El id no existe ${ id }`);
    }
}
// Validar colecciones permitidas
const coleccionesPermitidas = (coleccion ='', colecciones= []) => {

  const incluida = colecciones.includes(coleccion);
  if(!incluida) {
    throw new Error (`La colección ${coleccion} no es permitida, ${colecciones}`)
  }

  return true;
}


module.exports = {
  existeUsuarioPorId,
  existeProductoPorId,
  coleccionesPermitidas
}