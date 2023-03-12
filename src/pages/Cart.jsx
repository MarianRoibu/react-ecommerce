import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { CartContext } from '../components/CartContextProvider'; 
import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 20px;
`;

const CartItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Image = styled.img`
  width: 15rem;
  height: 15rem;
  margin-right: 20px;
  object-fit: contain;
`;

const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const ItemTitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 5px;
`;

const ItemPrice = styled.p`
  font-size: 1rem;
`;

const QuantityButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  margin: 0 5px;
`;

const TotalPrice = styled.p`
  font-size: 1.5rem;
  margin-top: 20px;

`;

const CheckoutButton = styled.button`

  background-color: #ff9900;
  color: #fff;
  font-size: 1.5rem;
  padding: 10px 20px;
  margin-bottom: 50rem;
  border: none;
  border-radius: 5px;
 
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #fff;
    color: #ff9900;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }
`;

const ClearCartButton = styled.button`
  background-color: #dd0a35;
  color: #fff;
  font-size: 1.5rem;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #fff;
    color: #dd0a35;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }
`;

const RemoveButton = styled.button`
  background-color: #dd0a35;
  color: #fff;
  font-size: 1.5rem;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #fff;
    color: #dd0a35;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }
`
const Message = styled.p`
margin-bottom: 70rem;
`

const CheckoutContainer = styled.div`
  position: relative;
  bottom: -8rem;
  left: 70rem;
  width: 100%;

  


`;

const Cart = () => {
  const { cart, removeFromCart, clearCart, increaseQuantity, decreaseQuantity } = useContext(CartContext);

  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  }

  return (
    <>
    <ToastContainer />
    <Container>
      <Title>Cart</Title>
      {cart.length === 0 ? (
        <Message >Your cart is empty.</Message >
      ) : (
        <>
          {cart.map((item) => (
            <CartItem key={item.id}>
              <Image src={item.image} alt={item.title} />
              <ItemInfo>
                <ItemTitle>{item.title}</ItemTitle>
                <ItemPrice>${item.price}</ItemPrice>
              </ItemInfo>
              <QuantityButton onClick={() => decreaseQuantity(item.id)}>-</QuantityButton>
              <div>{item.quantity}</div>
              <QuantityButton onClick={() => increaseQuantity(item.id)}>+</QuantityButton>
              <RemoveButton onClick={() => removeFromCart(item.id)}>Remove</RemoveButton>
            </CartItem>
          ))}
          <CheckoutContainer>
          <TotalPrice>Total: ${calculateTotalPrice()}</TotalPrice>
          <div>
            <ClearCartButton onClick={clearCart}>Clear cart</ClearCartButton>
            <NavLink to="/Checkout">
              <CheckoutButton>Checkout</CheckoutButton>
            </NavLink>
          </div>
          </CheckoutContainer>
        </>
      )}
    </Container>
    </>
  );
};

export default Cart;
