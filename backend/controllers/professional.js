const mongodb = require("../database/db_connection");

const getData = async (req, res, next) => {
  const results = await mongodb.getDb().db().collection("users").find();
  result.toArray().then((lists) => {
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(lists[0]); // we just need the first one (the only one)
  });
};

module.exports = { getData };

// professionalController.getData = (req, res, next) => {
//   const data = utils.getData(req, res, next);
//   res.json(data);
// };

// module.exports = professionalController;
