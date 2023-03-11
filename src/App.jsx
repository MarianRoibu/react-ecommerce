import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider } from "./components/LoginLogic";
import Navbar from "./components/Navbar";
import { useState  } from "react";
import store from "./components/store";
import AllProducts from "./pages/allProducts";
import CategoryItem from "./components/CategoryItem";
import SportsBikes from "./pages/SportsBikes";
import NakedBikes from "./components/NakedBikes";
import HyperNaked from './pages/HyperNaked';
import categoriesData from "./categories.json";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import ProductPage from './pages/ProductPage';
import Register from "./pages/Register";
import Login from "./pages/Login";
import CartUser from "./pages/Cart";
import Category from './components/Category';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import Checkout from './pages/Checkout';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => {
    setIsLoggedIn(false);
  };
  
  return (
    <Router>
     <Navbar isLoggedIn={isLoggedIn} handleLogout={handleLogout} /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<CartUser />} />
        <Route path="/Checkout" element={<Checkout />} />
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
