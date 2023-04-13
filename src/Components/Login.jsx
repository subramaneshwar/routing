import React, { useContext, useState } from 'react'
import { Auth } from './Contex'

function Login() {
    const {setislogin,setusers}=useContext(Auth)
    const [user,setUser]=useState({
        userName:"",
        pass:""
    })
    console.log(user)
  return (
    <div style={{width:"500px",textAlign:"center",padding:'40px', margin:"250px auto",boxShadow: "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",background:"black",color:"wheat"}}>
        <h1 style={{color:'red'}}>Enter the Login Details</h1>
        <br />
        <div>
        UserName: &nbsp;
        <input type="text" placeholder='UserName' onChange={(e)=>{
            setUser({...user,userName:e.target.value})
        }} />
        </div>
        <br />
        <div>
        Password: &nbsp;&nbsp;&nbsp;
        <input type="password" placeholder='password' onChange={(e)=>{
            setUser({...user,pass:e.target.value})
        }}/>
        </div>
        <br />
        <button style={{padding:'.4rem 1.5rem',margin:'10px',background:'blue',color:'white',fontWeight:'600',border:'none'}} 
        onClick={()=>{
            console.log("hello")
            if((user.userName==="Reddy"&& user.pass==="12345") ||(user.userName==='admin'&& user.pass==="admin")){
                setislogin(true)
                setusers(user.userName)
                
            }else{
                alert("enter correct userName and password")
            }
        }} >Login</button>
    </div>
  )
}

export default Login