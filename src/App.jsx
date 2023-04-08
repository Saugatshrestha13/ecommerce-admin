import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import "./App.css";
import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";
import NewUser from "./pages/home/newPage/NewUser";
import User from "./pages/home/user/User";
import UserList from "./pages/home/userList/UserList";
import NewProduct from "./pages/newProduct/NewProduct";
import Product from "./pages/product/Product";
import ProductList from "./pages/productList/ProductList";

const App = () => {
    return (
        <Router>
            <Topbar/>
            <div className="container">
                <Sidebar/>
                <Routes>
                    <Route exact path="/" element={<Home/>}></Route>
                    <Route path="/users" element={<UserList/>}></Route>
                    <Route path="/user/:userId" element={<User/>}></Route>
                    <Route path="/newUser" element={<NewUser/>}></Route>
                    <Route path="/products" element={<ProductList/>}></Route>
                    <Route path="/product/:productId" element={<Product/>}></Route>
                    <Route path="/newproduct" element={<NewProduct/>}></Route>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
