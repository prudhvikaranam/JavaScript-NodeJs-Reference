// mongodb+srv://prudhviteja7443:vYp2bdKpoYT7od1v@namasteuserscluster.8t1dcem.mongodb.net/
// mongodb+srv://prudhviteja7443:<db_password>@namasteuserscluster.8t1dcem.mongodb.net/

const http = require('http');
const { MongoClient } = require("mongodb");

const url = "mongodb+srv://prudhviteja7443:vYp2bdKpoYT7od1v@namasteuserscluster.8t1dcem.mongodb.net/"

const client = new MongoClient(url);
async function run() {
    try {
        // Connect to the Atlas cluster
         await client.connect();
         // Get the database and collection on which to run the operation
         const db = client.db("NamastheUsers");
         const col = db.collection("users");
         // Create new documents                                                                                                                                         
         // Find the document
         const filter = { };
         const document = await col.findOne(filter);
         // Print results
         console.log("Document found:\n" + JSON.stringify(document));
        } catch (err) {
         console.log(err.stack);
     }
 
     finally {
        await client.close();
    }
 
}
run().catch(console.dir);
