const express = require("express");
require("dotenv").config();
const db = require("./utils/database")
const confirmation = require("./models/confirmation.models")
const  confirmationRoutes = require("../src/routes/confirmation.routes")
const cors = require('cors')

confirmation;

const app = express();

app.use(cors())
app.use(express.json());

const PORT = process.env.DB_PORT || 8000;

db.sync()
  .then(() => {
    console.log("Base de datos sincronizada");
  })
  .catch((error) => console.log(error));    

app.get("/", (req, res) => {
  res.send("Servidor trabajando OK");
});

app.use(confirmationRoutes);

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});


