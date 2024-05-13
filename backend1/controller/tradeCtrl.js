const tradeModel= require("../model/tradeModel");

exports.creatTrade = async (req , res) => {
    try {
        const tradeData = req.body;
        const newTrade =  new tradeModel (tradeData)
        await newTrade.save();
        console.log("sucessfull new tradeData",newTrade)
        res.status(200)
        .json(
            {
                success:true,
                data : newTrade
            }
        )
    } catch (error) {
        res.status(500)
        .json({
            error
        })
    }
}

exports.getTrade = async (req, res) => {
    const page = parseInt(req.query.page) || 1;
  const pageSize = parseInt(req.query.pageSize) || 10;
    try {


        const totalCount = await tradeModel.countDocuments();

        // Query the database with pagination
        const tradeData = await tradeModel.find()
        .skip((page - 1) * pageSize)
         .limit(pageSize);

        if (tradeData.length === 0) {
            console.log("No trade data found.");
            return res.status(404)
            .json({ 
                success: false, 
                message: "No trade data found." 
            });
        }

        // Return paginated trade data
        res.status(200).
        json({ 
            success: true, 
            data: tradeData,
            pageInfo: {
                currentPage: page,
                pageSize,
                totalPages: Math.ceil(totalCount / pageSize),
                totalItems: totalCount,
              },
         });
    } catch (error) {
        console.error("Error fetching trade data:", error);
        res.status(500)
        .json({ 
            success: false,
             error: "Internal server error" 
            });
    }
    


}

exports.updateTrade = async (req, res) =>{
    try {
        const id = req.params.id;
        const updateData = await tradeModel.findByIdAndUpdate(
            id,
            req.body,
            // {new : true}
    );
        console.log("updtae",updateData);

        res.status(200)
        .json({
            success:true,
            data:updateData

        });
    } catch (error) {
        res.status(500)
        .json({
            error
        })
        console.log(error)
    }
}

exports.deleteTrade = async (req, res) =>{
    try {
        const id = req.params.id; 
        const deleteData = await tradeModel.findByIdAndDelete("66410b6d6a3fbad4bcbdd9d7");
        console.log("delet",deleteData);

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
        console.log(error)
    }
}