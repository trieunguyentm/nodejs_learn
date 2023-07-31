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
