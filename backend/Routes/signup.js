const express=require("express");
const User=require("../models/userdata");

const router=express.Router();
router.post("/signup",async(req,res)=>{
    const{name,email,dob,password}=req.body;

    try {
        const existingUser=await User.findOne({email});
        if(existingUser) return res.status(400).json({message:"email already used"});
     
        
    const newUser=new User({
        name,
        email,
        dob,
        password,
    });
    await newUser.save();
    res.status(201).json({message:"user signup successfully done"})
    } catch (error) {
        res.status(500).json({message:"server error", error: error.message});

        
    }
});
module.exports=router;