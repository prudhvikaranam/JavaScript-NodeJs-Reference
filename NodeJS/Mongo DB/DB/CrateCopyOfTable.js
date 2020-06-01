var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root123",
  database: "sarika_nodeJs"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("create table USER_DETAILS_BKP as select * from USER_DETAILS", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});
