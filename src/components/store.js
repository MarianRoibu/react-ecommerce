import { createStore } from 'redux';

// Define the initial state of the store
const initialState = {
  isLoggedIn: false,
};

// Define the reducer function that will update the state based on actions
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        isLoggedIn: true,
      };
    case 'LOGOUT':
      return {
        ...state,
        isLoggedIn: false,
      };
    default:
      return state;
  }
};

// Create the Redux store
const store = createStore(reducer);

export default store;