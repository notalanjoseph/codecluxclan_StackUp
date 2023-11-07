import React, { useState } from 'react'
import './Register.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
export default function Register() {
  // const [username,setUsername]=useState(""
  const[values,setValues]=useState({
    username:"",
    password:""
  })
 
  
  const navigate=useNavigate();
  const handleSubmit=(e)=>{
    e.preventDefault();
    try{
     // axios.post('',{username:values.username,password:values.password})
      navigate("/login");
    }
    catch(err){
      console.log(err);
    }
    
  }
  return (
    <div className='register'>
      
    <form onSubmit={handleSubmit}>
    <h1>REGISTER</h1>
      <label>Username</label>
      <input placeholder="Username" value={values.username} onChange={e=>setValues({...values,username:e.target.value})}/>

      <br />
      <label>Password</label>
      <input placeholder="password" type="password" value={values.password} onChange={e=>setValues({...values,password:e.target.value})}/>
      <br />
      <button>Submit</button>
    </form>
    </div>
  )
}
