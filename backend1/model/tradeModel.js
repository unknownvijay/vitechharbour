const mongoose = require("mongoose");

const tradeSchema = mongoose.Schema(
    {
        imageUrl:String,
        description : String,
        tradeName : String,
        duration : String,
        qualifiction :String
    }
);

module.exports = mongoose.model("trade", tradeSchema);