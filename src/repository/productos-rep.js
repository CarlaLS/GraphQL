const asDto =  require'../dto/products-dto.js' 
const Productos = require "../database/products-schema.js";
const Id = require( "../models/Productos")

 class ProductosRep {
    #dao;

    constructor(dao) {
        this.#dao = dao;
    }

    async add(producto) {
        const id = Id.new()
        const newData = new Productos({ id ,...producto })
        const newProducto = new asDto(newData)
        await this.#dao.add(newProducto);
        return newProducto
    }

    async getAll() {
        const productos = await this.#dao.getAll();
        return asDto(productos);
    }

    async getById(idProducto){
        const productoFound = await this.#dao.getById(idProducto)
        return new asDto(productoFound)
    }

    async update(id, newData){
        const updatedProducto = await this.#dao.update(id, newData)
        return new asDto(updatedProducto)
    }

    async delete(id){
        const deletedProducto = await this.#dao.delete(id)
        return new asDto(deletedProducto)
    }
}

module.exports =  ProductosRep