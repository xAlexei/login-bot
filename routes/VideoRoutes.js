const VideoController = require("../controllers/VideoController");
const router = require("express").Router();
const multer = require("multer");

const storage = multer.diskStorage({
    destination: function (req, res, cb) {
        cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
        console.log(file);
        cb(null, `${Date.now()}-${file.originalname}`)
    }
});

const upload = multer({ storage: storage })

router.post("/upload",     
  upload.single('videoPath'),
    async (req, res) =>{
        VideoController.uploadVideo(req, res);
    }
)

router.delete("/delete/:id", 
    async (req, res) =>{
        VideoController.deleteVideo(req, res);
    }
)

router.post("/details", 
    async (req, res) => {
      VideoController.detailVideo(req, res);
    }
)

router.get("/getvideos", 
    async (req, res) =>{
        VideoController.getVideos(req, res);
    }
)

module.exports = router;
