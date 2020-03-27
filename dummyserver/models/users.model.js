const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    userEmail : {
        type: String,
        required: true
    },
    firstActive: String,
    lastActive: String,
    gamesLinked: String,
    totalSpent: String,
    password: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;