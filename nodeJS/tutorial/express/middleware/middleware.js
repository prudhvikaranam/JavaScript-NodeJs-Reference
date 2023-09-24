//Middleware are the functions which gets called in the incoming and the response cycle.
// *** Order is also important while implementing the middleware's

app.use(express.json()); // Here express.json() is the middleware which gets called everytime when a request is made and specifically it is used to convet the incoming request data to JSON format..


// Apart from the above we can create our own custom middleware functions as below..
// Custom middleware accepts three parameters
// 1) request
// 2) response
// 3) next
// Here next is the mandatory paramtere which needs to be called in every middleware, If we omit this middleware the the incoming request and response cycle will be stuck in that middleware itself...

app.use((req,res,next) => {
    // we can manipulate req here ;
    // req.abc = 'abc';
    next();
})

// or

app.use(`/routePath`, (req,res,next) => {
    // this middleware will be called when ever a request is made to this route path
    next();
})


// some useful middleware.
const morgan = require('morgan'); //This is a HTTP request logger middleware for node.js.

console.log(morgan('dev'));