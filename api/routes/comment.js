const router = require("express").Router();
const Post = require("../models/Post")
const Comment = require("../models/Comment")

router.post('/:postId',async(req,res)=>{
    try{
        const {postId} = req.params;
        console.log("comment inside");
        const post = await Post.findById(postId);
        const commentObj = new Comment({comment:req.body.toString()});
        
        console.log(post);

        if(!post){
            return res.status(404).json({ message: 'Post not found' });
        }
        post.comments.push(commentObj);
        await commentObj.save();
        await post.save();

        res.status(200).json(req.body.toString());
    }catch(err){
        res.status(500).json(err);
        console.log(err);
    }
})

module.exports = router
