const mysql = require('mysql2');

// Criar a conexão com o MySQL
const db = mysql.createConnection({
  host: 'localhost',   // Coloca aqui o host correto
  user: 'root',        // Coloca o teu nome de utilizador do MySQL
  password: '',        // Coloca a tua password do MySQL
  database: 'auth_demo' // Base de dados que usas
});

// Testa a conexão
db.connect(err => {
  if (err) {
    console.error('Erro na conexão:', err);
    return;
  }
  console.log('🟢 Conectado ao MySQL');
});

// Exporta a instância de db
module.exports = db;