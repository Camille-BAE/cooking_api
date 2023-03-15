const mongoose = require("mongoose");
const { MONGO_URI } = process.env;

exports.connect = () => {
  mongoose
    .connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Successfuly connected to the Database !");
    })
    .catch((err) => {
      console.error("Oh no ! Connection failed to the Database !");
      console.log(err);
      process.exit(1);
    });
};
