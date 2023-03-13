import styled from "styled-components";
import db from "../../db.json";
import Product from "../../pages/productsPages/Product";

  
  const ProductsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
  `;
  
  
  const SecondaryProducts = () => {
    const existingProducts = JSON.parse(localStorage.getItem("products")) || {
      SecondaryProducts: [],
    };
    const allProducts = [    ...existingProducts.SecondaryProducts,    ...db.SecondaryProducts,  ];
  
    return <ProductsContainer>{allProducts.map((item) => <Product item={item} key={item.id} />)}</ProductsContainer>;
  };
  
  export default SecondaryProducts;