var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root123",
  database: "angular_pr"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("delete from employee limit 1", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});
