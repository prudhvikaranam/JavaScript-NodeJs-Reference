var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root123",
  database: "sarika_nodeJs"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
