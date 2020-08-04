const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const app = require(`${__dirname}/app`);
const mongoose = require("mongoose");

// console.log(process.env.PORT); // in command prompt NODE_ENV=testing nodemon server.js else create an config.env file

let DB;

if (process.env.NODE_ENV === "development") {
  DB = process.env.DATABASE_LOCAL;
} else {
  DB = process.env.DATABASE_CONNECTION.replace(
    "<PASSWORD>",
    process.env.DATABASE_PASSWORD
  );
}

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then((con) => {
    console.log(con.connections);
    console.log("Mongo Connection succeded");
  });

const port = process.env.PORT | 8080;
app.listen(port, "127.0.0.1", () => {
  console.log(`Express server started in ${port}`);
});
