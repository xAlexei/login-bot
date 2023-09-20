const VideoModel = require("../models/VideoModel");

async function create (req, res){
    try{
        let dataExists = await VideoModel.findOne({ _id: req.params.id });
        if(dataExists) return { message: "Data of this video already exists" }

        
    }catch(error){

    }
}