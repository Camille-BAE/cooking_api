const User = require("../models/userModel");
require("dotenv").config();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const createUser = async (req, res) => {
  try {
    const {name, lastName, email, password, zipCode} = req.body;
    const hashpassword = await bcrypt.hash(password, 10);
  
    const user = await User.create({name, lastName, email, password: hashpassword, zipCode});

    const token = jwt.sign({user_id: user.id, email}, process.env.TOKEN_URI, {expiresIn: "2h"})
    res.send({message: "your new !", token})
  } catch (error) {
    console.error(error);
  }
}
 module.exports = createUser;