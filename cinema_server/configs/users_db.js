const mongoose = require("mongoose");

const connectUsersDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to usersDB");
  } catch (err) {
    console.error(err);
  }
};

module.exports = connectUsersDB;
