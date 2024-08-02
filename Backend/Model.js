const mongoose = require('mongoose')
const schema = new mongoose.Schema({
    title:{
        type:String
    },
    description:{
        type:String
    },
    thumbnailUrl:{
        type:String,
    },
    videoUrl:{
        type:String,
    }
},{
    timestamps:true
})
module.exports = mongoose.model('videodatas', schema)