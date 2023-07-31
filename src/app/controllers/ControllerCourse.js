const Courses = require("../models/Course")
const { mongooseToObject } = require("../../utils/mongoose");

// [GET] url="/courses/:slug"
exports.showDetail = (req, res, next) => {
    Courses.findOne({ slug: req.params.slug })
        .then(course => {
            res.render('courses/showDetail',
                {
                    course: mongooseToObject(course)
                }
            )
        })
        .catch(next);
};
// [GET] url="/courses/create"
exports.createCourse = (req, res, next) => {
    res.render('courses/createCourse')
}

// [POST] url="/courses/store"
exports.storeCourse = (req, res, next) => {
    // res.json(req.body)
    const course = new Courses(req.body);
    course.save()
        .then(() => res.redirect('/'))
        .catch(error => {

        })
}
