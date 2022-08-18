
 class PersonaDaoMem {

    constructor() {
        this.products = []
    }

    init() {
        console.log('Memory products DAO -> Ready!')
    }

    add(producto) {
        this.productos.push(producto)
        return asDto(producto)
    }

    getAll() {
        return asDto(this.productos)
    }

    getById(id) {
        return asDto(this.productos[ this.#getIndex(id) ])
    }

    #getIndex(id) {
        return this.productos.findIndex(persona => persona.id === id)
    }

    update(id, newProducto) {
        const index = this.#getIndex(id)
        const updatedProducto = { ...this.productos[ index ], ...newProducto }
        this.productos.splice(index, 1, updatedProducto)
        return asDto(updatedProducto)
    }

    delete(id) {
        const [ deletedProducto ] = this.productos.splice(this.#getIndex(id), 1)
        return asDto(deletedProducto)
    }   

}
module.exports = PersonaDaoMem