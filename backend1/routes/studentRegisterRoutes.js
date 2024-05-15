const express = require('express');
const router = express.Router();

const{
    createStudentRegister,
    getStudentRegister
   
    
}=require("../controller/studentRegisterCtrl");

router.post("/creatstudentregister",createStudentRegister);

router.get("/getStudentRegister",getStudentRegister);





module.exports=router;