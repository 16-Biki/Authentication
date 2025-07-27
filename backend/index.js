//npm init -y
//npm install express mongoose dotenv cors bcrypt
//npm install --save-dev nodemon

require("dotenv").config();
const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors");


const signupRoutes=require("./Routes/signup");
const loginRoutes=require("./Routes/login");

const app=express();
app.use(cors());
app.use(express.json());
app.use("/api",signupRoutes);
app.use("/api",loginRoutes);
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("mongodb connected");
    app.listen(process.env.PORT,()=>{
        console.log(`surver running on port ${process.env.PORT}`);
    });
})
.catch(err => console.error("DB error:", err));