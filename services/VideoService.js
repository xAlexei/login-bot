const VideoModel = require("../models/VideoModel");


async function create (req, res){
    try{        
        const Video = await VideoModel.create({
            videoPath: req.file.path,
            description: req.body.description,
            bookmarks: [{                
                initialTime: req.body.initialTime,
                endTime: req.body.endTime
            }]
        })
        if(Video) return {
            message: "Video uploaded!",
            result: Video
        }        
    }catch(error){
        return {
            message: "Error: " + error
        }
    }
}

async function deleteVideo (req) {
    try {
        const { id } = req.params;
        const Video = await VideoModel.deleteMany({ _id: id })
        if(Video) return {
            message: "Video deleted",
            result: Video
        }
    } catch (error) {
        return { 
            message: "Error: " + error
        }
    }
}

async function detailVideo (req) {
    try {
        const { id } = req.params;
        const Video = await VideoModel.findOne({ _id: id });
        if(Video) return {
            message: "Video found!",
            result: Video
        }
    } catch (error) {
        return {
            message: "Error: " + error
        }
    }
}

async function getVideos (req) {
    try {
        const Video = await VideoModel.find({ });
        if(Video) return {
            message: "Video List",
            result: Video 
        }
    } catch (error) {
        return {
            message: "Error: " + error
        }
    }
}

module.exports = { create, deleteVideo, detailVideo, getVideos }