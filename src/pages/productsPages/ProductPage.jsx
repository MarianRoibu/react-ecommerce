import { useState } from "react";
import { useParams } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { popularProducts as products } from "../../data";
import { useContext } from 'react';
import { CartContext } from "../../components/CartContextProvider";
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

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
  animation: ${fadeIn} 1s;
`;

const ImageList = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const Image = styled.img`
  width: 20rem;
  height: 10rem;
  object-fit: contain;
  margin-right: 10px;
  border-radius: 5px;
  cursor: pointer;
  border: ${({ active }) => (active ? "2px solid #f09020" : "none")};
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.1);
  }
`;

const MainImage = styled.img`
  height: 70%;
  width: 60%;
  object-fit: contain;
  margin-left: 20rem;
  margin-right: 10rem;
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.1);
  }
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



const Price = styled.span`
  font-weight: 200;
  font-size: 40px;
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

const Size = styled.span`
  margin-right: 10px;
  cursor: pointer;
`;

const AddContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
`;

const Button = styled.button`
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #f09020;
  color: #fff;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #e08010;
  }
`;

const Amount = styled.span`
  font-size: 20px;
  font-weight: 200;
  margin: 0 10px;
`;


const ProductPage = () => {
  const { addToCart } = useContext(CartContext);

  const [amount, setAmount] = useState(1);

  const handleAddToCart = () => {
    toast.success(`product has been added to your cart.`, {
      position: toast.POSITION.TOP_LEFT,
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });

    addToCart(product, amount);
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    for (let i = 0; i < amount; i++) {
      cartItems.push(product);
    }
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  };

  const handleRemove = () => {
    if (amount > 1) {
      setAmount(amount - 1);
    }
  };

  const handleAdd = () => {
    setAmount(amount + 1);
  };

  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const [currentImage, setCurrentImage] = useState(product.img);

  const handleImageClick = (image) => {
    setCurrentImage(image);
  };

  return (
    <>
    <ToastContainer />
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
              <Button onClick={handleRemove}>-</Button>
              <Amount>{amount}</Amount>
              <Button onClick={handleAdd}>+</Button>
            </AmountContainer>
            <Button onClick={handleAddToCart}>Add to Cart</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
    </Container>
    </>
  );
};

export default ProductPage;