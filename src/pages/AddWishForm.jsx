import React, { useState } from 'react';
import axios from 'axios';


const AddWish = ({ onAdd }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
  
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
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>
        <br />
        <label>
          Description:
          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
        </label>
        <br />
        <label>
          Price:
          <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
        </label>
        <br />
        <button type="submit">Add Wish</button>
      </form>
    );
  };

export default AddWish;