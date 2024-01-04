const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
    comment : {
        type : String,
        trim : true
    }
})

module.exports = mongoose.model("Comment", CommentSchema);

