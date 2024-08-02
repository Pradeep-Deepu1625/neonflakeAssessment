const mongoose = require('mongoose')
const schema = new mongoose.Schema({
    title:{
        type:String,
        required: true
    },
    description:{
        type:String,
        required: true
    },
    thumbnailUrl:{
        type:String,
        required:true
    },
    videoUrl:{
        type:String,
        required:true
    }
},{
    timestamps:true
})
module.exports = mongoose.model('videodatas', schema)