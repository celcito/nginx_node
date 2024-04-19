const express = require('express');
const app = express();

const mysql = require('mysql')
const pool = mysql.createPool({
  host: 'db',
  user: 'root',
  password: 'root',
  database:'nodedb',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});


app.get('/', (req, res) => {
  //const sql = `INSERT INTO people(name) values('Celso')`
  const sql = `select name from people `
  pool.query(sql, (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).send('Erro ao executar a consulta');
    } else {
      const namesHtml = results.map(result => `<p>${result.name}</p>`).join('');
      const response = `<h1>Full Cycle Rocks!</h1><p>Resultados da consulta:</p>${namesHtml}`;
      res.send(response);
    
    }
 });
})
app.listen(5000, () => console.log('Server is up and running'));