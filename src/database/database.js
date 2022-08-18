const mongoose = require('mongoose')
require('dotenv').config()

const MONGO_ATLAS = process.env.MONGO_ATLAS

mongoose.connect(MONGO_ATLAS, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    
  
 
})

    .then (db => console.log ('Base de datos esta conectada'))
    .catch(err=> console.log (err));

