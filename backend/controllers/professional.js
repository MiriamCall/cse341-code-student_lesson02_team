const mongodb = require("../database/db_connection");

professionalController.getData = (req, res, next) => {
  const data = utils.getData(req, res, next);
  res.json(data);
};

module.exports = professionalController;
