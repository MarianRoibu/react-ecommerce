import React from "react";

const SportsBikes = ({ data }) => {
  return (
    <div>
      <h1>Sports Bikes</h1>
      {data.products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <img src={product.image} alt={product.name} />
        </div>
      ))}
    </div>
  );
};

export default SportsBikes;