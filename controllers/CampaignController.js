const CampaignService = require("../services/CampaignService");

async function createCampaign (req, res){
    try {
        const Campaign = await CampaignService.createCampaign(req, res);
        res.status(200).json(Campaign);
    } catch (error) {
        return res.status(400).json({
            message: "Error: " + error
        })
    }
}

async function getuserCampaigns (req, res){
    try {
        const Campaign = await CampaignService.getCampaign(req, res);
        res.status(200).json(Campaign);
    } catch (error) {
        return res.status(400).json({
            message: "Error: " + error
        })
    }
}

async function getAllcampaigns (req, res) {
    try {
        const Campaign = await CampaignService.getAllcampaigns(req, res);
        res.status(200).json(Campaign);
    } catch (error) {
        return res.status(400).json({
            message: "Error: " + error
        })
    }
}

async function uploadVideo (req, res){
    try {
        const Campaign = await CampaignService.addVideo(req, res);
        res.status(200).json(Campaign)
    } catch (error) {
        return res.status(400).json({
            message: "Error: " + error
        })
    }
}

module.exports = { createCampaign, getuserCampaigns, getAllcampaigns, uploadVideo }