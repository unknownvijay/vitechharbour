const registerModel = require("../model/registerMoel");

exports.createRegister = async (req, res) => {
    try {
        const userRegister = req.body;

        // Check if user with the given email already exists
        const existsUser = await registerModel.findOne({ email: userRegister.email });
        if (existsUser) {
            return res.status(400).json({ success: false, message: "User is already registered" });
        }

        let id;
        const lastUser = await registerModel.findOne().sort({ createdAt: -1 });
        if (lastUser) {
            // Increment user ID based on the last user
            const lastUserId = parseInt(lastUser.userId.substr(3)); // Extract the numeric part of the ID
            id = `A00${lastUserId + 1}`; // Increment the ID
        } else {
            // If no users exist, start with A001
            id = "A001";
        }

        req.body.userId = id;

        const newRegister = new registerModel(userRegister);
        await newRegister.save();

        console.log("Successfully created new user", newRegister);
        res.status(200)
        .json({ 
            success: true, 
            data: newRegister 
        });
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500)
        .json({ 
            success: false,
             error: "Internal server error" 
            });
    }
};
//djnhjj

exports.getRegister = async (req,res) =>{
    try {
         const registerName = req.body;


        const registerData = await registerModel.find();
        console.log("data",registerData)
        if (registerData==0){
            console.log("data not found :")
        }
        res.status(200)
        .json({
            success:true,
            data:registerData
        })
    } catch (error) {
        res.status(500)
        .json({
            error
        })
        
    }
}