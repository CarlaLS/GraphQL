const Productos =require ( '../database/producto-schema');

 class ProductosDAO {

    constructor() {}

    async add(producto){
        await producto.save()
        return producto
    }

    async getAll() {
        try {
            const productos = await Productos.find();
            return productos
        } catch (error) {
            console.log(error)
        }
    }

    async getById(id){
        try {
            const productoFound = await Productos.findById(id)
            return productoFound
        } catch (error) {
            console.log(error)
        }
    }

    async update(id, newData){
        try {
            const updatedProducto = await Productos.findByIdAndUpdate(id, { ...newData, id }, { new: true })
            return updatedProducto
        } catch (error) {
            console.log(error)
        }
    }

    async delete(id){
        try {
            const deletedProducto = await Productos.deleteOne(id)
            return deletedProducto
        } catch (error) {
            console.log(error)
        }
    }
}




module.exports = ProductosDAO