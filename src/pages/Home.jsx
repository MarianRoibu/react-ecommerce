import React from "react";
import Categories from "../components/ProductComponents/Categories";
import Newsletter from "../components/ReusableStaticRenders/Newsletter";
import Products from "../components/ProductComponents/Products";
import Slider from "../components/ReusableStaticRenders/Slider";

const Home = () => {

  return (
    <div>
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
      
    </div>
  );
};

export default Home;

