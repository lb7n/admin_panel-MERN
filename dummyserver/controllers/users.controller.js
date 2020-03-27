const User = require("../models/users.model");

module.exports.createNewUser = (req, res) => {
    User.create(req.body)
        .then(newlyCreatedUser => res.json({ user : newlyCreatedUser , error: null}))
        .catch(err => res.json({ message: "Something went wrong", error: err }))
    // const newUser = JSON.stringify(new User(), null, '\t')
    //
    // res.send(newUser);
};

module.exports.findAllUsers = (req, res) => {
    User.find()
        // .sort({ petType: 'asc' })
        .then(allUsers => res.json({ users: allUsers }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.findOneSingleUser = (req, res) => {
    User.findOne({ _id: req.params.id })
        .then(oneSingleUser => res.json({ user: oneSingleUser }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.updateExistingUser = (req, res) => {
    User.findOneAndUpdate({ _id: req.params.id }, req.body, { runValidators: true,
        new: true })
        .then(updatedUser => res.json({ user: updatedUser, error: null }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.deleteAnExistingUser = (req, res) => {
    User.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};
