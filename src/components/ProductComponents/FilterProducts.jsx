import React from "react";
import { useLocation } from "react-router-dom";
import db from "../../db.json";
import styled from "styled-components";

const Container = styled.div`
  /* add styles here */
`;
const Product = styled.div`
  /* add styles here */
`;

const FilterProducts = (category) => {
  if (category === "all") {
    return db.SecondaryProducts;
  } else {
    return db.SecondaryProducts.filter((product) => product.category === category);
  }
};

const FilteredProducts = () => {
  const location = useLocation();
  const category = location.pathname.split("/").pop(); // get category from URL
  const filteredProducts = FilterProducts(category);

  return (
    <Container>
      {filteredProducts.map((product) => (
        <Product key={product.id}>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
        </Product>
      ))}
    </Container>
  );
};

export default FilteredProducts;