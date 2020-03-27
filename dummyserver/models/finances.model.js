const mongoose = require("mongoose");

const FinanceSchema = new mongoose.Schema({
    userID : String,
    itemID: String,
    gameID: String,
    dateCharged: Date,
    amountCharged: Number,
    methodCharged: String
});

const Finance = mongoose.model("Finance", FinanceSchema);

module.exports = Finance;