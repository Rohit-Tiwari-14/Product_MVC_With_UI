const mongoose = require('mongoose');

const prSchema=mongoose.Schema({
    pname:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true,
        

    },
    category:{
        type:String,
        required:true,
        enum:["cloth","electronic","home","grocery"]
    }
},{timestamps:true}
)

const prModel= mongoose.model("pr",prSchema)
module.exports = prModel