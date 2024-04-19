const express = require('express');
const app = express();

const mysql = require('mysql')
const config = {
  host: 'db',
  user: 'root',
  password: 'root',
  database:'nodedb',
 };
const pool = mysql.createPool({
  ...config,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});


const connection = mysql.createConnection(config)

app.get('/insert', (req, res) => {
  
  const sql = `create table if not exists people  (id int not null auto_increment,name varchar(255),primary key(id))`
  connection.query(sql)

  const names = ['Wesley','Celso','fullcicle']
  names.forEach(el=>{
    let sqlInsert = 'INSERT INTO people(name) VALUES(\'' + el + '\')';
    connection.query(sqlInsert, (error, results) => {
      if (error) {
        console.error('Erro ao inserir nome:', error);
        
      } else {
        console.log('Nome inserido com sucesso:', results);
      }
   });
  })
  connection.query(sql)
  res.send('<h1>Full Cycle</h1>')

})





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