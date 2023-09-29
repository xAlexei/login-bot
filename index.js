const express = require("express");
const db = require("./db");
const bodyParser = require('body-parser')
const morgan = require('morgan');
const cors = require("cors");
const mongoose = require('mongoose');
const verifyToken = require("./middlewares/validate-token");
const auth = require("./middlewares/auth");

mongoose.set('strictQuery', true);
const app = express();
const port = process.env.PORT;

const whiteList = ["*", "http://localhost:3001"];
db.connect();
app.use(morgan('dev'));
app.use(cors({
  origin: whiteList
}));
app.use(bodyParser.json({
  limit: '50mb'
}))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const CampaignRoutes = require("./routes/CampaignRoute");
const UserRoutes = require("./routes/UserRoute");
const VideoRoutes = require("./routes/VideoRoutes");

app.use("/videos", VideoRoutes);
app.use("/campaigns", CampaignRoutes);
app.use("/users", UserRoutes);



app.listen(port, () =>{
    console.log(`Server Runnig on ${process.env.HOSTNAME}:${port}`);
})