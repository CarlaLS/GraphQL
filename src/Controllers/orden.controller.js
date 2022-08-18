const ordenController = {};

const Orden = require ('../models/Orden')
const mongoose = require('mongoose')



ordenController.getOrders = async (req, res) => {
    try {
        const orden = await Orden.find()

        res.status(200).json(orden)
        
    } catch (error) {
        res.status(404).json({ message: error })
    }
}

ordenController.addOrder = async (req, res) => {
    const { usuario, orden } = req.body
    const newOrden = new Orden({
        usuario: usuario, 
        orden: orden
    })
    try {
        await newOrden.save()
        res.status(201).json(newOrden);

    } catch (error) {
        res.status(409).json({ message: error })
    }
}

ordenController.getOrder = async (req, res) => {
    const { id } = req.params

    try {
        const orden = await Orden.findById(id)
        res.status(200).json(orden)

    } catch (error) {
        res.status(404).json({ message: error })
    }
}

ordenController.deleteOrder = async (req, res) => {
    const { id: _id  } = req.params

    try {
        if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('Carrito no encontrado')

        await Orden.deleteOne({ _id })

        res.json({message:'Orden eliminada satisfactoriamente'})

    } catch (error) {
        res.status(404).json({ message: error })
    }
}
module.exports =ordenController