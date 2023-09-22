const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const VideoSchema = new Schema({    
    bookmarks: [{
        description: {
            type: String,
        },
        initialTime: {
            type: String,
            required: true
        },
        endTime: {
            type: String, 
            required
        }
    }]
})

module.exports = mongoose.model('video', VideoSchema);