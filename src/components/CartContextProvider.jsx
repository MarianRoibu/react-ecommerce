import React, { useState, createContext } from 'react';
import categories from '../new-db.json';


export const CartContext = createContext();


const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  

  const addToCart = (product) => {

    const cartItem = {
      id: product.id,
      title: product.title,
      image: product.img,
      price: product.price,
      quantity: 1,
      
    };

  
    setCart([...cart, cartItem]);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  const clearCart = () => {
    setCart([]);
  };

  const increaseQuantity = (productId) => {
    const updatedCart = cart.map((item) =>
      item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
  };

  const decreaseQuantity = (productId) => {
    const updatedCart = cart.map((item) =>
      item.id === productId && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCart(updatedCart);
  };

  const getCategory = (productId) => {
    const category = categories.categories.find(cat =>
      cat.products.some(p => p.id === productId)
    );
    return category ? category.slug : null;
  };
  
  const getSameCategoryProducts = (productId) => {
    const category = getCategory(productId);
    const products = categories.categories
      .find(cat => cat.slug === category)
      .products.filter(p => p.id !== productId);
    return products;
  };
  
  const getSimilarPriceProducts = () => {
    const avgPrice = cart.reduce((sum, item) => sum + item.price, 0) / cart.length;
    const products = categories.categories
      .flatMap(cat => cat.products)
      .filter(p => Math.abs(p.price - avgPrice) < 10 && !cart.some(item => item.id === p.id));
    return products;
  };

  const getRecommendedProducts = () => {
    if (cart.length === 0) {
      return [];
    }
    const productId = cart[cart.length - 1].id;
    const sameCategoryProducts = getSameCategoryProducts(productId);
    const similarPriceProducts = getSimilarPriceProducts();
    return sameCategoryProducts.concat(similarPriceProducts);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        increaseQuantity,
        decreaseQuantity,
        getRecommendedProducts,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
