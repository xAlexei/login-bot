const CampaignModel = require("../models/CampaignModel");
const fs = require("fs");

async function createCampaign(req){
    try {
        const Campaign = await CampaignModel.create({
            user: req.body.user,
            campaignName: req.body.campaignName,
            description: req.body.description,
            files: req.file.path        
        })             
        if(Campaign) return {
            message: "Campaign created!",
            result: Campaign,            
        }
    } catch (error) {
        return {
            message: "Error: " + error
        }
    }

}

async function getCampaign (req) {
    try {
        const findCampaign = await CampaignModel.find({
            user: req.body.user
        })
        if(!findCampaign) return {
            message: "Can't find campaigns for user"
        }
        return {
            message: "User campaigns",
            result: findCampaign
        }
    } catch (error) {
        return {
            message: "Error: " + error
        }
    }
}

async function getAllcampaigns (){
    try {
        const Campaigns = await CampaignModel.find({})
        .populate({
            path: "user",
            select: { _id: 0, name: 1, surname: 1}
        })
        if(!Campaigns) return {
            message: "Campaigns not found"
        }        
        return {
            message: "All campaigns",
            result: Campaigns
        }
    } catch (error) {
        return {
            message: "Error: " + error
        }
    }
}

async function addVideo (req){
    try {
        const { id } = req.params;
        const { video } = req.body;
        const Campaign = await CampaignModel.findOneAndUpdate({_id: id},
            { video: video }, 
            { new :true });
        if(!Campaign) return {
            message: "Can't upload video",
        } 

        return {
            message: "Video uploaded",
            result: Campaign
        }
    } catch (error) {
        return {
            message: "Error: " + error
        }
    }
}




module.exports = { createCampaign, getCampaign, getAllcampaigns, addVideo }