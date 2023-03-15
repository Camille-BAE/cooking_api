const courseRouteur = require("express").Router();
const newCourse = require('../controllers/courseController')
const getAllCourses = require('../controllers/courseController')
const coursesId = require('../controllers/courseController')

// Créer un Course
courseRouteur.post("/create", newCourse);

// Voir tous les Courses
courseRouteur.get("/", getAllCourses);

// Trouver un Course par son :id
courseRouteur.get("/:id", coursesId);

module.exports = courseRouteur;
