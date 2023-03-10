import { useState, useContext } from 'react';
import { AuthContext } from "../components/LoginLogic";

const AddProductForm = () => {



  const [productData, setProductData] = useState({
    name: '',
    price: '',
    description: '',
    img: '',
    link: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      id: Date.now(),
      name: productData.name,
      price: productData.price,
      description: productData.description,
      img: productData.img,
      link: productData.link
    };
    const existingProducts = JSON.parse(localStorage.getItem('products')) || { SecondaryProducts: [] };
    existingProducts.SecondaryProducts.push(newProduct);
    localStorage.setItem('products', JSON.stringify(existingProducts));
    // optional: clear the form inputs after submission
    setProductData({
      name: '',
      price: '',
      description: '',
      img: '',
      link: ''
    });
  };

  return (

 
      <div>
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" value={productData.name} onChange={(e) => setProductData({ ...productData, name: e.target.value })} />
      
      <label htmlFor="price">Price:</label>
      <input type="number" id="price" value={productData.price} onChange={(e) => setProductData({ ...productData, price: e.target.value })} />
      
      <label htmlFor="description">Description:</label>
      <textarea id="description" value={productData.description} onChange={(e) => setProductData({ ...productData, description: e.target.value })} />
      
      <label htmlFor="img">Image URL:</label>
      <input type="text" id="img" value={productData.img} onChange={(e) => setProductData({ ...productData, img: e.target.value })} />
      
      <label htmlFor="link">Link URL:</label>
      <input type="text" id="link" value={productData.link} onChange={(e) => setProductData({ ...productData, link: e.target.value })} />
      
      <button type="submit">Add Product</button>
    </form>
    </div>

 
    
  );
};

export default AddProductForm;

