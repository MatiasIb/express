const mongoose = require('mongoose');

const usuarioSchema = mongoose.Schema({
    rut:{
        type: String,
        required:true
    },
    nombres:{
        type: String,
        required:true
    },
    apellidos:{
        type: String,
        required:true
    },
    sexo:{
        type: String,
        required:true
    },
    direccion:{
        type: String,
        required:true
    },
    telefono:{
        type: String,
        required:true
    },
    cargo:{
        type: String,
        required:true
    },
    departamento:{
        type: String,
        required:true
    },
    fechaIngreso:{
        type: String,
        required:true
    },
    cargasFamiliares:{
        type: Array
    },
    contactosEmergencia:{
        type: Array
    },
    usuario:{
        type:String,
        required:true
    },
    clave:{
        type:String,
        required:true
    }

    
});

module.exports = mongoose.model('Trabajadores', usuarioSchema);