import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenSquare,
  faPlus,
  faThLarge,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const AddProducts = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const[imageURL,setImageURL] =useState(null);
  const onSubmit = (data) => {
    const products = {
      name: data.name,
      price: data.price,
      imageURL: imageURL
    }
    const url =`https://fierce-spire-37555.herokuapp.com/addProducts`;
    console.log(products);
    fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(products)
    })
    .then(res=>console.log('server side response'))
  };
  const handleImageUpload = event =>{
      console.log(event.target.files[0])
      const imageData = new FormData();
      imageData.set('key','5dab6e8f78b78ad5ff45b92b33ccd812');
      imageData.append('image', event.target.files[0]);
      axios.post('https://api.imgbb.com/1/upload',
      imageData )
      
      .then(function (response) {
        setImageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <div className="row">
      <div
        style={{ background: "#203d37" }}
        className="col-md-3 p-4 vh-100 text-center text-white"
      >
        <h3>FRESH VALLEY</h3>
        <br />
        <h5>
          <FontAwesomeIcon icon={faThLarge} /> Product
        </h5>
        <br />
        <h6>
          <FontAwesomeIcon icon={faPlus} /> Add Product
        </h6>
        <br />
        <h6>
          <FontAwesomeIcon icon={faPenSquare} /> Edit Product
        </h6>
      </div>
      <div className="col-md-9 vh-100 p-3">
        <h5 className="bg bg-white p-3 ">Add Product</h5>
        <div>
          <form
            className="bg bg-white p-3 shadow rounded w-80"
            onSubmit={handleSubmit(onSubmit)}
          >
            <label>Product Name</label>
            <br />
            <input placeholder="Product Name" {...register("name")} />
            <br />
            <label>Add Price</label>
            <br />
            <input placeholder="Add Price" {...register("price")} />

            <br />
            <label>Wight</label>
            <br />
            <input placeholder="Wight" {...register("wight")} />
            <br /><br />
            <input type="file" onChange={handleImageUpload}/>
            <br />
            <button style={{backgroundColor: '#74bc5c', width: '10%'}} className="btn text-white mt-3" type="submit">Save</button>
            
            

            
          </form>
         
         
        </div>
      </div>
    </div>
  );
};

export default AddProducts;
