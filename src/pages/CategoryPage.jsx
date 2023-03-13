import {React, useState} from "react";
import ProductList from "./productsPages/ProductList";
import AddProductForm from "./productsPages/AddProductForm";





const CategoryPage = ({ category }) => {
    const [products, setProducts] = useState(category.products);
  
    const handleAddProduct = (newProduct) => {
      setProducts([...products, newProduct]);
    };
  
    const handleRemoveProduct = (productId) => {
      setProducts(products.filter((product) => product.id !== productId));
    };
  
    return (
      <div>
        <h1>{category.name}</h1>
        <AddProductForm categoryId={category.id} onAddProduct={handleAddProduct} />
        <ProductList
          categoryId={category.id}
          products={products}
          onRemoveProduct={handleRemoveProduct}
        />
      </div>
    );
  };
  
  export default CategoryPage;