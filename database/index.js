const mysql = require('mysql');

const dbConnection = mysql.createConnection({
  user: 'root',
  database: 'cows'
});

dbConnection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Connected to MySQL!')
  }
});

module.exports = dbConnection;
