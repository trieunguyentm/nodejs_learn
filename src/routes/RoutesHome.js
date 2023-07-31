const express = require("express");
const router = express.Router();
const ControllerHome = require("../app/controllers/ControllerHome");

// [GET] url="/"
router.get("/", ControllerHome.home);

module.exports = router;
