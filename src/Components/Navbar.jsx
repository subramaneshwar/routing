import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    
        <div className="nav" style={{background:'black', display:'flex',alignContent:'center',flexDirection:'column',padding:"20px"}}>

            <div className="title" style={{height:"10vh",textAlign:"center",color:'cornflowerblue'}}>
                <h1>React Routing</h1>
            </div>
            <div className="menu" style={{display:'flex',alignContent:"center",justifyContent:"space-around"}}>
                <Link to="/"    style={{textDecoration:'none',fontSize:"1.3rem",fontWeight:"bold",color:"mediumaquamarine"}} >Home</Link>
                <Link to="/contact"   style={{textDecoration:'none',fontSize:"1.3rem",fontWeight:"bold",color:"mediumaquamarine"}} >Contact</Link>
                {/* <Link to="/profile"   style={{textDecoration:'none',fontSize:"1.3rem",fontWeight:"bold",color:"mediumaquamarine"}} >Profile</Link> */}
                {/* <Link to="technology"   style={{textDecoration:'none',fontSize:"1.3rem",fontWeight:"bold",color:"mediumaquamarine"}} >Technologies</Link> */}
                <Link to="/products"  style={{textDecoration:'none',fontSize:"1.3rem",fontWeight:"bold",color:"mediumaquamarine"}} >Products</Link>
                <Link to="/add"  style={{textDecoration:'none',fontSize:"1.3rem",fontWeight:"bold",color:"mediumaquamarine"}} >Cart</Link>
            </div>
        </div>
  )
}

export default Navbar