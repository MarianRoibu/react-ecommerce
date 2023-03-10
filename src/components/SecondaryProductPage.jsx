import styled from "styled-components";
import db from "../db.json";
import Product from "./Product";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
  // import App from '../App'
  import Producto from "../pages/Product";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    
`;

const Products = () => {
  const existingProducts = JSON.parse(localStorage.getItem('products')) || { SecondaryProducts: [] };
  const allProducts = [...existingProducts.SecondaryProducts, ...db.SecondaryProducts];

  return (
    <Link to="/Producto">
      <Container>
        {allProducts.map((item) => (
          <Product item={item} key={item.id} />
        ))}
      </Container>
    </Link>
  );
};

export default Products;