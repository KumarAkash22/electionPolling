const express = require("express");
const { getAllCities,createElectionPoll } = require("../controllers/pollController");
const router = express.Router();

router.route("/name").get(getAllCities);  //get alldata
router.route("/name/election").post(createElectionPoll); // 


module.exports = router