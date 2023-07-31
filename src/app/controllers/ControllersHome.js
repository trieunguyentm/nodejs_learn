const Course = require('../models/Course');
const { multipleMongooseToObject } = require("../../utils/mongoose");
// [GET] url="/"
exports.home = (req, res, next) => {
  Course.find({})
    .then(
      courses => {
        res.render('home', { courses: multipleMongooseToObject(courses) })
      }
    )
    .catch(next)
};
