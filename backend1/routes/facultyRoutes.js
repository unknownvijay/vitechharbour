const express = require("express");
const router = express.Router();

const{
    creatFaculty,
    getFaculty,
    updateFaculty,
    deletFaculty


}=require("../controller/facultyCtrl");

router.post("/craetfaculty",creatFaculty);

router.get("/getfaculty",getFaculty);

router.patch("/updatefaculty/:id",updateFaculty);

router.delete("/deletefaculty/:id",deletFaculty);









module.exports=router;