//连接mysql
const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  //user: 'root',
  //password: 'root',
  user: 'test_admin',
  password: 'fkyGEtdYez5OA5z0TL1',
  port: '3306',
  database: 'mohuan'
});
connection.connect();

module.exports = connection;
