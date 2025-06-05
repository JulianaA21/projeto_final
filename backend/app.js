const express = require("express");
const cors = require("cors");
const app = express();
const sequelize = require("./config/db");
const User = require("./models/User");

app.set("port", process.env.PORT || 3000);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Verifica e sincroniza o banco de dados
sequelize.sync().then(() => {
  console.log("Banco de dados sincronizado");
}).catch((err) => {
  console.error("Erro ao sincronizar com o banco de dados:", err);
});

// GET: listar todos os usuários
app.get('/users', async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST: criar novo usuário
app.post('/user', async (req, res) => {
  try {
    const { nome, email, senha } = req.body;
    await User.create({ nome, email, senha });
    res.send("Usuário criado com sucesso!");
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// PUT: atualizar usuário
app.put('/user/:id', async (req, res) => {
  try {
    const { nome, email } = req.body;
    await User.update({ nome, email }, {
      where: { id: req.params.id }
    });
    res.send("Usuário atualizado com sucesso!");
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE: remover usuário
app.delete('/user/:id', async (req, res) => {
  try {
    await User.destroy({ where: { id: req.params.id } });
    res.send("Usuário removido com sucesso!");
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// EJS e Bootstrap config (se quiser manter)
app.use(express.static("./assets"));
app.use("/css", express.static("./node_modules/bootstrap/dist/css"));
app.use("/js", express.static("./node_modules/bootstrap/dist/js"));
app.use("/js", express.static("./node_modules/jquery/dist"));

app.set("view engine", "ejs");
app.set("views", "./views");

// Iniciar servidor
app.listen(app.get("port"), () => {
  console.log("Servidor iniciado na porta: " + app.get("port"));
});
