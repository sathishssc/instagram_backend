
let mogoose = require("mongoose");


let data = mogoose.Schema({
    name:{type:String},
    location:{type:String},
    description:{type:String},
    image:{type:String},
    date:{type:Date},
    likes: {
        type: Number,
        default: 0,
      },
      
})

let instaClone = mogoose.model("instaClone",data)

module.exports = instaClone;