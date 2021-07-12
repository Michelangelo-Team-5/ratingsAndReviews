const mysql = require('mysql');

const dbConnection = mysql.createConnection({
  user: 'root',
  database: 'cows'
});

dbCconnection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Connected to MySQL!')
  }
});

// Your Database Queries Here!!





// Don't forget to export your functions!
module.exports = dbCconnection;
