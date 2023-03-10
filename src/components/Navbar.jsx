import { Badge } from "@material-ui/core";
import { BrowserRouter, Routes, Route, Link, NavLink, useNavigate } from "react-router-dom";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React, { useState, useContext } from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import CartUser from '../pages/CartUser';
import { AuthContext } from "./LoginLogic";
import LoginButton from "./LoginButton";
import { useSelector, useDispatch } from 'react-redux';



const Container = styled.div`
  background-color: #393e46;
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

const Button = styled.button`

`





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
        <MenuItem><NavLink to="/allProducts">Products</NavLink></MenuItem>
        <MenuItem>
          <NavLink to="/Home">Home</NavLink>
        </MenuItem>
        {currentUser ? (
          <MenuItem>
            <button onClick={handleLogout}>Logout</button>
          </MenuItem>
        ) : (
          <MenuItem>
            <NavLink to="/login">Login</NavLink>
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