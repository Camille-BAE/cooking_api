const courseRouteur = require("express").Router();
const Course = require("../models/courseModel");

// Créer un Course
courseRouteur.post("/create", async (req, res) => {
  try {
    const newCourse = await new Course(req.body);
    newCourse.save();
    res.send(newCourse);
  } catch (error) {
    console.error(error);
  }
});

// Voir tous les Courses
courseRouteur.get("/", (req, res) => {
  Course.find()
    .then((allCourses) => res.status(200).json({ allCourses }))
    .catch((error) => res.status(400).json({ error }));
});

// Trouver un Course par son :id
// Problème : Ne me revoie que un seul et même course même quand je change l'id dans postman
courseRouteur.get("/:id", async (req, res) => {
  try {
    const oneCourse = await Course.findById(req.params.id);
    res.send(oneCourse);
  } catch (error) {
    console.error(error);
  }
});

module.exports = courseRouteur;
