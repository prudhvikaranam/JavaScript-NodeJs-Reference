const express = require('express');
const app = express();
const path = require('path');


app.use(express.static(`${__dirname}/staticFiles`)); 
// http://127.0.0.5:3000/index.html URL to access the index.html file which is inside static files folder, we no need to have staticFiles path mentioned in the url because 
// Why don't we need the staticFiles folder here in the URL?
// Well, simply because when we open up a URL
// that it can't find in any of our routes,
// it will then look in that staticFiles folder that we defined.
// And it sets that folder to the root.

app.use(express.static(`${__dirname}/publicFiles`));



// To create a virtual path prefix (where the path does not actually exist in the file system) for files that are served by the express.static function, specify a mount path for the static directory, as shown below:

app.use('/static', express.static('publicFiles'))
// Then url will be like http://localhost:3000/static/images/kitten.jpg

console.log(path.join(__dirname, '../Images'));
app.use('/images',express.static(path.join(__dirname,'../Images')));

app.listen(3000, '127.0.0.5', () => {
    console.log(`Static files server started`);
})