import React, { useContext } from 'react';
import { CartContext } from '../components/CartContextProvider';
import styled from 'styled-components';

const CheckoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
`;

const CheckoutTitle = styled.h1`
  font-size: 3rem;
  margin: 2rem 0;
`;

const CheckoutForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin-bottom: 2rem;
  margin-left: 50rem;
`;

const CheckoutLabel = styled.label`
  font-size: 1.2rem;
  margin: 1rem 0;
`;

const CheckoutInput = styled.input`
  padding: 0.5rem;
  font-size: 1.2rem;
  border: none;
  border-bottom: 2px solid black;
  margin-bottom: 1rem;
  &:focus {
    outline: none;
  }
`;

const CheckoutButton = styled.button`
  padding: 1rem 2rem;
  background-color: black;
  color: white;
  margin-right: 50rem;
  margin-bottom: 50rem;
  font-size: 1.2rem;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: white;
    color: black;
    border: 2px solid black;
  }
`;

const Checkout = () => {
  const { cart } = useContext(CartContext);
  const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);

  return (
    <CheckoutWrapper>
      <CheckoutTitle>Checkout</CheckoutTitle>
      <p>Total price: ${totalPrice}</p>
      <CheckoutForm>
        <CheckoutLabel>
          Name:
          <CheckoutInput type="text" name="name" required />
        </CheckoutLabel>
        <CheckoutLabel>
          Email:
          <CheckoutInput type="email" name="email" required />
        </CheckoutLabel>
        <CheckoutLabel>
          Address:
          <CheckoutInput type="text" name="address" required />
        </CheckoutLabel>
        <CheckoutButton type="submit">Place Order</CheckoutButton>
      </CheckoutForm>
    </CheckoutWrapper>
  );
};

export default Checkout;
