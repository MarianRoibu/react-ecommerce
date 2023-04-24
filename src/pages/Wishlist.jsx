import React, { useState, useEffect } from 'react';
import WishesList from './WishesList';
import AddWishForm from './AddWishForm2';

function Wishlist() {
  const [wishes, setWishes] = useState([]);
  const [showCompleted, setShowCompleted] = useState(false);

  const handleAddWish = (newWish) => {
    setWishes([...wishes, newWish]);
  };

  const handleCompleteWish = (wishId) => {
    const updatedWishes = wishes.map((wish) => {
      if (wish.id === wishId) {
        return { ...wish, completed: !wish.completed };
      }
      return wish;
    });
    setWishes(updatedWishes);
  };

  const handleShowCompleted = () => {
    setShowCompleted(!showCompleted);
  };

  const filteredWishes = showCompleted
    ? wishes.filter((wish) => wish.completed)
    : wishes.filter((wish) => !wish.completed);

  return (
    <div>
      <h1>Wishlist</h1>
      <AddWishForm onAddWish={handleAddWish} />
      <button onClick={handleShowCompleted}>
        {showCompleted ? "Hide completed wishes" : "Show completed wishes"}
      </button>
      <WishesList wishes={filteredWishes} onCompleteWish={handleCompleteWish} />
    </div>
  );
}


export default Wishlist;




