import React, { useEffect } from 'react';
import Products from '../Products/Products';
import { useState } from 'react';

const Home = () => {
    const [products,setProducts] =useState([]);
    useEffect(()=>{
        fetch('http://localhost:5055/products')
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