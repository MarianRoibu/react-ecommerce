import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import CartContextProvider from './components/CartContextProvider';
import store from './components/store';
import { Provider } from 'react-redux';

export const login = () => ({
    type: 'LOGIN',
  });
  

const Root = () => {

    return(
    <Provider store={store}>
   <CartContextProvider>
        <App />
    </CartContextProvider>,
    </Provider>
    );

};
    ReactDOM.render(<Root />, document.getElementById('root'));

