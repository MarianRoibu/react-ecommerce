import React from 'react';
import Wishlist from './pages/Wishlist';
import items from './data.json';
import { BrowserRouter as Routes, Route, NavLink } from 'react-router-dom';

function App() {
  return (
    <Wishlist />
  )
 
}

export default App;

