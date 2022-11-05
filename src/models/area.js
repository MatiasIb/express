const mongoose = require('mongoose');

const areaSchema = mongoose.Schema({
    nombre:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('Areas', areaSchema)