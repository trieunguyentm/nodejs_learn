const Course = require('../models/Course');

// [GET] url="/"
exports.home = (req, res, next) => {
  Course.find({})
    .then(courses => res.json(courses))
    .catch(next)
};
