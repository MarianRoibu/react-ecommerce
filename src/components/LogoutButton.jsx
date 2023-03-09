import React from 'react';
import { useNavigate } from 'react-router-dom';

function LogoutButton() {
  const history = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn'); // Remove the isLoggedIn key from localStorage
    history.push('/login'); // Navigate to the login page
  };

  return <button onClick={handleLogout}>Logout</button>;
}

export default LogoutButton;