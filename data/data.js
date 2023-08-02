let express = require("express");
let mongoose = require("mongoose");
let data = express.Router();
let instaClone = require("./model/model");
const multer = require('multer');;


data.get("/data",(req,res) =>{
  try{
    instaClone.find().then(dat =>{
        res.status(200).json({
            messege:"data fetched successfully",
            data:dat,
        })
    }).catch(err =>{
        res.status(300).json({
            messege:"data not found",
            err:err,
        })
    })
  }catch(err){
     res.status(500).json({
        messege:"something went wrong",
     })
  }
})

data.use('/uploads', express.static('./uploads'));
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads/');
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix);
  }
});
//git added image
const upload = multer({storage});
data.post("/createPost",upload.single('image'), (req,res) =>{
    let {name,location,description} = req.body;
    let insta = new instaClone({
        name:name,
        location:location,
        description:description,
        image: req.file.filename,
        date:new Date(),
    })
    insta.save().then(d =>{
        res.status(200).json({
            messege:"post creation successfully",
            data:d,

        })
    }).catch(err =>{
        res.status(300).json({
            messege:"data fetched failed",
            error:err,
        })
    })
})
module.exports = data;