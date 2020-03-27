const Finance = require("../models/finances.model");

module.exports.createNewFinance = (req, res) => {
    Finance.create(req.body)
        .then(newlyCreatedFinance => res.json({ user : newlyCreatedFinance , error: null}))
        .catch(err => res.json({ message: "Something went wrong", error: err }))
    // const newUser = JSON.stringify(new User(), null, '\t')
    //
    // res.send(newUser);
};

module.exports.findAllFinances = (req, res) => {
    Finance.find()
        // .sort({ petType: 'asc' })
        .then(allFinances => res.json({ finances: allFinances }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.findOneSingleFinance = (req, res) => {
    Finance.findOne({ _id: req.params.id })
        .then(oneSingleFinance => res.json({ finance: oneSingleFinance }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.updateExistingFinance = (req, res) => {
    Finance.findOneAndUpdate({ _id: req.params.id }, req.body, { runValidators: true,
        new: true })
        .then(updatedFinance => res.json({ finance: updatedFinance, error: null }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.deleteAnExistingFinance = (req, res) => {
    Finance.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};
