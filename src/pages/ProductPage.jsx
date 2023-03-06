import React from 'react';
import { useParams } from 'react-router-dom';
import { popularProducts } from '../data';
import ProductDetails from '../components/ProductDetails';

const ProductPage = () => {
  const { id } = useParams();
  const product = popularProducts.find(p => p.id === parseInt(id));

  return (
    <div>
      {product ? <ProductDetails product={product} /> : <p>Product not found.</p>}
    </div>
  );
};

export default ProductPage;
