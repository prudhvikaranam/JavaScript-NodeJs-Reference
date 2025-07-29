const { app } = require('./app');
const { connectToDataBase } = require('./dbConnect');


connectToDataBase().then(async () => {
    console.log('Connection Established');
    app.listen(9090, '127.0.0.2', () => {
        console.log('Server started on 9090');
    });
}).catch((err) => {
    console.log('Connection to db failed', err);

})


