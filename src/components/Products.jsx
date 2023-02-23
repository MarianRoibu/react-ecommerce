import styled from "styled-components";
import { popularProducts } from "../data";
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
  return (
    <Link to="/Producto">
    <Container>
      {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
    </Link>
  );
};

export default Products;
