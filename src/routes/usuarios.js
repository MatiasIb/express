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

//traerTodosLosUsuarios
router.get('/usuarios', (req, res) => {
    usuarioSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message:error }))
    
} )

//listadoTrabajadores
//validarUsuario
router.get('/usuarios/:usuario/:clave', (req, res) => {
    console.log(req.params.usuario)
    usuarioSchema
    .findOne({usuario:`${req.params.usuario}`, clave:`${req.params.clave}`})
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


//agregarContactosEmergencia
router.put('/usuarios/contactosEmergencia/:rut', (req, res) => {
    usuarioSchema.updateOne({
        rut:req.params.rut
    }, {$push:{
        contactosEmergencia:{
                rut: req.body.rut,
                nombres:req.body.nombre,
                relacion:req.body.relacion,
                telefono:req.body.telefono
            }
        }
    })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message:error }))
})

//agregarCargasFamiliares
router.put('/usuarios/cargasFamiliares/:rut', (req, res) => {
    usuarioSchema.updateOne({
        rut:req.params.rut
    }, {$push:{
        cargasFamiliares:{
                rut:req.body.rut,
                nombres:req.body.nombres,
                parentezco:req.body.parentezco,
                sexo:req.body.sexo
            }
        }
    })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message:error }))
})

//eliminarcargasFamliares
//db.trabajadores.updateOne({rut:"asdsad"}, {"$pull":{cargasFamiliares:{rut:"xd"}}})

router.put('/usuarios/cargasFamiliares/eliminar/:rut/:rutFamiliar', (req, res) => {
    usuarioSchema.updateOne({
        rut:req.params.rut
    },  {"$pull":{cargasFamiliares:{rut:req.params.rutFamiliar}}}
    )
    .then((data) => res.json(data))
    .catch((error) => res.json({ message:error }))
})

//eliminarContactosEmergencia
router.put('/usuarios/contactosEmergencia/eliminar/:rut/:rutContacto', (req, res) => {
    usuarioSchema.updateOne({
        rut:req.params.rut
    },  {"$pull":{contactosEmergencia:{rut:req.params.rutContacto}}}
    )
    .then((data) => res.json(data))
    .catch((error) => res.json({ message:error }))
})

//actualizar contactos Emergencias
router.put('/usuarios/contactosEmergencia/actualizar/:rut/:rutContacto/', (req, res) => {
    usuarioSchema.updateOne(
           {rut:req.params.rut, "contactosEmergencia.rut":req.params.rutContacto},{
            $set: {
                "contactosEmergencia.$":req.body
            }
           }
    )
    .then((data) => res.json(data))
    .catch((error) => res.json({ message:error }))
})
//actualizar cargasFamiliares

router.put('/usuarios/cargasFamiliares/actualizar/:rut/:rutCarga/', (req, res) => {
    usuarioSchema.updateOne(
           {rut:req.params.rut, "cargasFamiliares.rut":req.params.rutCarga},{
            $set: {
                "cargasFamiliares.$":req.body
            }
           }
    )
    .then((data) => res.json(data))
    .catch((error) => res.json({ message:error }))
})










/* 

db.trabajadores.updateOne({rut:"asdsad"}, {$set:{"contactosEmergencia.0.rut":"19.395.509-6",
                        "contactosEmergencia.0.nombres":"Kevin",
                          "contactosEmergencia.0.relacion":"Padre",
                        "contactosEmergencia.0.telefono":"983134912"}})
 */











module.exports = router