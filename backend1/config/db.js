const mongoose = require("mongoose");


require('dotenv').config()

exports.dbConnection = async () => {
    try {
        await mongoose.connect(`${process.env.MONGO_URI}/vijay`);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
};