const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CampaignModel = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId, ref: 'users',
        required: true,
    },
    campaignName: {
        type: String, 
        required: true
    },
    video: {
        type: String,         
    }
})

module.exports = mongoose.model('campaign', CampaignModel);