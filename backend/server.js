const express = require("express");
const dotenv = require("dotenv");
const connectToDatabase = require("./database/db_connection");
dotenv.config();

const app = express();
const port = process.env.PORT || 8080;
const host = process.env.HOST || "localhost";

app.use(express.json()); //used to parse JSON bodies

connectToDatabase()
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((error) => {
    console.error("Error connecting to the database");
    console.error(error);
  });

app.use("/", require("./routes"));

app.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`);
});
