import styled, { keyframes } from "styled-components";
import Navbar from "../components/Navbar";
import Products from "../components/SecondaryProductPage";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { mobile } from "../responsive";
import AddProductForm from "./AddProductForm";
import Product from "./Product";
import { AuthContext } from "../components/LoginLogic";
import { useContext } from "react";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: #e91e63;
  }
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option``;

const AllProducts = () => {




  return (
    <Container>
     
      <Title>Exhaust systems</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select>
            <Option disabled selected>
              Material
            </Option>
            <Option>Carbon Fiber</Option>
            <Option>Titanium</Option>
          </Select>
          <Select>
            <Option disabled selected>
                 Type
            </Option>
         
            <Option>Cars</Option>
            <Option>Sport Bikes</Option>
            <Option>Naked Bikes</Option>
            <Option>Adventure Bikes</Option>
            <Option>Full System</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select>
            <Option selected>Newest</Option>
            <Option>Price (asc)</Option>
            <Option>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      

      <AddProductForm />

      
            


      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default AllProducts;