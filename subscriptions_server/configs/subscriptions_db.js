const mongoose = require("mongoose");

const connectSubsDB = () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("Connected to subscriptionsDB");
    })
    .catch((error) => console.log(error));
};

module.exports = connectSubsDB;
