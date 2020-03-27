const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    userEmail : String,
    firstActive: String,
    lastActive: String,
    gamesLinked: String,
    totalSpent: String
});

const User = mongoose.model("User", UserSchema);

module.exports = User;