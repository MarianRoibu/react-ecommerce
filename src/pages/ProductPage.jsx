import { useState } from "react";
import {useHistory, useParams } from "react-router-dom";
import styled from "styled-components";
import { popularProducts as products } from "../data";
import { useContext } from 'react';
import { CartContext } from "../components/CartContextProvider"; 


const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Wrapper = styled.div`
  display: flex;
  width: 80%;
  padding: 20px;
`;

const ImageContainer = styled.div`
  flex: 1;
`;

const ImageList = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const Image = styled.img`
  width: 500px;
  height: 500px;
  object-fit: cover;
  margin-right: 10px;
  border-radius: 5px;
  cursor: pointer;
  border: ${({ active }) => (active ? "2px solid #f09020" : "none")};
`;

const MainImage = styled.img`
  height: 50%;
  width: 60%;
  object-fit: cover;
  margin-right: 100px;
`;

const InfoContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 50px;
`;

const Title = styled.h1`
  font-weight: 500;
`;

const Description = styled.p`
  margin: 20px 0;
`;

const Price = styled.span`
  font-weight: 200;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;
`;

const Filter = styled.div`
  margin: 0 10px;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0;
`;

const Remove = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 8px;
  border: 1px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-right: 10px;
`;

const Add = styled(Remove)`
  margin-right: 0;
`;



const AddContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid #f09020;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid #f09020;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    background-color: #f09020;
    color: white;
  }
`;

const ProductPage = () => {
    const { addToCart } = useContext(CartContext);

    const handleAddToCart = () => {
      addToCart(product);
      const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
      cartItems.push(product);
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
    };

    

    const { id } = useParams();
    const product = products.find((p) => p.id === parseInt(id));
    const [currentImage, setCurrentImage] = useState(product.img);
  
    const handleImageClick = (image) => {
      setCurrentImage(image);
    };
  
    return (
      <Container>
        <Wrapper>
          <ImageContainer>
            <MainImage src={currentImage} />
            <ImageList>
  {product.images.map((image) => (
    <Image
      key={image}
      src={image}
      alt={product.title}
      active={currentImage === image}
      onClick={() => handleImageClick(image)}
    />
  ))}
</ImageList>
          </ImageContainer>
          <InfoContainer>
            <Title>{product.title}</Title>
            <Desc>{product.description}</Desc>
            <Price>${product.price}</Price>
            <AddContainer>
              <AmountContainer>
                <Remove />
                <Amount>1</Amount>
                <Add />
              </AmountContainer>
              <Button onClick={handleAddToCart}>Add to Cart</Button>
            </AddContainer>
          </InfoContainer>
        </Wrapper>
      </Container>
    );
  };
  

export default ProductPage;
