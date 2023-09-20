const UserController = require("../controllers/UserController");
const router = require("express").Router();


router.post("/create", async (req, res) =>{
    UserController.createUser(req, res)
});

router.post("/login", async (req, res) =>{
    UserController.login(req, res)
});

router.get("/retrieve", async (req, res) =>{
    UserController.retrieveUsers(req, res)
});

module.exports = router;
