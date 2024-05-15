const express = require("express");
const router = express.Router();

const {
        creatLogin,
}=require("../controller/loginCtrl");

router.get("/loginuser",creatLogin);




module.exports = router;