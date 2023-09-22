const CampaignModel = require("../models/CampaignModel");

async function createCampaign(req, res){

    try {
        const Campaign = await CampaignModel.create({
            user: req.body.user,
            campaignName: req.body.name        
        })
        if(Campaign) return {
            message: "Campaign created!",
            result: Campaign
        }
    } catch (error) {
        return {
            message: "Error: " + error
        }
    }

}

async function getCampaign (req, res) {
    try {
        const findCampaign = await CampaignModel.find({
            user: req.params.user
        })
        if(!findCampaign) return {
            message: "Can't find campaigns for user"
        }
        return {
            message: "User campaigns"
        }
    } catch (error) {
        return {
            message: "Error: " + error
        }
    }
}