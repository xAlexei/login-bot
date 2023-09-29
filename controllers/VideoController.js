const VideoService = require("../services/VideoService");

async function uploadVideo (req, res) {
    try {
        const Video = await VideoService.create(req, res);
        res.status(200).json(Video);
    } catch (error) {
        return res.status(400).json({
            message: error.message
        })
    }
}

async function deleteVideo (req, res) {
    try {
        const Video = await VideoService.deleteVideo(req, res);
        res.status(200).json(Video);
    } catch (error) {
        return res.status(400).json({
            message: error.message
        })
    }
}

async function detailVideo (req, res) {
    try {
        const Video = await VideoService.detailVideo(req, res);
        res.status(200).json(Video);
    } catch (error) {
        return res.status(400).json({
            message: error.message
        })
    }
}

async function getVideos (req, res) {
    try {
        const Video = await VideoService.getVideos(req, res);
        res.status(200).json(Video);
    } catch (error) {
        return res.status(400).json({
            message: error.message
        })
    }
}

module.exports = { uploadVideo, deleteVideo, detailVideo, getVideos };