
const {Schema, model} = require('mongoose')

const carritoSchema = new Schema({
    productosAgregados: [Object]
})

module.exports = model('Carrito', carritoSchema)