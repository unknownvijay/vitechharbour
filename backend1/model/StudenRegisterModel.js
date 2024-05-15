const mongoose = require("mongoose");

const registerSchema = mongoose.Schema(
    {
       firstname: {
        type : String,
        index: true,
       },
       lastname: {
        type : String,
        index: true,
       },
       rollno : String,
       email: String,
       age : Number,
       class: String,
       gender : String,
       address: String,
       userId : String,

    },
    {
        timestamps: true,
    }
);
registerSchema.index({ firstname: 1, lastname: 1 });
module.exports = mongoose.model("studentregister", registerSchema);
