import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const AddWish = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [showProducts, setShowProducts] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:4000/wishes', { title, description, price })
      .then(res => {
        onAdd(res.data);
        setTitle('');
        setDescription('');
        setPrice('');
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Label>
          Title:
          <Input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </Label>
        <br />
        <Label>
          Description:
          <Input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
        </Label>
        <br />
        <Label>
          Price:
          <Input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
        </Label>
        <br />
        <Button type="submit">Add Wish</Button>
      </Form>

    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 10px;
`;

const Input = styled.input`
  padding: 5px;
  margin-left: 5px;
  border-radius: 5px;
  border: none;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #0077cc;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #0066b2;
  }
`;

export default AddWish;
