const fs = require('fs');
const toursModel = require('./toursModel');

const readDumpData = fs.readFileSync('./dump.json', 'utf-8');


if (process.argv[2] === 'import') {
    toursModel.create(JSON.parse(readDumpData));
    process.exit();
} else if (process.argv[2] === 'delete') {
    toursModel.deleteMany();
    process.exit();
}

// To add this import and delete keywords into process.argv we need to run this js (script) file with below command
// node multiDataScript.js --import (or) node multiDataScript.js --delete
// To  automatically come out of the script after work is done we can use process.exit() to stop script execution.


console.log(process.argv)


