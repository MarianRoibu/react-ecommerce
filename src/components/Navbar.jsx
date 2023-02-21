import { Badge } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const CartIconLink = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
`;

const Navbar = () => {
  const [toggle, setToggle] = React.useState(false);





  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>ES</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>LOGO.</Logo>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <CartIconLink onClick={() => setToggle(!toggle)}>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </CartIconLink>
        </Right>
      </Wrapper>
      <DropdownMenu toggle={toggle}>
        <DropdownItem>Option 1</DropdownItem>
        <DropdownItem>Option 2</DropdownItem>
        <DropdownItem>Option 3</DropdownItem>
        <DropdownItem>Option 4</DropdownItem>
      </DropdownMenu>
    </Container>
    );
    };
    
    export default Navbar;
    
    const DropdownMenu = styled.div`
     position: absolute; 
     left: 90%;
     top: 90px; 
     width: 200px; 
     z-index: 1; 
     display: ${(props) => (props.toggle ? "block" : "none")}; 
     background-color: gray; 
     border-radius: 5px; 
     overflow: hidden; 
     ${mobile({ top: "50px", width: "150px" })};`
    
    const DropdownItem = styled.div` 
    ursor: pointer; 
    padding: 10px; 
    &:hover { background-color: #f2f2f2; };`
