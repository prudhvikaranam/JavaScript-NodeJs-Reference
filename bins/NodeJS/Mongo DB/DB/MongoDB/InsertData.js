var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbselect = db.db("Finny_nodejs");
  var jsondoc = { name: "Sonu", localaddress: "BTM 2nd Stage" };
  dbselect.collection("Student").insertOne(jsondoc, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});