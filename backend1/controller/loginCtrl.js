const loginModel = require("../model/registerMoel");

exports.creatLogin = async (req , res) => {
    try {
        const userLogin = req.body;
        const existsUser = await loginModel.findOne({
            email: userLogin.email
        })
        if (existsUser) {
            console.log("sucessfull new login");
        }
        const newLogin =  new loginModel (userLogin)
        await newLogin.save();
        
        console.log("",newLogin)
        res.status(200)
        .json(
            {
                success:true,
                data : newLogin
            }
        )
    } catch (error) {
        res.status(500)
        .json({
            error
        });
        console.log(error);

    }
}