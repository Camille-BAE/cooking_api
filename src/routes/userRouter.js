const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const userRouteur = require("express").Router();
const User = require("../models/userModel");

// Créer un User
userRouteur.post("/create", async (req, res) => {
  try {
    const newUser = await new User(req.body);
    // note à moi-même : il faudra Hasher le password avec bcrypt

    newUser.save();
    res.send(newUser);
  } catch (error) {
    console.error(error);
  }
});

// Voir tous les Users
userRouteur.get("/", (req, res) => {
  User.find()
    .then((allUsers) => res.status(200).json({ allUsers }))
    .catch((error) => res.status(400).json({ error }));
});

module.exports = userRouteur;
