import React from 'react';
import Wishlist from './pages/Wishlist';
import items from './data.json';

function App() {
  return (
    <Wishlist items={items} />
  );
}

export default App;

