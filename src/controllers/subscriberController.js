const Subscriber = require("../models/subscriberModel");
const Course = require("../models/courseModel");

const createSubscriber = async (req, res) => {
  try {
    const newSubscriber = await new Subscriber(req.body);
    newSubscriber.save();
    res.send(newSubscriber);
  } catch (error) {
    console.log(error);
  };
};

const getAllSubs = (req, res) => {
  Subscriber.find()
    .then((allSubscribers) => res.status(200).json({ allSubscribers }))
    .catch((error) => res.status(400).json({ error }));
}

module.exports = createSubscriber;
module.exports = getAllSubs;