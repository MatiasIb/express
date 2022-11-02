const express = require('express')

const router = express.Router()

//createUser
router.post('/usuarios', (req, res) => {
    res.send('create user')
} )


module.exports = router