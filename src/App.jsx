import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./app.css";
import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/topbar/sidebar/Sidebar";
import Home from "./pages/home/Home";
import NewUser from "./pages/home/newPage/NewUser";
import User from "./pages/home/user/User";
import UserList from "./pages/home/userList/UserList";
import NewProduct from "./pages/newProduct/NewProduct";
import Product from "./pages/product/Product";
function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/users">
            <UserList />
          </Route>
          <Route path="/user/:userId">
            <User />
          </Route>
          <Route path="/newUser">
            <NewUser />
          </Route>
          <Route path="/products">
            <ProductListList />
          </Route>
          <Route path="/product/:productId">
            <Product />
          </Route>
          <Route path="/newproduct">
            <NewProduct />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
