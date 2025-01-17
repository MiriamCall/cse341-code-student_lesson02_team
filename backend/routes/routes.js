const express = require("express");

const professionalController = require("../controllers/professional");

const router = express.Router();

router.get("/professional", professionalController.getData);

module.exports = router;
