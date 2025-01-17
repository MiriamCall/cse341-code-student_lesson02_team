const express = require("express");
const dotenv = require("dotenv");
const connectToDatabase = require("./database/db_connection");
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json()); //used to parse JSON bodies

connectToDatabase()
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((error) => {
    console.error("Error connecting to the database");
    console.error(error);
  });

app.use("/api", require("./routes/routes"));

if (process.env.NODE_ENV === "development") {
  app.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}/`);
  });
} else if (process.env.NODE_ENV === "production") {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
} else {
  console.error("NODE_ENV not set");
}
