const express = require("express");
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
app.set('json spaces', 4)
app.use(cors())

// This will fire our mongoose.connect statement to initialize our database connection
require("../dummyserver/config/mongoose.config");

app.use(express.json(), express.urlencoded({ extended: true }));

// This is where we import the users routes function from our user.routes.js file
const AllMyUserRoutes = require("../dummyserver/routes/users.routes");
const AllMyFinanceRoutes = require("../dummyserver/routes/finances.routes")
AllMyUserRoutes(app);
AllMyFinanceRoutes(app)

const authentication = require("../dummyserver/routes/authentication.routes");
app.use("/authentication", authentication);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// other middleware
app.use(bodyParser.json());

app.listen(8000, () => console.log("The server is all fired up on port 8000"));



// // import React from "react";
//
// const express = require("express")
// const faker = require("faker")
// const app = express()
//
//
// app.use(express.json());
// app.use(express.urlencoded({extended:true}));
//
//
// class User {
//     constructor(){
//         this._id = faker.random.uuid()
//         this.email =faker.internet.email()
//         this.firstActive = faker.date.past()
//         this.lastActive = faker.date.recent()
//         this.gamesLinked = faker.hacker.verb()
//         this.totalSpent = faker.finance.amount()
//     }}
//
// class Transaction {
//     constructor(){
//         this._id = faker.finance.account()
//         this.userID = faker.random.uuid()
//         this.productID = faker.internet.password()
//         this.transactionAmont = faker.commerce.price()
//         this.transactionDateTime = faker.date.recent()
//     }}
//
//
//
// app.get('/api', (req,res) => {
//     res.send("Dashboard..");
// })
//
// app.get('/api/users/new', (req,res) => {
//     const newUser = JSON.stringify(new User(), null, '\t')
//
//     res.send(newUser);
// })
//
// app.get('/api/companies/new', (req,res) => {
//     res.send(new Transaction());
// })
//
// app.get("/api/user", (req,res) => {
//     res.send({
//         user: new User(),
//         company: new Transaction(),
//     });
// })
//
// const server = app.listen(8000,() => {
//     console.log(`Server is locked and loaded on ${server.address().port}!`)
// })