const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const secretKey = require('../config/secret');

exports.register = async (req, res) => {
  try {
    const { username, password, email, telefone } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    await User.createUser(username, hashedPassword, email, telefone);
    res.redirect('/'); // Redireciona para o login após registro
  } catch (error) {
    res.status(500).render('../pages/register', { error: 'Erro ao registrar usuário' });
  }
};

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findUserByUsername(username);

    if (!user) {
      return res.status(400).render('../pages/login', { error: 'Usuário não encontrado' }); // ✅ Caminho relativo
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).render('../pages/login', { error: 'Senha incorreta' }); // ✅ Caminho relativo
    }

    // Gera o token JWT
    const token = jwt.sign({ id: user.id, username: user.username }, secretKey, { expiresIn: '1h' });

    // Define o token como cookie
    res.cookie('token', token, { 
      httpOnly: true,
      maxAge: 3600000, // 1 hora
      path: '/' // Garante que o cookie seja válido para todas as rotas
    });

    res.redirect('/dashboard'); // Redireciona para a dashboard

  } catch (error) {
    res.status(500).render('../pages/login', { error: 'Erro no servidor' });
  }
};