const express = require('express')
const areaSchema = require("../models/area")

const router = express.Router()

//crearArea
router.post('/area', (req, res) => {
    const area = areaSchema(req.body);
    area.save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message:error }))
} )

module.exports = router