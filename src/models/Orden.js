const {Schema, model}= require('mongoose');


const OrdenSchema= new Schema({
    usuario: {
        name: String,
        age: String,
        address: String,
        email: String,
        phone: String,
       
    },
     orden : [Object]
   
    
});



module.exports= model('Orden', OrdenSchema);