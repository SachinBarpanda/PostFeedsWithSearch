const router = require("express").Router();
const User = require("../models/User")


router.post('/',async(req,res)=>{
    
    try{
       
    }catch(err){
        res.status(500).json(err);
        console.log(err);
    }
})

module.exports = router