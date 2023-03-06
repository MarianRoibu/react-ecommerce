import React from 'react';

const ProductDetails = ({ product }) => {
  const { id, img } = product;

  const handleAddToCart = () => {
    // TODO: Implement the logic to add the product to the cart
  };

  return (
    <div>
      <h2>Product #{id}</h2>
      <img src={img} alt={`Product ${id}`} />
      <p>Description of the product goes here.</p>
      <button onClick={handleAddToCart}>Add to cart</button>
    </div>
  );
};

export default ProductDetails;
