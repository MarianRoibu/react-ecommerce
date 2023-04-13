import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddWish from './AddWishForm';

const WishesList = () => {
  const [wishes, setWishes] = useState([]);

  // fetch wishes data from API
  useEffect(() => {
    axios.get('http://localhost:4000/wishes')
      .then(res => {
        setWishes(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  // delete a wish
  const handleDelete = id => {
    axios.delete(`http://localhost:4000/wishes/${id}`)
      .then(res => {
        setWishes(wishes.filter(wish => wish._id !== id));
      })
      .catch(err => {
        console.log(err);
      });
  };

  // add a wish
  const handleAdd = wish => {
    setWishes([...wishes, wish]);
  };

  return (
    <div>
      <h1>Wishes List</h1>
      <AddWish onAdd={handleAdd} />
      <ul>
        {wishes.map(wish => (
          <li key={wish._id}>
            <h3>{wish.title}</h3>
            <p>{wish.description}</p>
            <span>${wish.price}</span>
            <button onClick={() => handleDelete(wish._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WishesList;