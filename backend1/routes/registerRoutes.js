const express = require("express");
const router = express.Router();

const {
    createRegister,
    getRegister
} = require("../controller/registerCtrl");

router.post("/creatregister",createRegister);
router.get("/getregister",getRegister);





module.exports = router;