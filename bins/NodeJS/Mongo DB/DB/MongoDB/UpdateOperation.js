var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbobject = db.db("Finny_nodejs");
  var search = { localaddress: "BTM 2nd Stage" };
  var newData = { $set: {name: "Shreya", localad: "Rajasthan" } };
  dbobject.collection("Student").updateOne(search, newData, function(err, res) {
    if (err) throw err;
    console.log("1 document updated");
	console.log(res);
    db.close();
  });
});