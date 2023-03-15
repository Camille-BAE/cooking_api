const subscriberRouteur = require("express").Router();
const createSubscriber = require('../controllers/subscriberController');
const findSub = require('../controllers/subscriberController');

// Créer un Subscriber
subscriberRouteur.post("/create", createSubscriber);

// Voir tous les subscribers
subscriberRouteur.get("/", findSub);

// Ajouter un Course

module.exports = subscriberRouteur;
