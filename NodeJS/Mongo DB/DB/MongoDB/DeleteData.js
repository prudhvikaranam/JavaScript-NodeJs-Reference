var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbobject = db.db("Finny_nodejs");
  var detetedata = { name: 'Shreya' };
  dbobject.collection("Student").deleteOne(detetedata, function(err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    db.close();
  });
});