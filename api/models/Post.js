const mongoose = require("mongoose")

const PostSchema = new mongoose.Schema(
    {
        title:{
            type:String, 
            required:true,
            unique:true
        },
        desc : {
            type:String,
            required:true
        },
        username : {
            type:String,
            requried:true
        },
        comments : [
            {
                type:mongoose.Schema.Types.ObjectId,
                ref: 'Comment'
            }
        ]
    }
);

module.exports = mongoose.model("Post", PostSchema);