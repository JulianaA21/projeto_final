const mysql = require('mysql2');

// Criar a conexão com o MySQL
const db= mysql.createConnection({
  host: 'localhost',   // Coloca aqui o host correto
  user: 'root',        // Coloca o teu nome de utilizador do MySQL
  password: '123',        // Coloca a tua password do MySQL
  database: 'Padel_Coimbra' // Nome Base de dados 
});

// Testa a conexão
db.connect(err => {
  if (err) {
    console.error('Erro na conexão:', err);
    return;
  }
  console.log('Conectado ao MySQL');
});

//try {
  //const [results, fields] = await connection.query(
 //   'SELECT * FROM `padel_coimbra`'
 // );

 // console.log(results); // results contains rows returned by server
 // console.log(fields); // fields contains extra meta data about results, if available
//} catch (err) {
//console.log(err);
//}



// Exporta a instância de db
module.exports = db;