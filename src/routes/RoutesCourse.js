const express = require("express");
const router = express.Router();
const ControllersCourse = require("../app/controllers/ControllerCourse");

// [GET] url="/courses/:slug"
router.get("/:slug", ControllersCourse.showDetail)

module.exports = router;
