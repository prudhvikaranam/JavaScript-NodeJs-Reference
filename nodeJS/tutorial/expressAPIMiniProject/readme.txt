This is a sample mini project which demonstrates how a better project can be set-up
//Controller Files will have all the functions which will be triggered as a call back function when a API is called.
//Router Files will have all the API's which are built with Router middleware
// Server.js will be the file as a starting point.


In this miniproject below is how code works

1) Controllers will have the Callback methods which is responsible for handling requests and responses (These Callback functions are used in Routers File and will be triggered on calling the API).
2) We have used express.Router middleware and organized the code structure.
3) These middleware is used in the app.js file which is the central file where all the express related is written
4) Now we have all the express API's in the app const which is declared in app.js file, hence we can export this and can use in the server.js file which will be responsible for server related access.