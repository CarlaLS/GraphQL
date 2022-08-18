

class ProductosService {
    #rep
    constructor(productosRep) {
        this.#rep = productosRep
    }

    async createProduct(producto){
        try {
            const newProducto = await this.#rep.add(producto)
            return newProducto
        } catch (error) {
            console.log(error)
        }
    }

    async getProducts(){
        try {
            const productos = await this.#rep.getAll()
            return productos
        } catch (error) {
            console.log(error)
        }
    }

    async getProduct(id){
        try {
            const productoFound = await this.#rep.getById(id)
            return productoFound
        } catch (error) {
            console.log(error)
        }
    }

    async updateProduct(id, newProducto){
        try {
            const updatedProducto = await this.#rep.update(id, newProducto)
            return updatedProducto
        } catch (error) {
            console.log(error)
        }
    }

    async deleteProduct(id){
        try {
            const deleteProducto = await this.#rep.delete(id)
            return deleteProducto
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = ProductosService