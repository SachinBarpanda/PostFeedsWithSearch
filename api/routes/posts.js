const router = require("express").Router();
const User = require("../models/User")
const Post = require("../models/Post")
const flatted = require('flatted'); 

router.post('/',async(req,res)=>{
    const newPost = new Post(req.body);

    try{
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
    }catch(err){
        res.status(500).json(err);
        // console.log(err);
    }
})
// ALL POSTS


router.get("/",async(req,res)=>{
    console.log("post inside");
    let posts = await Post.find();
    flatted.toJSON(posts);
    console.log(posts);
    // res.status(200).json(posts);
    res.status(200).json(posts);
    console.log("post outside");
})



module.exports = router