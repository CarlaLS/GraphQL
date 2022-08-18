
const router = require("express").Router();


const {
    getOrder,
    addOrder,
    getOrders, 
    deleteOrder

} = require ("../Controllers/orden.controller");

router.get('/orden',  getOrders)
router.post('/orden',  addOrder)
router.get('/orden/:id',  getOrder)
router.delete('/orden/:id',  deleteOrder)


module.exports =router
