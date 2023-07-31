const express = require("express");
const router = express.Router();
const ControllersCourse = require("../app/controllers/ControllerCourse");

// [GET] url="/courses/create"
router.get("/create", ControllersCourse.createCourse)
// [POST] url="/courses/store"
router.post("/store", ControllersCourse.storeCourse)
// [GET] url="/courses/:slug"
router.get("/:slug", ControllersCourse.showDetail)

module.exports = router;
