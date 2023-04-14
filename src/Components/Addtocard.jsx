import React from 'react'
import { useContext } from 'react'
import { Auth } from './Contex'

function Addtocard() {
    const {add, setadd} = useContext(Auth)
    console.log(add,"adds")
  return (
    <div style={{display:"flex",alignItems:"center",flexWrap:"wrap",gap:"10px",justifyContent:"center",padding:"20px "}}>
        {
            add.length <=0 ? <h1 style={{textAlign:"center",padding:"20px"}} >No items is added</h1>: add.map((obj,ind)=>{
                return(
                    <div className="card" style={{boxShadow:" rgba(0, 0, 0, 0.35) 0px 5px 15px",width:"300px",height:"300px",padding:"20px",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",gap:"10px"}}>
                        <img src={obj.image} alt="" height="100"/>
                        <b>{obj.title}</b>
                        <p>cat: {obj.category}</p>
                        <p>price:$ {obj.price}</p>
                        <button onClick={()=>{
                            setadd(add.filter((ele,inds)=>inds !== ind))
                        }}>remove</button>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Addtocard