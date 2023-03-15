const userRouteur = require("express").Router();
const createUser = require('../controllers/userController')

// Créer un User
userRouteur.post("/create", createUser);

// Voir tous les Users
userRouteur.get("/", (req, res) => {
  User.find()
    .then((allUsers) => res.status(200).json({ allUsers }))
    .catch((error) => res.status(400).json({ error }));
});

module.exports = userRouteur;
