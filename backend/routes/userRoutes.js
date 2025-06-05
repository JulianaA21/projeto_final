const express = require("express");
const router = express.Router();
const User = require("../models/User");

// GET todos os usuários
router.get("/users", async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: "Erro ao buscar usuários." });
  }
});

// POST novo usuário
router.post("/user", async (req, res) => {
  const { nome, email, senha } = req.body;
  try {
    await User.create({ nome, email, senha });
    res.send("Usuário adicionado com sucesso!");
  } catch (err) {
    res.status(500).json({ error: "Erro ao adicionar usuário." });
  }
});

// PUT atualizar usuário
router.put("/user/:id", async (req, res) => {
  const { nome, email } = req.body;
  const { id } = req.params;
  try {
    await User.update({ nome, email }, { where: { id } });
    res.send("Usuário atualizado com sucesso!");
  } catch (err) {
    res.status(500).json({ error: "Erro ao atualizar usuário." });
  }
});

// DELETE remover usuário
router.delete("/user/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await User.destroy({ where: { id } });
    res.send("Usuário removido com sucesso!");
  } catch (err) {
    res.status(500).json({ error: "Erro ao remover usuário." });
  }
});

module.exports = router;
