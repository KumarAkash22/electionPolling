const express = require("express");
const { getAllCities,createElectionPoll, sortCity, sortVillage,sortTown ,sortMetroCity} = require("../controllers/pollController");
const router = express.Router();

router.route("/name").get(getAllCities);  //get alldata
router.route("/name/election").post(createElectionPoll); // 
router.route("/name/filter/city").get(sortCity); //
router.route("/name/filter/town").get(sortTown); // 
router.route("/name/filter/village").get(sortVillage); // 
router.route("/name/filter/Metrocity").get(sortMetroCity); // 



module.exports = router