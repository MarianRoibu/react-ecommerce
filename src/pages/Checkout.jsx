import React, { useContext } from 'react';
import { CartContext } from '../components/CartContextProvider'; 

const Checkout = () => {
  const { cart } = useContext(CartContext);
  const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);

  return (
    <div>
      <h1>Checkout</h1>
      <p>Total price: ${totalPrice}</p>
      <form>
        <label>
          Name:
          <input type="text" name="name" required />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" required />
        </label>
        <br />
        <label>
          Address:
          <input type="text" name="address" required />
        </label>
        <br />
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default Checkout;
