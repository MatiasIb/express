const express = require('express')

const router = express.Router()

//createUser
router.post('/usuarios', (req, res) => {
    res.send('create user')
} )

router.get('/usuarios', (req, res) => {
    res.json({
        nombre:"admin",
        clave:"admin",
        cargo:"admin"
    })
} )




module.exports = router