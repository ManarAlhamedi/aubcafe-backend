const mysql = require("mysql2");


const conn = mysql.createConnection({
    port: process.env.MYSQL_PORT,
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
});

conn.connect((err) =>{
    if(err) {
      console.log(err);
      return;
    }
    console.log('Mysql Connected with App...');
  });

module.exports = conn;

