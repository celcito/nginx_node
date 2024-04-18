const express = require('express');
const app = express();

const config = {
  host: 'db',
  user: 'root',
  password: 'root',
  database:'nodedb'
};

const mysql = require('mysql')
const connection = mysql.createConnection(config)

app.get('/', (req, res) => {
  //const sql = `INSERT INTO people(name) values('Celso')`
  const sql = `select name from people `
  connection.query(sql, (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).send('Erro ao executar a consulta');
    } else {
      const namesHtml = results.map(result => `<p>${result.name}</p>`).join('');
      const response = `<h1>Full Cycle Rocks!</h1><p>Resultados da consulta:</p>${namesHtml}`;
      res.send(response);
    }
    connection.end();
 });
})
app.listen(5000, () => console.log('Server is up and running'));