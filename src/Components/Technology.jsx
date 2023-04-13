import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Technology() {
  return (
    <div style={{display:"flex",border:'solid',height:"500px",width:'1000px',margin:"50px auto" }}>
      <div className="left" style={{width:"25%",background:"black",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-evenly"}} >
        <Link to="html"   style={{textDecoration:"none",fontSize:"1.4rem",fontWeight:"bold"  }} >HTML</Link>
        <Link to="css"   style={{textDecoration:"none",fontSize:"1.4rem",fontWeight:"bold"  }} >CSS</Link>
        <Link to="js"   style={{textDecoration:"none",fontSize:"1.4rem",fontWeight:"bold"  }} >JavaScript</Link>
        <Link to="react"  style={{textDecoration:"none",fontSize:"1.4rem",fontWeight:"bold"  }}  >React</Link>
      </div>
      <div className="right" style={{width:"75%"}}>
        <Outlet/>
      </div>
    </div>
  )
}

export default Technology