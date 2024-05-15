const mongoose = require("mongoose");

const registerSchema = mongoose.Schema(
    {
        name : String,
        email : String,
        password : String,
        userId : String
    }
);

module.exports = mongoose.model("user register", registerSchema);