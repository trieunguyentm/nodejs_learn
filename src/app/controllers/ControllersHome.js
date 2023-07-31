const Course = require('../models/Course');

exports.home = async (req, res) => {
  try {
    const courses = await Course.find({});
    res.json(courses);
  } catch (error) {
    res.status(500).json({ error: "Có lỗi" });
  }
};
