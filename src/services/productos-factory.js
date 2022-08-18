

const ProductosDaoFactory = require ('../Dao/dao-factory')
const ProductosRep = require ('../repository/productos-rep')
const ProductosService = require ('../services/productos-service')

const productosDAO = ProductosDaoFactory.getDao()

const productosRep = new ProductosRep(productosDAO)

const productoService = new ProductosService(productosRep)

module.exports = { productoService}