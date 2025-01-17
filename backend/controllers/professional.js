const connectToDatabase = require("../database/db_connection");

// GET return all users from the database
const getData = async (req, res, next) => {
  try {
    const db = await connectToDatabase("demo_data");
    const users = await db.collection("users");
    const result = await users.find({}).toArray(); // Fetch all users
    res.json(result); // Send the result as a JSON response
  } catch (error) {
    console.error("Error getting data from the database");
    console.error(error);
  }
};

module.exports = { getData };
