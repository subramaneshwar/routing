import React, { useEffect, useState } from 'react'
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Auth } from './Contex';

function ProductDet() {
  const {add, setadd} = useContext(Auth)
    console.log(add,"prod")
    const { id } = useParams(); // { id:5}
    const [obj, setobj] = useState({
      // id: 0,
      // title: "",
      // description: "",
      // image: "",
      // price: 0,
      // category: "",
    });
    useEffect(() => {
      fetch(`https://fakestoreapi.com/products/${id}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setobj(data);
        });
    }, []);
    return (
      <div style={{ width:"60%", marginTop: "100px",display:"flex",alignItems:"center",justifyContent:"center",gap:"20px",boxShadow:" rgba(0, 0, 0, 0.35) 0px 5px 15px",margin:"50px auto" }}>
        <div>

        <img src={obj.image} width={300} height={300} />
        </div>
        <div style={{ display:"flex",flexDirection:"column",gap:"20px"}}>
        <h2>{obj.category}</h2>
        <p style={{color:"Blue"}} >Category: {obj.category}</p>
        <b style={{color:"green"}} >price:${obj.price}</b>
        <button style={{color:"Blue",width:"80px",height:"30px",margin:" 20px 0"}} onClick={()=>{
          const newobj= obj
          setadd([...add,newobj])
          }}>ADD CART</button>
        </div>
       </div>
  )
}

export default ProductDet