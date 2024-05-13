const facultyModel = require("../model/facultyModel");

exports.creatFaculty = async (req , res) => {
    try {
        const facultyData = req.body;
        const newFaculty =  new facultyModel (facultyData)
        await newFaculty.save();
        console.log("sucessfull new facultyData",newFaculty)
        res.status(200)
        .json(
            {
                success:true,
                data : newFaculty
            }
        )
    } catch (error) {
        res.status(500)
        .json({
            error
        })
    }
}

exports.getFaculty = async (req,res) =>{
    try {
       


        const facultyData = await facultyModel.find();
        console.log("data",facultyData)
        if (facultyData==0){
            console.log("data not found :")
        }
        res.status(200)
        .json({
            success:true,
            data:facultyData
        })
    } catch (error) {
        res.status(500)
        .json({
            error
        })
        
    }
}

exports.updateFaculty = async (req, res) =>{
    try {
        const id = req.params.id;
        const facultyData = await facultyModel.findByIdAndUpdate(
            id,
            req.body,
            // {new : true}
    );
        console.log("updtae",facultyData);

        res.status(200)
        .json({
            success:true,
            data:facultyData

        });
    } catch (error) {
        res.status(500)
        .json({
            error
        })
        console.log(error)
    }
}

exports.deletFaculty = async (req,res )=>{
    try {
        const id = req.params.id;
        const deleteData = await facultyModel.findByIdAndDelete(id,req.body);
        console.log("deleteData",deleteData);

        res.status(200)
        .json({
            success:true,
            data:deleteData
        });

        
    } catch (error) {
        res.status(500)
        .json({
            error
        })
    }
}