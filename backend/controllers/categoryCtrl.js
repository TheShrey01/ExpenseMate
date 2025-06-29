const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../model/User");
const Category = require("../model/Category");

const categoryController = {
    //! Add
    create: asyncHandler(async (req, res) => {
        const { name, type } = req.body;
        if (!name || !type) {
            throw new Error("Name and type are required for creating a category");
        }
        // Convert the name to lowercase
        const normalizedName = name.toLowerCase();
        //! Check if the type is valid
        const validTypes = ["income", "expense"];
        if (!validTypes.includes(type.toLowerCase())) {
            throw new Error("Invalid category type " + type);
        }
        // Check if category already exists for the user
        const categoryExists = await Category.findOne({
            name: normalizedName,
            user: req.user,
        });
        if (categoryExists) {
            throw new Error(
                `Category ${categoryExists.name} already exists in the database`
            );
        }
        //! Create the category
        const category = await Category.create({
            name: normalizedName,
            user: req.user,
            type,
        });
        res.status(201).json(category);
    }),

    //! Lists
    lists: asyncHandler(async (req, res) => {
        const categories = await Category.find({ user: req.user });
        res.status(200).json(categories);
    }),

    //! Update
    update: asyncHandler(async (req, res) => {
        // Implementation here
        res.json({ message: "Category updated (stub)" });
    }),

    //! Delete
    delete: asyncHandler(async (req, res) => {
        // Implementation here
        res.json({ message: "Category deleted (stub)" });
    }),
};

module.exports = categoryController;