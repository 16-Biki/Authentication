import React, { useState } from 'react'
import axios from 'axios';

function login({setPage,setUser}) {

    const [form,setForm]=useState({
        email:"",
        password:"",
    });
    const handleChange=(e)=>{
        setForm({...form,[e.target.name]:e.target.value});
    };
    const handleSubmit=async(e)=>{
        e.preventDefault();
        try {
            const res=await axios.post("http://localhost:5000/api/login",form);
            console.log(res.data);
            setUser(res.data.user)
            setPage("feed")
        } catch (error) {
           alert(error.response?.data?.message || "login failed");
        }


    }
  return (
   <div>
    <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <input 
        type="email"
        name='email'
        placeholder='enter email'
        required
        onChange={handleChange}
        value={form.email}
         />
         <input type="password"
         name='password'
         placeholder='enter password'
         required
         onChange={handleChange}
         value={form.password}
          />
          <button type="submit">login</button>
    </form>
    <p>
        don't have an account?{" "}
        
        <span>
            <button style={{ color: "blue", cursor: "pointer" }} onClick={()=>setPage("signup")}>
            Signup 
            </button>
        </span>
    </p>
   </div>
  )
}

export default login