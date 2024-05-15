const StudentRegisterModel = require("../model/StudenRegisterModel");

exports.createStudentRegister = async (req, res) => {
    try {
        const studentRegister = req.body;

        // Check if user with the given email already exists
        const existsUser = await StudentRegisterModel.findOne({ email: studentRegister.email });
        if (existsUser) {
            return res.status(400).json({ success: false, message: "User is already registered" });
        }

        let id;
        const lastUser = await StudentRegisterModel.findOne().sort({ createdAt: -1 });
        if (lastUser) {
            // Increment user ID based on the last user
            const lastUserId = parseInt(lastUser.userId.substr(3)); // Extract the numeric part of the ID
            id = `A00${lastUserId + 1}`; // Increment the ID
        } else {
            // If no users exist, start with A001
            id = "A001";
        }

        req.body.userId = id;

        const newRegister = new StudentRegisterModel(studentRegister);
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

exports.getStudentRegister = async (req, res) => {
   
    
    let query = {};

    try {
        if (req.query.name) {
            const fullName = req.query.name.trim();
            const nameParts = fullName.split(" ");
            const nameRegex = nameParts.map((part) => new RegExp(part, "i"));
        
            query.$or = [
              { firstname: { $regex: nameRegex[0] } },
              { lastname: { $regex: nameRegex[0] } },
            ];
        
            if (nameParts.length > 1) {
              query.$or.push(
                { firstname: { $regex: nameRegex[1] } },
                { lastname: { $regex: nameRegex[1] } }
              );
            }
          }

        console.log("Generated Query:", query); // Log the generated query

        const totalCount = await StudentRegisterModel.countDocuments(query);

        console.log("Total Count:", totalCount); // Log the total count of documents

        // Query the database with pagination
        const tradeData = await StudentRegisterModel.find(query)
            

        console.log("Retrieved Data:", tradeData); // Log the retrieved data

        if (tradeData.length === 0) {
            console.log("No trade data found.");
            return res.status(404).json({ 
                success: false, 
                message: "No trade data found." 
            });
        }

        // Return paginated trade data
        res.status(200).json({ 
            success: true, 
            data: tradeData,
          
        });
    } catch (error) {
        console.error("Error fetching trade data:", error);
        res.status(500).json({ 
            success: false,
            error: "Internal server error" 
        });
    }
};
