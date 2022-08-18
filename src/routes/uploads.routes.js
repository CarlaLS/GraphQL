const router = require("express").Router();
// const {check} = require = ('express-validator');
// const validarCampos = require("../middlewares/validarCampos");


const { cargarArchivo, actualizarImagen} = require("../Controllers/uploads.controller");
// const { coleccionesPermitidas } = require("../helpers/dbValidator");


router.post ('/upload', cargarArchivo, );

router.put('/upload/:coleccion/:id', [
    // check ('id', 'El id debe de ser de mongo').isMongoId(),
    // check ('coleccion').custom(c=> coleccionesPermitidas(c, ['usuarios','productos'])),
    // validarCampos
], actualizarImagen)

module.exports =router