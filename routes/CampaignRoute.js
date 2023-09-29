const CampaignController = require("../controllers/CampaignController");
const router = require("express").Router();
const multer = require("multer");
const fs = require('fs');
const csv = require('csv-parser');


const storage = multer.diskStorage({
    destination: function (req, res, cb) {
        cb(null, 'files')
    },
    filename: function (req, file, cb) {
        console.log(file);
        cb(null, `${Date.now()}-${file.originalname}`)
    }
});

const upload = multer({ storage: storage});

router.post("/create", 
    upload.single("files"),  
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

router.get('/leer-csv', (req, res) => {
    const filePath = "./files/ejemplo.csv";
    try {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        const results = fileContent.split('\n').map(line => line.split(','));

        res.json({
            message: 'File read successfully',
            content: results
        })
    } catch (error) {
        res.status(400).json({
            message: "Error reading file: " + error.message
        })
    }
  });

module.exports = router;