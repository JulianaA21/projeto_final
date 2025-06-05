const express = require("express");
const app = express();
const sequelize = require('./config/db');
const cors = require('cors');
const path = require('path');
const port = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Bootstrap e arquivos estáticos
app.use(express.static("./assets"));
app.use("/css", express.static("./node_modules/bootstrap/dist/css"));
app.use("/js", express.static("./node_modules/bootstrap/dist/js"));
app.use("/js", express.static("./node_modules/jquery/dist"));

// View Engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Rotas (certifique-se que o arquivo existe)
const rotas = require("./routes/main.route");
app.use("/", rotas);

// Sincroniza o banco e inicia o servidor
sequelize.sync()
  .then(() => {
    console.log("Banco de dados conectado e sincronizado.");
    app.listen(port, () => {
      console.log("Servidor iniciado na porta: " + port);
    });
  })
  .catch((err) => {
    console.error("Erro ao conectar com o banco de dados:", err);
  });
