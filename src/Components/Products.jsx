import React, { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

function Products() {
  const [Prod, setProd] = useState("")
  useEffect(()=>{
    fetch("https://fakestoreapi.com/products").then((res)=>res.json()).then((data)=>{
      setProd(data)
    })
  },[])
  return (
    <div>
          <div style={{ padding: "30px" }}>
      <h2 style={{ color: "red" }}>Products Component</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod incidunt, vero corporis magni et pariatur laboriosam quo dignissimos ducimus nulla reiciendis repellendus odio aspernatur facere ratione repudiandae! Expedita perferendis dolores laborum aliquid, illum ex repudiandae qui ratione, optio atque dolorum sapiente cupiditate vel, reprehenderit numquam consequuntur molestias ut pariatur ducimus. Eligendi aut fugiat, repudiandae repellat architecto laboriosam? Repellat ipsa labore dolor esse numquam aperiam sequi aliquid alias ipsum error. Ab saepe dolorem iusto cum atque neque laborum maxime facilis eligendi cumque nam reiciendis, ut fuga suscipit animi excepturi consequatur necessitatibus. Quidem dignissimos tenetur totam quaerat ad excepturi at, fugiat magni!
      </p>
      {Prod.length > 0 ? (
        <div style={{marginTop:"50px",display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gridGap:"15px"}}>
          {Prod.map((ele) => {
            return (
              <div style={{width: "300px",
                padding:"10px",
                textAlign: "center",
                boxShadow: "0 0 10px black}"}}>
                <img src={ele.image} width="200" height="200" />
                <h3>{ele.title}</h3>
                <p>$ {ele.price} </p>
                <Link to={`/productDetail/${ele.id}`}>
                  <button style={{ padding:".5rem",marginTop:'5px',fontWeight:"bold",color:"blanchedalmond",backgroundColor:"darkcyan",border:"none"}}>Product Details</button>
                </Link>
              </div>
            );
          })}
        </div>
      ) : (
        <h2 style={{ color: "red", textAlign: "center", marginTop: "100px" }}>
          No Product to Display
        </h2>
      )}
    </div>
    </div>
  )
}

export default Products