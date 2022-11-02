const express = require('express')
const usuarioSchema = require("../models/trabajadores")

const router = express.Router()

//createUser
router.post('/usuarios', (req, res) => {
    const user = usuarioSchema(req.body);
    user.save().then((data) => res.json(data)).catch((error) => res.json({ message:error }))
    
} )

router.get('/usuarios', (req, res) => {
    res.json({
        nombre:"admin",
        clave:"admin",
        cargo:"admin"
    })
} )




module.exports = router