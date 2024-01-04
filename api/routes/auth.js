const router = require("express").Router();
const User = require("../models/User")
const bcrypt = require('bcrypt');

router.post('/login',async(req,res)=>{
    
    try{
        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(req.body.password,salt);
        const presentUser = await User.findOne({username:req.body.username})
        // console.log(presentUser)
        

        if(!presentUser){
            console.log("Not present adding...");
            const newUser = new User({
                username : req.body.username,
                password : hashedPass
            });
            const user = await newUser.save();
            res.status(200).json(user);
        }else{
            const validate = await bcrypt.compare(req.body.password,presentUser.password);
            
            !validate && res.status(400).json("Wrong Credentials!")

            res.status(200).json(presentUser);
        }
    }catch(err){
        res.status(500).json(err);
        console.log(err);
    }
})

module.exports = router