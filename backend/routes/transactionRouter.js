const express = require("express");
const usersController = require("../controllers/usersCtrl");
const isAuthenticated = require("../middlewares/isAuth");
const categoryController = require("../controllers/categoryCtrl");
const transactionController = require("../controllers/transactionCtrl");
const transactionRouter = express.Router();

//! add
transactionRouter.post(
    "/api/v1/transactions/create",
    isAuthenticated,
    transactionController.create
);

//! lists
transactionRouter.get(
    "/api/v1/transactions/lists",
    isAuthenticated,
    transactionController.lists
);

module.exports = transactionRouter;