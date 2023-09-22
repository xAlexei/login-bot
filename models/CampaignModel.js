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
    files: [{
        type: String, 
    }],
    video: {
        type: String,
        default: 'Nothing here'         
    }
})

module.exports = mongoose.model('campaign', CampaignModel);