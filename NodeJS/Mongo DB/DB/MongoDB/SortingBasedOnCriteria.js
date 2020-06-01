var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbobject = db.db("sarika_nodejs");
  var sortCriteria = { name: 1 };
  dbobject.collection("Student").find().sort(sortCriteria).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});