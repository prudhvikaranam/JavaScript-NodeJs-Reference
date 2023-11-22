const app = require('./app');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const fs = require('fs');
const toursModel = require('./toursModel');



const db = process.env.MONGO_URL.replace('<USERNAME>', process.env.MONGO_USERNAME).replace('<PASSCODE>', process.env.MONGO_PASSWORD);
mongoose.connect(db).then(() => {
    console.log('Connected to Mongo server');
}).catch((err) => {
    console.log('Problem in connecting to DBb', err);
})

const readDumpData = fs.readFileSync('./dump.json', 'utf-8');

const deleteData = async () => {
    try {
        await toursModel.deleteMany();
        console.log('Successfully delete data');
        process.exit();
    } catch (error) {
        console.log('Error in deleting', error);
        process.exit();
    }
}

const addData = async () => {
    await toursModel.create(JSON.parse(readDumpData)).then((data) => {
        console.log(`Data added successfully`, data);
    }).catch((error) => {
        console.log('Error in adding data', error);
    })
    process.exit();

}

if (process.argv[2] === '--import') {
    console.log(`coming inside`);
    addData();

} else if (process.argv[2] === '--delete') {
    deleteData();
}

// To add this import and delete keywords into process.argv we need to run this js (script) file with below command
// node multiDataScript.js --import (or) node multiDataScript.js --delete
// To  automatically come out of the script after work is done we can use process.exit() to stop script execution.


console.log(process.argv)



