import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from "./components/ReusableStaticRenders/Navbar";
import { useState  } from "react";
import AllProducts from "./pages/productsPages/allProducts";
import categoriesData from "./categories.json";
import Home from "./pages/Home";
import ProductList from "./pages/productsPages/ProductList";
import ProductPage from './pages/productsPages/ProductPage';
import Register from "./pages/Register";
import Login from "./pages/Login";
import CartUser from "./pages/CartPages/Cart";
import Category from './components/Category';
import Footer from './components/ReusableStaticRenders/Footer';
import Checkout from './pages/CartPages/Checkout';
import SliderPage from './pages/SliderPageTest';

const App = () => {

  return (
    <Router>
     <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<CartUser />} />
        <Route path="/Checkout" element={<Checkout />} />
        <Route path="/SliderPage" element={<SliderPage />} />
        <Route path="/allProducts" element={<AllProducts />} />
        {categoriesData.map((category) => (
          <Route key={category.id} path={category.link} element={<Category data={category} />} />
        ))}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
   <Footer />
    </Router>
  );
};

export default App;
