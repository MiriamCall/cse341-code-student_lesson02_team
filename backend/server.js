const express = require("express");
const dotenv = require("dotenv");
const connectToDatabase = require("./database/db_connection");
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;
const HOST = "localhost";

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

app.listen(PORT, HOST, () => {
  console.log(`Server running at http://${HOST}:${PORT}/`);
});
