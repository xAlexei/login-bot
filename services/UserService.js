const UserModel = require("../models/UserModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

async function create (req, res){
    try{
    
    let userExists = await UserModel.findOne({username: req.body.username});
    if(userExists) return { message: "User already exists! Choose another username" };
    
    let { name, surname, username, password } = req.body;
    const user = new UserModel({
        name,
        surname, 
        username,
        password: bcrypt.hashSync(password, 10)
    })
    await user.save();
    if (user) {
        return { message: "Created successfully", error: false };
      }
    }catch(error){
        return {
            message: "Internal server error!",
            error: true,
            error: error.message
        }
    }
}

async function retrieve (req, res){
    try{
        await UserModel.find({})
        .then((result) => {
            res.json({
                message: "All users: ",
                result: result                
            })
        })        
    }catch(error){
        return {
            message: "Internal server error!",
            error: error.message
        }
    }
}

async function login (req, res){
    try{

        let userExists = await UserModel.findOne({ username: req.body.username }).select({
            username: 1, password: 1
        })
        if(!userExists) return { message: "User not found! Try again" };

        let validPass = await bcrypt.compareSync(
            req.body.password,
            userExists.password
        );
        if(!validPass) return { message: "Invalid password! Try again"};

        const token = jwt.sign({ user: userExists }, process.env.TOKEN_SECRET, {
            expiresIn: process.env.EXPIRE_SECRET,
          });
        return {            
            message: "Welcome",
            user: userExists.username,            
            token,
            expiresIn: process.env.EXPIRE_SECRET,
        };
    }catch(error){
        return {
            message: "Internal server error!",
            error: error.message
        }
    }
}

module.exports = {
    create,
    retrieve,
    login
}