var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root123",
  database: "angular_pr"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("drop table employee", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});
