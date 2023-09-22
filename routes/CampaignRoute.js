const CampaignController = require("../controllers/CampaignController");
const router = require("express").Router();

router.post("/create", 
    async(req, res) =>{
        CampaignController.createCampaign(req, res);
    }
);

router.post("/getcampaigns",
    async(req, res) =>{
        CampaignController.getuserCampaigns(req, res);
    }
)

router.get("/getall", 
    async(req, res) =>{
        CampaignController.getAllcampaigns(req, res);
    }
)

router.put("/upload-video/:id", 
    async(req, res) => {
        CampaignController.uploadVideo(req, res);
    }
)

module.exports = router;