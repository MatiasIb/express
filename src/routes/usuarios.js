const express = require('express');
const { updateOne } = require('../models/trabajadores');
const usuarioSchema = require("../models/trabajadores")

const router = express.Router()

//createUser
router.post('/usuarios', (req, res) => {
    const user = usuarioSchema(req.body);
    user.save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message:error }))
} )

router.get('/usuarios', (req, res) => {
    usuarioSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message:error }))
    
} )

//validarUsuario
router.get('/usuarios/:usuario/:clave', (req, res) => {
    console.log(req.params.usuario)
    usuarioSchema
    .findOne({usuario:`${req.params.usuario}`, clave:`${req.params.clave}`}, {_id:0, usuario:1, clave:1, cargo:1})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message:error }))
})

//eliminarUsuario
router.delete('/usuarios/:rut' , (req, res) => {
    console.log(req.params.rut)
    usuarioSchema
    .deleteOne({rut:`${req.params.rut}`})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message:error }))
})
//actualizarUsuario
router.put('/usuarios/:rut', (req, res) => {
    console.log(req.body)
    usuarioSchema.updateOne({rut:req.params.rut}, {$set:{nombres:req.body.nombres, apellidos:req.body.apellidos, sexo:req.body.sexo, direccion:req.body.direccion, telefono:req.body.telefono, cargo:req.body.cargo, departamento:req.body.departamento, fechaIngreso:req.body.fechaIngreso, usuario:req.body.usuario, clave:req.body.clave}})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message:error }))
} )

//traerUsuarioPorRut
router.get('/usuarios/:rut' , (req, res) => {
    console.log(req.params.rut)
    usuarioSchema
    .findOne({rut:`${req.params.rut}`})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message:error }))
})





module.exports = router