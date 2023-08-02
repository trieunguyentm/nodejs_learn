const express = require("express");
const router = express.Router();
const ControllersCourse = require("../app/controllers/ControllerCourse");

// [GET] url="/courses/create"
router.get("/create", ControllersCourse.createCourse)
// [PUT] url="/courses/:id/update"
router.put("/:id/update", ControllersCourse.updateCourse)
// [GET] url="/courses/my-course/:id/edit"
router.get("/my-course/:id/edit", ControllersCourse.editMyCourse)
// [DELETE] url="/courses/:id/delete"
router.delete("/:id/delete", ControllersCourse.deleteMyCourse)
// [GET] url="/courses/my-course"
router.get("/my-course", ControllersCourse.myCourse)
// [POST] url="/courses/store"
router.post("/store", ControllersCourse.storeCourse)
// [GET] url="/courses/:slug"
router.get("/:slug", ControllersCourse.showDetail)

module.exports = router;
