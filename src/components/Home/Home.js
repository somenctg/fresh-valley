import React, {useState, useEffect } from 'react';
import Products from '../Products/Products';


const Home = () => {
    const [products,setProducts] =useState([]);
    console.log(products)
    useEffect(()=>{
        fetch('http://fierce-spire-37555.herokuapp.com/products')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },
    [])
    return (
       <div>
           <div className="row">
           {
               products?.map(product=><Products key={product.id} product={product}></Products>)
           }

           </div>
          
       </div>
    );
};

export default Home;