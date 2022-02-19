const mongoose = require("mongoose");
const electionSchema = new mongoose.Schema({
    name:{
        type:String,
        require:[true,"Please Enter City name"],
    },
    state:{
        type:String,
        require:[true,"Please Enter City state"],
    },
    distict:{
        type:String,
        require:[true,"Please Enter City distict"],
    },
    population:{
        type:Number,
        require:[true,"Please Enter City population"],
    },
    polling_number:{
        type:Number,
        require:[true,"Please Enter City polling_number"],
    },
    placeType:{
        type:String,
        require:[true,"Please Enter City placeType"],
        enum:["Town","Metro City","City","Village"]
    }
})

module.exports = mongoose.model("election",electionSchema)