
const router = require("express").Router();

const {
  removeProduct,
  createCart ,
  getCart,
  getCarts, 
  deleteCart, 
  addProduct, 
} = require("../Controllers/carrito.controller");

//Crear Carrito y Agregar Productos
router.post('/', createCart)
router.post('/:id', addProduct)



//Obtener todos los productos del carrito
router.get("/carrito", getCarts);

//Obtener Carrito por ID
router.get('/carrito/:id', getCart)



// Delete Carrito

router. delete("/carrito/delete/:id",deleteCart);

//Remover Producto

router.post ('/carrito:idCart/:idProduct', removeProduct)

module.exports =router