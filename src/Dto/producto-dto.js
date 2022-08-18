
 class ProductosDTO {

    constructor(productoData) {
        this.id = productoData.id;
        this.name = productoData.name;
        this.description = productoData.description;
        this.category = productoData.category;
        // this.image = productoData.image
        this.price = productoData.price;
        this.stock = productoData.stock;
    }
}
    function asDto(dataP) {
    if (Array.isArray(dataP))
        return dataP.map(p => new ProductosDTO(p))
    else
        return new ProductosDTO(dataP)
}

module.exports = {ProductosDTO ,
    asDto}