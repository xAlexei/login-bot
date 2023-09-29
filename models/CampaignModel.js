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
    description: {
        type: String,
        required: true
    },
    files: [{
        type: String, 
    }],
    videoPath: {
        type: mongoose.Schema.Types.ObjectId, ref: 'videos'
    }
})

module.exports = mongoose.model('campaign', CampaignModel);