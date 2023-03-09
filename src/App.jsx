import React from "react";
import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import CartUser from "./pages/Cart";
import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import ProductPage from './pages/ProductPage';
import { AuthProvider } from "./components/LoginLogic";
import Navbar from "./components/Navbar";
import { useState  } from "react";
import store from "./components/store";
import AllProducts from "./pages/allProducts";


const App = () => {

  return (


      <Router>
  
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/products/:id" element={<ProductPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<CartUser />} />
          <Route path="/allProducts" element={<AllProducts />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>


  );
}

export default App;
