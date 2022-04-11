var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbselect = db.db("Finny_nodejs");
  dbselect .createCollection("Student", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
});