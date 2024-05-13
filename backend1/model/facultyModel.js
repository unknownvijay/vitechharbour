const mongoose = require("mongoose");

const facultySchema = mongoose.Schema(
    {
        name : String,
        email : String,
        password : String
    }
);

module.exports = mongoose.model("faculty", facultySchema);