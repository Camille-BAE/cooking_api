const subscriberRouteur = require("express").Router();
const Subscriber = require("../models/subscriberModel");

const Course = require("../models/courseModel");

// Créer un Subscriber
subscriberRouteur.post("/create", async (req, res) => {
  try {
    const newSubscriber = await new Subscriber(req.body);
    newSubscriber.save();
    res.send(newSubscriber);
  } catch (error) {
    console.log(error);
  }
});

// Voir tous les subscribers
subscriberRouteur.get("/", (req, res) => {
  Subscriber.find()
    .then((allSubscribers) => res.status(200).json({ allSubscribers }))
    .catch((error) => res.status(400).json({ error }));
});

// Voir tous les Courses via la route Subscriber
subscriberRouteur.get("/courses", (req, res) => {
  Course.find()
    .then((allCourses) => res.status(200).json({ allCourses }))
    .catch((error) => res.status(400).json({ error }));
});

// Ajouter un Course


module.exports = subscriberRouteur;
