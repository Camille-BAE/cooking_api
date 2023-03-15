const subscriberRouteur = require("express").Router();
const createSubscriber = require('../controllers/subscriberController');
const getAllSub = require('../controllers/subscriberController');

// Créer un Subscriber
subscriberRouteur.post("/create", createSubscriber);

// Voir tous les subscribers
subscriberRouteur.get("/", getAllSub);

// Ajouter un Course

module.exports = subscriberRouteur;
