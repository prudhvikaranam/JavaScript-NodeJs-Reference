const app = require('./app');
console.log('process in server file', process.env.USERNAME);

app.listen(3030, '127.0.0.2', () => {
    console.log(`Express API mini Project started running!!!!`);
})