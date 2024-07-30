const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '@DB2022', 
  database: 'recursos'
});

db.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao MySQL:', err);
    throw err;
  }
  console.log('Conectado ao MySQL com sucesso!');
});

module.exports = db;
  