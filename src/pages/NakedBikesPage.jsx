import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import NakedBikes from "../components/NakedBikes";





const NakedBikesPage = ({ data }) => {
  return (
    <div>
      <h1> Naked Bikes</h1>
      <Navbar />
      <NakedBikes data={data} />
      <Footer />
    </div>
  );
};



export default NakedBikesPage;
