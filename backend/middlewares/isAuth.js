const jwt = require("jsonwebtoken");

const isAuthenticated = (req, res, next) => {
    const headerObj = req.headers;
    const token = headerObj?.authorization?.split(" ")[1];
    if (!token) {
        return next(new Error("No token provided"));
    }
    jwt.verify(token, "myKey", (err, decoded) => {
        if (err) {
            return next(new Error("Token expired, login again"));
        }
        req.user = decoded.id;
        next();
    });
};

module.exports = isAuthenticated;