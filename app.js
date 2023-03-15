const express = require("express");
const app = express();

require("dotenv").config();
require("./config/database").connect();

const jwt = require("jsonwebtoken");
const verifyToken = require("./middleware/auth");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ROUTES PINCRIPALES
const courseRouteur = require("./routes/courseRouter");
const subscriberRouteur = require("./routes/subscriberRouter");
const userRouteur = require("./routes/userRouter");

app.use("/courses", courseRouteur);
app.use("/subscribers", subscriberRouteur);
app.use("/users", userRouteur);

app.post("/Welcome", verifyToken, (req, res) => {
  res.status(200).send({
    success: true,
    message: "Welcome",
  });
});

module.exports = app;
