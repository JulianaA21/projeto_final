/* importar o módulo do EXPRESS */
const express = require("express");
const app = express(); //definir a nossa app em EXPRESS
const db = require('./config/db');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 3000;

app.set("port", process.env.PORT || port);
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

//sequelize.sync(); //verifica a base de dados


// GET
app.get('/users', (req, res) => {
  db.query('SELECT * FROM user', (err, results) => { 
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

// POST
app.post('/user', (req, res) => {
  const { nome, email, senha } = req.body;
  db.query('INSERT INTO user (nome, email, senha) VALUES (?, ?, ?)',
    [nome, email, senha],
    (err, results) => {
      if (err) return res.status(500).send(err);
      res.send('user adicionado com sucesso');
    });
});

// PUT
app.put('/user/:id', (req, res) => {
  const { nome, email } = req.body;
  const id = req.params.id;
  db.query('UPDATE user SET nome = ?, email = ? WHERE id = ?',
    [nome, email, id],
    (err) => {
      if (err) return res.status(500).send(err);
      res.send('user atualizado');
    });
});

// DELETE
app.delete('/user/:id', (req, res) => {
  const id = req.params.id;
  db.query('DELETE FROM user WHERE id = ?', [id], (err) => {
    if (err) return res.status(500).send(err);
    res.send('user removido');
  });
});



//configurações do bootstrap
app.use(express.static("./assets"));
app.use("/css", express.static("./node_modules/bootstrap/dist/css"));
app.use("/js", express.static("./node_modules/bootstrap/dist/js"));
app.use("/js", express.static("./node_modules/jquery/dist"));

//definir o EJS
app.set("view engine", "ejs");
app.set("views", "./views");

//configurações do SERVER
app.set('port', process.env.port || process.env.PORT || 5000);
app.use(express.urlencoded({extended: true})); //permitir pedidos do exterior

const rotas = require("./routes/main.route");
app.use("/", rotas);

//app.use("/", require("./routes/cliente.route"));

//instancia e inicia o servidor
app.listen(app.get("port"), () => {
    console.log("Servidor iniciado na porta: "+ app.get("port"));
});