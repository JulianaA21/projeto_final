const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const app = express();

// Configurações
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views/pages')); // ✅ Caminho absoluto para a pasta "views"
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser()); // ✅ Habilita o parser de cookies
app.use(express.static(path.join(__dirname, 'public')));

// Rotas
const reservaRoutes = require('./routes/reservaRoutes');
const authRoutes = require('./routes/authRoutes');
app.use('/', authRoutes);
app.use('/', reservaRoutes);

// Inicia o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando em http://localhost:${PORT}`));