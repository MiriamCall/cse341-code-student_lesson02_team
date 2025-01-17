const router = require("express").Router();
const professionalController = require("../controllers/professional");

router.get("/professional", professionalController.getData);

module.exports = router;
