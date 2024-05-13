const express = require("express");
const router = express.Router();

const{
    creatTrade,
    getTrade,
    updateTrade,
    deleteTrade

}= require("../controller/tradeCtrl");

router.post("/creatTrade",creatTrade);
router.get("/getTrade",getTrade);
router.patch("/updateTrade/:id",updateTrade);
router.delete("/deleteTrade",deleteTrade);



module.exports = router;