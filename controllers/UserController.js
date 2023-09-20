const UserService = require("../services/UserService");

async function createUser (req, res) {
    try{
        const User = await UserService.create(req, res);
        res.status(200).json(User);
    }catch(error){
        res.status(400).json({ message: error.message });
    }
}

async function retrieveUsers (req, res){
    try{
        const User = await UserService.retrieve(req, res);
        res.status(200).json(User);
    }catch(error){
        res.status(400).json({ message: error.message })
    }
}

async function login (req, res){
    try{
        const User = await UserService.login(req, res);
        res.status(200).json(User);
    }catch(error){
        res.status(400).json({ message: error.message });
    }
}

module.exports = {
    createUser,
    retrieveUsers,
    login
}