const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'airbnb'
});

connection.connect(function (err){
  if (err) {
    console.log('Error connecting to database');
  } else {
    console.log('Database connected breh!');
  }

})

module.exports = connection;
