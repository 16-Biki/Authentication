 import React, { useState } from 'react'
 import axios from "axios";
 function signup({setPage}) {
     const [form,setForm]=useState({
        name:"",
        email:"",
        dob:"",
        password:"",

     });
     const handleChange=(e)=>{
        setForm({...form,[e.target.name]:e.target.value});
     };
     const handleSubmit=async(e)=>{
        e.preventDefault();
        const datatosend={
            name:form.name,
            email:form.email,
            dob:form.dob,
            password:form.password,
        };
        try{
            await axios.post("http://localhost:5000/api/signup", datatosend);
            alert("signup successful, go to the log in page");
            setPage("login");

        }catch(err){
            alert(err.response?.data?.message||"signup failed");

        }
     }
   return (
    <div>
         <form onSubmit={handleSubmit}>
            <input 
            type="text"
            name='name'
            placeholder='enter name'
            required
            onChange={handleChange}
            value={form.name}  
            />
            <input 
            type="email"
            name='email'
            placeholder='enter name'
            required
            onChange={handleChange}
            value={form.email} />
            <input type="date"
            name='dob'
            placeholder='enter dob'
            required
            onChange={handleChange}
            value={form.dob} />
            <input 
            type="password"
            placeholder='enter pass'
            name='password'
            required
            onChange={handleChange}
            value={form.password}
            />
            <button type="submit">signup</button>
         </form>
         <p>
            already have an account ?{""}
            <span>
               <button style={{ color: "blue", cursor: "pointer" }} onClick={()=>setPage("login")}>
                  login
               </button>
            </span>
         </p>
    </div>
   )
 }
 
 export default signup
