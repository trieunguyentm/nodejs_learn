const { mongooseToObject, multipleMongooseToObject } = require("../../utils/mongoose");
const Courses = require("../models/Course");

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

// [GET] url="/courses/my-course"
exports.myCourse = (req, res, next) => {
    Courses.find({})
        .then(courses => res.render('courses/myCourse', {
            courses: multipleMongooseToObject(courses)
        }))
        .catch(next)
}

// [POST] url="/courses/store"
exports.storeCourse = (req, res, next) => {
    // res.json(req.body)
    const course = new Courses(req.body);
    course.save()
        .then(() => res.redirect('/'))
        .catch(next)
}

// [GET] url="/courses/my-course/:id/edit"
exports.editMyCourse = (req, res, next) => {
    Courses.findById(req.params.id)
        .then(course => res.render('courses/editCourse', {
            course: mongooseToObject(course)
        }))
        .catch(next)

}

// [DELETE] url="/courses/:id/delete"
exports.deleteMyCourse = (req, res, next) => {
    Courses.deleteOne(
        {
            _id: req.params.id,
        }
    )
        .then(() => res.redirect("/courses/my-course"))
        .catch(next)
}

// [PUT] url="/courses/:id/update"
exports.updateCourse = (req, res, next) => {
    Courses.updateOne(
        { _id: req.params.id },
        {
            name: req.body.name,
            description: req.body.description,
        }
    )
        .then(res.redirect("/courses/my-course"))
        .catch(next)
}