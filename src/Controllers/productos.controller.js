// const productosController = {};

// const Producto = require ('../models/Productos')

// productosController.renderProducForm = (req, res) => {
//   res.render('productos/newProduct');
// };

// productosController.createNewProduct = async (req, res) => {
//     const {title, description, price, image} = req.body;
//     const newProducto=new Producto ({title, description, price, image})
//     await newProducto.save()
//     req.flash('mensaje_satisfactorio', 'Producto agregado satisfactoriamente')
//     res.redirect('/productos');
//   };



//    productosController.renderProduct = async (req, res) => {
//     const productos= await Producto.find();
//     res.render('productos/listProduct', {productos})
    
//   };

// productosController.renderEditForm = async(req, res) => {
//    const producto= await Producto.findById(req.params.id)
//   res.render('productos/editProduct', {producto})
// };

// productosController.updateProduct = async (req, res) => {
//   const {title, description, price} =req.body 
//   await Producto.findByIdAndUpdate(req.params.id, {title, description, price})
//   req.flash('mensaje_satisfactorio', 'Producto actualizado satisfactoriamente')
//   res.redirect('/productos')
// };

// productosController.deleteProduct = async(req, res) => {

//   await Producto.findByIdAndDelete(req.params.id)
//   req.flash('mensaje_satisfactorio', 'Producto eliminado satisfactoriamente')
//   res.redirect('/productos')
// };

// module.exports = productosController;

// const ProductosService = require("../services/productos-service")

//  async function createProduct (req,res) {
//     try {
//         const product = await ProductsService.createProduct(req.body)
//         res.status(201).json(product)
//     } catch (error) {
//         res.status(409).json({ message: error })
//     }
// }

//  async function getProducts(req, res) {
//     try {
//         const products = await ProductsService.getProducts()
//         res.status(200).json(products)

//     } catch (error) {
//         console.log(error)
//         res.status(404).json({ message: error })
//     }
// }

// async function getProduct(req, res) {
//     const { id } = req.params
//     try {
//         const product = await ProductsService.getProduct(id)
//         res.status(200).json(product)

//     } catch (error) {
//         res.status(404).json({ message: error })
//     }
// }

//  async function updateProduct(req,res){
//     const { id } = req.params
//     const newData = req.body
//     try {
//         const updatedProduct = await ProductsService.updateProduct(id, newData)
//         res.status(200).json(updatedProduct)
//     } catch (error) {
//         res.status(404).json({ message: error })
//     }
// }

//  async function deleteProduct(req,res){
//     const { id } = req.params
//     try {
//         const deleteProduct = await ProductsService.deleteProduct(id)
//         res.json({message:`Product "${deleteProduct.name}" deleted successfully`})
//     } catch (error) {
//         res.status(404).json({ message: error })
//     }
// }

const ProductosService = require("../services/productos-factory")
function getPersonas({ campo, valor }) {
    return ProductosService.getProducts(campo, valor);
}

function getPersona({ id }) {
    return ProductosService.getProduct(id);
}

 function createPersona({ datos }) {
    return ProductosService.createProduct(datos);
}

function updatePersona({ id, datos }) {
    return ProductosService.updateProduct(id, datos);
}
function deletePersona({ id }) {
    return ProductosService.deleteProduct(id);
}

module.exports = {
  getPersonas,
  getPersona,
  updatePersona,
  deletePersona,
  createPersona

}