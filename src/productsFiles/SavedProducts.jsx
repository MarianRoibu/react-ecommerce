import React from "react";


const SavedProducts = () => {
  const savedProducts = JSON.parse(localStorage.getItem('products')) || [];

  return savedProducts.map((item) => <div item={item} key={item.id} />);
};

export default SavedProducts;