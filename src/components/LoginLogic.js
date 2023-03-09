// import React, { createContext, useState, useContext, useEffect } from "react";
// import { useNavigate } from "react-router-dom";


// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//     const [user, setUser] = useState(null);
//     const { navigate } = useNavigate();
//     const users = [
//       { username: "user1", password: "password1" },
//       { username: "user2", password: "password2" },
//       { username: "user3", password: "password3" },
//     ];
  
//     const login = (username, password) => {
//       const validUser = users.find(
//         (user) => user.username === username && user.password === password
//       );
//       if (validUser) {
//         setUser({ username: validUser.username });
//         localStorage.setItem("user", JSON.stringify({ username: validUser.username }));
//         navigate("/");
//       } else {
//         alert("Invalid username or password");
//       }
//     };
    
  
//     const logout = () => {
//       setUser(null);
//       localStorage.removeItem("user");
//     };
  
//     return (
//       <AuthContext.Provider value={{ user, login, logout }}>
//         {children}
//       </AuthContext.Provider>
//     );
//   };