const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const {dbConnection} = require("./config/db");
dbConnection();
const port = process.env.PORT;

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

const tradeRouter = require("./routes/tradeRoutes");

app.use("/api/admin", tradeRouter)

const registerRouter = require("./routes/registerRoutes");
app.use("/api/admin",registerRouter);

const loginUser = require("./routes/loginRoutes");
app.use("/api/admin",loginUser);


const facultyRouter = require("./routes/facultyRoutes");
app.use("/api/admin",facultyRouter)


const studentRegisterRouter = require("./routes/studentRegisterRoutes");
app.use("/api/admin",studentRegisterRouter);






app.listen(port,(req,res)=>{
    console.log('server started : ${port}');
})