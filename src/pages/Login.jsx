import styled from "styled-components";
import {mobile} from "../responsive";
import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";




const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://d1sfhav1wboke3.cloudfront.net/ImageServer/Apim2media/Images/20551/82ad0457-f50f-46c9-aa6b-f1065019d5e3.png")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;



const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;



function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const history = useNavigate();
  const users = [
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' },
    { username: 'user3', password: 'password3' },
  ];
  
  // Save user data to local storage
  localStorage.setItem('users', JSON.stringify(users));

  const handleLogin = () => {
    const storedUsers = JSON.parse(localStorage.getItem('users'));

    const user = storedUsers.find(u => u.username === username && u.password === password);

    if (user) {
      localStorage.setItem('currentUser', JSON.stringify(user));
      history('/Home');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <Container>
    <Wrapper>
      <Title>Login</Title>
      <Form>
        <Input 
          type="text" 
          placeholder="Username" 
          value={username} 
          onChange={e => setUsername(e.target.value)} 
        />
        <Input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={e => setPassword(e.target.value)} 
        />
        <Button onClick={handleLogin}>Login</Button>
        {error && <div>{error}</div>}
      </Form>
      <Link>Forgot your password?</Link>
    </Wrapper>
  </Container>
  );
}

export default Login;