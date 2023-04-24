import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Spline from '@splinetool/react-spline';
import styled from 'styled-components';
import { useState } from 'react';

const Wraper = styled.div`
  color: white;
  position: relative;
  margin-top: 0rem;
  height: 100vh;
`
const Button = styled.button`
  margin: 10px;
  padding: 5px;
  width: 15rem;
  height: 5rem;
  position: absolute;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  opacity: 0;
  transform: rotate(2deg);
  top: 44%;
  left: 54rem;
  border-radius: 5px;
  border: none;
  outline: none;
  background-color: #eee;
`;

const Login = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  const navigate = useNavigate();

  const [showButtons, setShowButtons] = useState(false);
  const [showElement, setShowElement] = useState(false);


  const handleButtonClick = () => {
    setShowButtons(true);
  };


  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  return (
    <Wraper>
          <Spline onClick={handleButtonClick} scene="https://prod.spline.design/ewdxeq0XJ2XeeCje/scene.splinecode" />
        
      {showButtons && (
        <div>
          <Button onClick={() => loginWithRedirect()}>Log In</Button>
        </div>
      )}
  
      
      
    </Wraper>
  );
};

export default Login;