const userRouteur = require("express").Router();
const createUser = require('../controllers/userController');
const getAllUsers = require('../controllers/userController');

// Créer un User et le sauvegarder
userRouteur.post("/create", createUser);

// Voir tous les Users
userRouteur.get("/", getAllUsers);

module.exports = userRouteur;
