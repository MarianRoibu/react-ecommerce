import React, { useState } from 'react';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';
import { v4 as uuidv4 } from 'uuid';

const MyComponent = () => {
  const [wishText, setWishText] = useState('');
  const [wishList, setWishList] = useState([]);
  const { user, isAuthenticated } = useAuth0();

  const handleAddWish = () => {
    const { sub } = user;
    const newWish = {
      title: wishText,
      description: 'some description',
      price: 0,
      isHidden: false,
      userId: sub,
    };
    axios.post('http://localhost:4000/wishes', newWish)
      .then(res => {
        setWishList([...wishList, res.data]);
        setWishText('');
      })
      .catch(err => {
        console.log(err);
      });
  };
  const handleWishTextChange = (e) => {
    setWishText(e.target.value);
  };

  const renderWishList = () => {
    if (wishList.length === 0) {
      return <p>No wishes yet</p>;
    }
    return (
      <ul>
        {wishList.map(wish => (
          <li key={wish.id}>{wish.text}</li>
        ))}
      </ul>
    );
  };

  return (
    <div>
      {isAuthenticated ? (
        <div>
          <h1>Welcome, {user.name}!</h1>
          <p>Add your wish:</p>
          <input type="text" value={wishText} onChange={handleWishTextChange} />
          <button onClick={handleAddWish}>Add Wish</button>
          {renderWishList()}
        </div>
      ) : (
        <div>
          <h1>Please Log In</h1>
        </div>
      )}
    </div>
  );
};

export default MyComponent;

