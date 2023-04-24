import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddWish from './AddWishForm';
import { getWishes, addWish,deleteWish, updateWish } from '../functions/api';
import Navbar from '../components/navbar';
import { getAuthToken } from '../functions/auth';// import a function that retrieves the user's authentication token
import { v4 as uuidv4 } from 'uuid';
import { Container, RedButton, Title, Button, Label, Input, List, ListItem, ListItemTitle, ListItemDescription, ListItemPrice, ToggleButton } from '../style/WhisesStyle';


const WishesList = () => {
  const [wishes, setWishes] = useState([]);
  const [completedWishes, setCompletedWishes] = useState([]);
  const [filter, setFilter] = useState('');
  const [showCompleted, setShowCompleted] = useState(false);
  const [showHidden, setShowHidden] = useState(false);
  

  useEffect(() => {
    getWishes()
      .then(res => {
        setWishes(res.data.filter(wish => !wish.isDone && (!wish.isHidden || showHidden)));
        setCompletedWishes(res.data.filter(wish => wish.isDone && (!wish.isHidden || showHidden)));
      })
      .catch(err => {
        console.log(err);
      });
  }, [showHidden]);

  const handleAdd = wish => {
    // Generate a unique ID using a library such as uuid
    // const uniqueId = uuidv4();
  
    // Add the unique ID to the wish object
    // const wishWithId = { ...wish, id: uniqueId };
  
    // Send a POST request to the backend with the wish data and the unique ID
    axios.post('http://localhost:4000/wishes')
      .then(res => {
        // Update the local state with the new wish
        setWishes([...wishes, res.data]);
      })
      .catch(err => {
        console.log(err);
      });
  };
  const handleDelete = id => {
    deleteWish(id)
      .then(res => {
        setWishes(wishes.filter(wish => wish._id !== id));
        setCompletedWishes(completedWishes.filter(wish => wish._id !== id));
      })
      .catch(err => {
        console.log(err);
      });
  };

  const handleToggleHide = (wishId, isHidden) => {
    const newIsHidden = !isHidden;
    updateWish(wishId, { isHidden: newIsHidden })
      .then(res => {
        const updatedWish = res.data;
        if (updatedWish.isDone) {
          setWishes(wishes.filter(wish => wish._id !== wishId));
          setCompletedWishes([...completedWishes, updatedWish]);
        } else {
          setCompletedWishes(completedWishes.filter(wish => wish._id !== wishId));
          setWishes([...wishes.filter(wish => wish._id !== wishId), updatedWish]);
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  const filteredWishes = showCompleted
    ? [...completedWishes, ...wishes].filter(
        wish =>
          wish.title.toUpperCase().includes(filter.toUpperCase()) &&
          (!showHidden || wish.isHidden)
      )
    : wishes.filter(
        wish =>
          wish.title.toUpperCase().includes(filter.toUpperCase()) &&
          (!showHidden || wish.isHidden)
      );


  return (
   
    <Container>
      <Navbar />
    <Title>Wishes List</Title>
    <AddWish onAdd={handleAdd} />
    <List>
      <ListItem>
        <ToggleButton isHidden={!showHidden} onClick={() => setShowHidden(!showHidden)}>
          {showHidden ? 'Uncompleted Wishes' : ' Completed Wishes'}
        </ToggleButton>
      </ListItem>
      <ListItem>
        <Label>Filter by title</Label>
        <Input type="text" value={filter} onChange={e => setFilter(e.target.value)} />
      </ListItem>
      {filteredWishes.map(wish => (
        <ListItem key={wish._id} style={{ display: showHidden || !wish.isHidden ? "block" : "none" }}>
          <ListItemTitle>{wish.title}</ListItemTitle>
          <ListItemDescription>{wish.description}</ListItemDescription>
          <ListItemPrice>${wish.price}</ListItemPrice>
          <Button
            className="toggle-wish"
            onClick={() => handleToggleHide(wish._id, wish.isHidden)}
          >
            {wish.isHidden ? 'Finished' : 'Finish'}
          </Button>
          <RedButton onClick={() => handleDelete(wish._id)}>Delete</RedButton>
        </ListItem>
      ))}

    </List>
  </Container>
);
  
};

export default WishesList;
