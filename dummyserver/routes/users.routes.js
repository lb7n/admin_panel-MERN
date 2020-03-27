const UserController = require("../controllers/users.controller");

module.exports = app => {
    app.get("/api/users/",  UserController.findAllUsers);
    app.post("/api/users/new",  UserController.createNewUser);
    app.get("/api/users/:id",  UserController.findOneSingleUser);
    app.put("/api/users/update/:id",  UserController.updateExistingUser);
    app.delete("/api/users/delete/:id",  UserController.deleteAnExistingUser);
};
