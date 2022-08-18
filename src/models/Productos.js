// const {Schema, model} = require('mongoose')


// const productSchema=new Schema({

//     title:{
//         type:String,
//         required:true

//     },
//     description:{
//         type:String,
//         required:true

//     },
//     user: {
//         type: Schema.Types.ObjectId,
//         ref: 'User',
//         required: true
//     },

//     price:{
//         type:Number,
//         required:true

//     },

//     image:{
//     type:String
//     },
  




// })

// // productSchema.methods.toJSON = function() {
// //     const { __v, estado, ...data  } = this.toObject();
// //     return data;
// // }
// module.exports = model('Productos', productSchema)

class ProductoModel {
    #id;
    #name;
    #description;
    #category;
    #code;
    #image;
    #price;
    #stock;

    constructor(id, name, description, category, code, image, price, stock) {
        this.#id = id;
        this.#name = name,
        this.#description = description,
        this.#category = category,
        this.#code = code,
        this.#image = image,
        this.#price = price,
        this.#stock = stock
    }

    datos() {
        const producto = Object.freeze({
            id: this.#id,
            stock: this.#stock,
            name: this.#name,
            description: this.#description,
            category: this.#category,
            code: this.#code,
            image: this.#image,
            price: this.#price,
            stock: this.#stock
        });

        const isEmpty = Object.values(producto).every(v => (v === null || v === ''));

        if (isEmpty === true){
            throw new Error('Error')
        }else{
            return producto
        } 
    }
}

module.exports= ProductoModel