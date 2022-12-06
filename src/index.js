const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");
require("dotenv").config();
const userRoutes = require("./routes/usuarios")
const areaRoutes = require("./routes/areaDepartamento")
const cors = require("cors");

/* //middleware proteccion a rutas
function logger(req, res, next){
    console.log(`Route received: ${req.protocol}://${req.get('host')}${req.originalUrl}`)
    next();
} */


app.use(express.json());
app.use(morgan("dev"));
app.use(cors())
app.use('/api', userRoutes)
app.use('/api/estructura/', areaRoutes)
app.use((req, res, next) => {
  res.send('FUNCIONA')
  next()
})

//rutas


// mongodb connection
mongoose.connect(
  process.env.MONGODB_URI
)
.then(() => console.log('connected to MongoDB Atlas'))
.catch(() => console.error(error));





const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log("Server on port" + PORT);
});

//