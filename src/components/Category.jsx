import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 100rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin: 0 auto;
`;

const Product = styled.div`
  width: calc(33.33% - 20px);
  height: 20rem;
  margin-bottom: 5rem;
  margin-top: 5rem;
 
  border-radius: 4px;
  overflow: hidden;
  position: relative;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
    transform: translateY(-5px);
    .overlay {
      opacity: 1;
      transform: translateY(0px);
    }
    .image {
      transform: scale(1.1);
    }
    .name {
      color: #007aff;
    }
  }
`;

const ImageContainer = styled.div`
  overflow: hidden;
  position: relative;
  
`;

const Image = styled.img`
  width: 100%;
  height: 20rem;
  object-fit: cover;
  transition: all 0.2s ease-in-out;
`;

const Overlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(255, 255, 255, 0.9);
  padding: 10px;
  transform: translateY(50px);
  opacity: 0;
  transition: all 0.2s ease-in-out;
`;

const Name = styled.h2`
  font-size: 1.2rem;
  margin: 10px 0;
  color: #333;
  transition: all 0.2s ease-in-out;
`;

const Description = styled.p`
  margin: 0 10px 10px;
`;

const StyledLink = styled(Link)`
  display: block;
  margin: 10px;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  padding: 10px;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: #0069d9;
  }
`;

const Category = ({ data }) => {
  return (
    <Container>
      {data.products.map((product) => (
        <Product key={product.id}>
          <ImageContainer className="image">
            <Image src={product.img} alt={product.name} />
          </ImageContainer>
          <Overlay className="overlay">
            <Name className="name">{product.name}</Name>
            <Description>{product.description}</Description>
            <StyledLink to={`/products/${product.id}`}>View Product</StyledLink>
          </Overlay>
        </Product>
      ))}
    </Container>
  );
};

export default Category;