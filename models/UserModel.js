const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,        
    },
    surname: {
        type: String
    },
    username: {
        type: String,
        unique: true,
        required: true,        
    },
    password: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('users', UserSchema);