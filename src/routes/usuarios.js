const express = require('express')
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




module.exports = router