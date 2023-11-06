import React from 'react'
import  { useState } from 'react'
import { Link } from 'react-router-dom';
export default function Login() {
  const[values,setValues]=useState({
    username:"",
    email:"",
    password:""
  })
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(values.username)
    console.log(values.password)
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
