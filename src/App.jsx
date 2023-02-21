import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () =>{
    return(
    <>
        <Home/>
        <Cart/>
        <Login/>
        <Register/>
        <Product/>
        

    </>
    )
};


export default App;