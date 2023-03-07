import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import CartContextProvider from './components/CartContextProvider';

ReactDOM.render(
    
    
   <CartContextProvider>
        <App />
    </CartContextProvider>,
    
 
    document.getElementById('root')

);