const Course = require("../models/courseModel");

const newCourse = async (req, res) => {
  try {
    const newCourse = await new Course(req.body);
    newCourse.save();
    res.send(newCourse);
  } catch (error) {
    console.error(error);
  };
};

const getAllCourses = (req, res) => {
  Course.find()
    .then((allCourses) => res.status(200).json({ allCourses }))
    .catch((error) => res.status(400).json({ error }));
};

const coursesId = async (req, res) => {
  try {
    const oneCourse = await Course.findById(req.params.id);
    res.send(oneCourse);
  } catch (error) {
    console.error(error);
  };
};

module.exports = newCourse;
module.exports = getAllCourses;
module.exports = coursesId;