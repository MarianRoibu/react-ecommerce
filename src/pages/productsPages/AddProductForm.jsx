import React, { useState } from 'react';
import styled from 'styled-components';

const FormWrapper = styled.div`
  max-width: 500px;
  margin: 0 auto;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
`;

const Textarea = styled.textarea`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
`;

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
    <FormWrapper>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="name">Name:</Label>
          <Input type="text" id="name" value={productData.name} onChange={(e) => setProductData({ ...productData, name: e.target.value })} />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="price">Price:</Label>
          <Input type="number" id="price" value={productData.price} onChange={(e) => setProductData({ ...productData, price: e.target.value })} />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="description">Description:</Label>
          <Textarea id="description" value={productData.description} onChange={(e) => setProductData({ ...productData, description: e.target.value })} />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="img">Image URL:</Label>
          <Input type="text" id="img" value={productData.img} onChange={(e) => setProductData({ ...productData, img: e.target.value })} />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="link">Link URL:</Label>
          <Input type="text" id="link" value={productData.link} onChange={(e) => setProductData({ ...productData, link: e.target.value })} />
        </FormGroup>

        <Button type="submit">Add Product</Button>
      </form>
    </FormWrapper>
  );
};

export default AddProductForm;

