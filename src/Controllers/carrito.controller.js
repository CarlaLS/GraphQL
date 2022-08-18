const carritoController = {};

const Carrito = require ('../models/Carrito')
const mongoose = require('mongoose')


carritoController.getCarts = async (req, res) => {
    try {
        const carts = await Carrito.find()

        res.status(200).json(carts)
        
    } catch (error) {
        res.status(404).json({ message: error })
    }
}

carritoController.getCart = async (req, res) => {
    const { id } = req.params

    try {
        const cart = await Carrito.findById(id)
        res.status(200).json(cart)

    } catch (error) {
        res.status(404).json({ message: error })
    }
}

carritoController.createCart = async (req, res) => {
    const { id } = req.body
    const newCarrito = new Carrito({
        _id: id, 
        productosAgregados:[]
    })

    try {
        const existingCarrito = await Carrito.findById(id)

        if(existingCarrito) return res.status(400).json({ message: "El Carrito Ya existe." })

        await newCarrito.save()
        res.status(201).json(newCarrito)

    } catch (error) {
        res.status(409).json({ message: error })
    }
}

carritoController.deleteCart = async (req, res) => {
    const { id: _id  } = req.params

    try {
        if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No se encuentra el Carrito')

        await Carrito.deleteOne({ _id })

        res.json({message:'El Carrito fue eliminado correctamente'})

    } catch (error) {
        res.status(404).json({ message: error })
    }
}

carritoController.addProduct = async (req, res) =>{
    const { id } = req.params
    const producto = req.body

    try {
        const existingCarrito = await Carrito.findById(id)

        if(!existingCarrito) return res.status(400).json({ message: "El Carrito no existe" })

        await existingCarrito.productosAgregados.push(producto)


        await Carrito.findByIdAndUpdate(id, existingCarrito, { new: true })
        res.status(201).json(existingCarrito);

    } catch (error) {
        res.status(409).json({ message: error })
    }
}

carritoController.removeProduct = async (req, res) => {
    const { idCart, idProduct } = req.params

    try {
        const existingCarrito = await Carrito.findById(idCart)

        if(!existingCarrito) return res.status(400).json({ message: "El Carrito no existe" })

        const updatedCarrito = existingCarrito.productosAgregados.filter((p) => p._id !== idProduct)

        await Carrito.deleteOne({idCart})

        const newCarrito = new Carrito({
            _id: idCart, 
            productosAgregados: updatedCarrito
        })
        await newCarrito.save()

        res.status(201).json(newCarrito);

    } catch (error) {
        res.status(409).json({ message: error })
    }
}

module.exports =carritoController