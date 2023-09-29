const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const VideoSchema = new Schema({ 
    videoPath: {
        type: String
    },  
    description: {
        type: String,
    }, 
    bookmarks: [{        
        initialTime: {
            type: String,            
        },
        endTime: {
            type: String,             
        }
    }]
})

module.exports = mongoose.model('video', VideoSchema);