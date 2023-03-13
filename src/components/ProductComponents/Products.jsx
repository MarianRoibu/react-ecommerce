import styled from "styled-components";
import { popularProducts } from "../../data";
import Product from "../../pages/productsPages/Product";
import { Link, NavLink } from "react-router-dom";


const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    
`;

const Products = () => {
  return (
    <NavLink to="/allProducts">Popular Products
    <Link to="/Producto">
    <Container>
      {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
    </Link></NavLink>
  );
};

export default Products;
