

const mongoose = require ("mongoose")

const productosSchema = mongoose.Schema({
    name: String,
    description: String,
    category: String,
    code: String,
    image: String,
    price: Number,
    stock: Number
})


const Productos = mongoose.model('Producto', productosSchema)

module.exports= Productos