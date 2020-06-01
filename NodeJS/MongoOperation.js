const mongoclient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/test";
const express = require("express");
const bodyparser = require("body-parser");
const app = express();
app.use(bodyparser.json());


app.get("/getdetails/:age", function (req, res) {
    mongoclient.connect(url, function (err, db) {
        var dbselect = db.db("finny_nodejs");
        var age = req.params.age;
        var que = { age: age };
        console.log('Que',que);
        dbselect.collection("employee").findOne(que, function (err, result) {
            if (err) throw err;
            res.send(result);
            db.close();
        });
    })
});

app.get("/getonedetails", function (req, res) {
    mongoclient.connect(url, function (err, db) {
        var dbselect = db.db("test");
        dbselect.collection("GoodMovies").find({}).toArray(function (err, result) {
            if (err) throw err;
            res.send(result);
            db.close();
        });
    })
});

app.post("/insertdetails", function (req, res) {
    var data = {
        name: "John",
        age: "31"
    }
    mongoclient.connect(url, function (err, db) {
        var dbselect = db.db("finny_nodejs");
        dbselect.collection("employee").insert(data, function (err, result) {
            if (err) throw err;
            console.log("inserted successfully");
            res.send("inserted successfully");
        })

    });

});

app.put("/updatedetails", function (req, res) {

    mongoclient.connect(url, function (err, db) {
        var dbselect = db.db("finny_nodejs");
        var que = { age: 29 }
        var newVal =  { age: 30 }
        var newvalues = { $set: newVal }
        dbselect.collection("employee").updateOne(que, newvalues, function (err, result) {
            if (err) throw err;
            console.log("updated successfully");
            res.send("updated successfully");
        })

    });

});

app.delete("/deletedetails", function (req, res) {

    mongoclient.connect(url, function (err, db) {
        var dbselect = db.db("finny_nodejs");
        var que = { salary: 20000 }

        dbselect.collection("employee").deleteOne(que, function (err, result) {
            if (err) throw err;
            console.log("deleted successfully");
            res.send("deleted successfully");
        })

    });

});
app.listen(3009, () => console.log("connected to the server 3009"))