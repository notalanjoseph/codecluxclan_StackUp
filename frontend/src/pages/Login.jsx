import React from 'react'
import  { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';
import {useCookies} from 'react-cookie'
export default function Login() {
  const[values,setValues]=useState({
    username:"",
    password:""
  })
 const [_,setCookies]=useCookies(["access_token"])
  const navigate=useNavigate();
  const handleSubmit=async (e)=>{
    e.preventDefault();
    try{
      const res=await axios.post("/login ",{username:values.username,password:values.password})
      setCookies("access_token",res.data.access_token);
      window.localStorage.setItem("userID",res.data.userID)
      navigate('/');
    }
    catch(err){
      console.error(err);
    }
  }
  return (
    <div className='login'>
      <form onSubmit={handleSubmit}>
    <h1>LOGIN</h1>
      <label>Username</label>
      <input placeholder="username" type="text" value={values.username} onChange={e=>setValues({...values,username:e.target.value})}/>

      <br />
      
      <label>Password</label>
      <input placeholder="password" type="password" value={values.password} onChange={e=>setValues({...values,password:e.target.value})}/>
      <br />
      <button>Submit</button>
      <br />
      <span>dont have an account?</span>
      <Link to="/register">Register</Link>
    </form>
    </div>
  )
}
