const jwt = require("jsonwebtoken");

const isAuthenticated = async (req, res, next) => {
    //Get the token from the headers
    const headerObj = req.headers;
    console.log(headerObj);
}; 

module.exports = isAuthenticated;