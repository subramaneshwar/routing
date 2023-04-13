import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function ProductDet() {
    const { id } = useParams(); // { id:5}
    const [obj, setobj] = useState({
      id: 0,
      title: "",
      description: "",
      image: "",
      price: 0,
      category: "",
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
      <div style={{ textAlign: "center", marginTop: "100px" }}>
        <h2>{obj.category}</h2>
        <img src={obj.image} width={300} height={300} />
       </div>
  )
}

export default ProductDet