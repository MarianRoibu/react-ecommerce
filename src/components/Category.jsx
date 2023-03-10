import React from "react";


const Category = ({ data }) => {
    return (
      <div>
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


  export default Category;