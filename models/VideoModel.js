const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const VideoSchema = new Schema({
    videoLink: {
        type: String, 
        required: true
    },
    startMarker: {
        type: String,
        required: true,
    },
    endMarker: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('video', VideoSchema);