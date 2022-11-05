const mongoose = require('mongoose');

const departamentoSchema = mongoose.Schema({
    nombre:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('Departamentos', departamentoSchema)