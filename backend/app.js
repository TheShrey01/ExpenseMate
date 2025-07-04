const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./routes/userRouter");
const categoryRouter = require("./routes/categoryRouter");
const errorHandler = require("./middlewares/errorHandlerMiddlerware");
const transactionRouter = require("./routes/transactionRouter");
const app = express();

//!Connect to mongodb
mongoose
    .connect('mongodb://localhost:27017/ExpenseMate')
    .then(() => console.log("DB Connected")) 
    .catch((e) => console.log(e));


//!Middleware
app.use(express.json()); // to parse JSON bodies

//!Routes
app.use("/", userRouter);

app.use("/", categoryRouter);

app.use("/",transactionRouter);

//Error
app.use(errorHandler);

//!Start the server
const PORT = process.env.PORT || 8000;
app.listen(PORT,() =>
    console.log(`Server is running on this port... ${PORT} `)
);