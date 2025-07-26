const mongoose=require("mongoose");
const userSchema=new mongoose.Schema({
    name: String,
    email:{
        type:String,
        unique:true,
        required:true,
    },
    dob:{
        type:Date,
        default: Date.now
    },
    password:String,

});
module.exports=mongoose.model("User",userSchema);