import React, { useState } from 'react'
import './Register.css';
export default function Register() {
  // const [username,setUsername]=useState(""
  const[values,setValues]=useState({
    username:"",
    email:"",
    password:""
  })
 
  
  
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(values.username)
    console.log(values.email)
    console.log(values.password)
  }
  return (
    <div className='register'>
      
    <form onSubmit={handleSubmit}>
    <h1>REGISTER</h1>
      <label>Username</label>
      <input placeholder="Username" value={values.username} onChange={e=>setValues({...values,username:e.target.value})}/>

      <br />
      <label>E-mail</label>
      <input placeholder="Email" value={values.email} onChange={e=>setValues({...values,email:e.target.value})}/>
      <br />
      <label>Password</label>
      <input placeholder="password" type="password" value={values.password} onChange={e=>setValues({...values,password:e.target.value})}/>
      <br />
      <button>Submit</button>
    </form>
    </div>
  )
}
