import { Badge } from "@material-ui/core";
import {  Link, NavLink, useNavigate } from "react-router-dom";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../../responsive";



const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: black;
`;

const Container = styled.div`
  background-color: #ececec;
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
  opacity: 0;
  animation: fadeIn 1s forwards;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

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
  position: relative;

  &:after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0%;
    height: 2px;
    background-color: black;
    transition: all 0.3s ease-in-out;
  }

  &:hover:after {
    width: 100%;
  }

  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const CartIconLink = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
`;







function Navbar() {
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  const history = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    history('/Login');
  };

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
        <MenuItem><StyledNavLink to="/allProducts">Products</StyledNavLink></MenuItem>
        <MenuItem>
          <StyledNavLink to="/Home">Home</StyledNavLink>
        </MenuItem>
        {currentUser ? (
          <MenuItem>
            <button onClick={handleLogout}>Logout</button>
          </MenuItem>
        ) : (
          <MenuItem>
            <StyledNavLink to="/login">Login</StyledNavLink>
          </MenuItem>
        )}

          <Link to="/Cart">
            <CartIconLink >
              <Badge badgeContent={0} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </CartIconLink>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
}

export default Navbar;