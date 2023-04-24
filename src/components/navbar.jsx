import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import styled from 'styled-components';
import { RedButton } from '../style/WhisesStyle';

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  width: 100rem;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Navbar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <header>
    <StyledNav>
      <Link to="/">Home</Link>
      <ul>
        {!isAuthenticated && <li><button onClick={() => loginWithRedirect()}>Log In</button></li>}
        {isAuthenticated && <li><RedButton onClick={() => logout()}>Log Out</RedButton></li>}
      </ul>
    </StyledNav>
  </header>
  );
};

export default Navbar;