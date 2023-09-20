const mongoose = require("mongoose");
const UserModel = require("../models/UserModel");
const db = require("../db");
const bcrypt = require("bcrypt");
require("dotenv").config({ path: "../.env" });

db.connect();

const hashpassword = process.env.SECRET_PASSWORD;

const user = [ 
    {
        name: "John Mark",
        surname: "Doe Vardy",
        username: "johnmark",
        password: bcrypt.hashSync(hashpassword, 10)
    }
]

const seed = async () =>{
    try{        
        await UserModel.deleteMany({});        
        await UserModel.create(user);

        console.log("Data created successfully!");
    }catch(error){
        console.error("Ups, can't create collections: ", error);
    } finally{
        console.log("Proccess finished!");
        mongoose.connection.close();
    }
}

seed();