const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");
require("dotenv").config();
const userRoutes = require("./routes/usuarios")

/* //middleware proteccion a rutas
function logger(req, res, next){
    console.log(`Route received: ${req.protocol}://${req.get('host')}${req.originalUrl}`)
    next();
} */

app.use(express.json());
app.use(morgan("dev"));
app.use('/api', userRoutes)

//rutas


// mongodb connection
mongoose.connect(
  process.env.MONGODB_URI
)
.then(() => console.log('connected to MongoDB Atlas'))
.catch(() => console.error(error));






app.listen(3000, () => {
  console.log("Server on port 3000");
});

//