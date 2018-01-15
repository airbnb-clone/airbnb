const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'airbnb'
});

connection.connect(err => err ? console.log('Error connecting to database') : console.log('Database connected!'));

module.exports = connection;
