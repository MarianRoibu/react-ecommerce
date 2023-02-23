import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import CartUser from "./pages/Cart";
import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Routes,Navigate } from 'react-router-dom'




const App = () => {
    return (
    
      
    
     <>
      <Router>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/products" element={<ProductList/>} />
            <Route path="/Product" element={<Product/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/Cart" element={<CartUser />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
      </Router>
      </>
    );
  }


export default App;