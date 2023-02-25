import React from 'react';
import items from './data.json';
import Wishlist from './pages/Wishlist';

function App() {
  return (
    <Wishlist items={items.items} />
  );
}

export default App;
