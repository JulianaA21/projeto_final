const db = require('../config/db');

module.exports = {
  findUserByUsername: (username) => {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM users WHERE username = ?', [username], (err, results) => {
        if (err) reject(err);
        resolve(results[0]);
      });
    });
  },

  createUser: (username, password, email, telefone) => {
    return new Promise((resolve, reject) => {
      db.query('INSERT INTO users (username, password, email, telefone) VALUES (?, ?, ?, ?)', [username, password, email, telefone], (err, results) => {
        if (err) reject(err);
        resolve(results);
      });
    });
  }
};