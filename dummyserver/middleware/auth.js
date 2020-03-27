const jwt = require("jsonwebtoken");
const secret = "lskdjalksdjaklsdhuasda9182u89iwdlasda";

module.exports = function(req, res, next) {
    const token = req.header("token");
    if (!token) return res.status(401).json({ message: "Auth Error" });

    try {
        const decoded = jwt.verify(token, secret);
        req.user = decoded.user;
        next();
    } catch (e) {
        console.error(e);
        res.status(500).send({ message: "Invalid Token" });
    }
};