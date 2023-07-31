const express = require("express");
const router = express.Router();
const ControllersHome = require("../app/controllers/ControllersHome");

// [GET] url="/"
router.get("/", ControllersHome.home);

module.exports = router;
