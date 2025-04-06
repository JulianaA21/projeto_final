const jwt = require('jsonwebtoken');
const secretKey = require('../config/secret');

module.exports = (req, res, next) => {
  const token = req.cookies.token; // Busca o token nos cookies

  if (!token) {
    return res.redirect('/'); // Redireciona para o login se não houver token
  }

  jwt.verify(token, secretKey, (err, user) => {
    if (err) {
      res.clearCookie('token'); // Remove o cookie inválido
      return res.redirect('/');
    }

    req.user = user; // Adiciona o usuário à requisição
    next(); // Permite o acesso à rota protegida
  });
};