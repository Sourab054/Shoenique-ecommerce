// import "../src/styles/App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./routes/Home";
import ProductsPage from "./routes/ProductsPage";
import { DataProvider } from "./DataContext";
import { useState, useEffect } from "react";
import Cart from "./routes/Cart";
import About from "./routes/About";
import SingleProduct from "./routes/SingleProduct";
import Login from "./routes/Login";
import Register from "./routes/Register";
import PrivateRoute from "./routes/PrivateRoute";

const App = () => {
  return (
    <>
      <Router>
        <DataProvider>
          <Navbar />
          <Switch>
            <PrivateRoute exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <PrivateRoute exact path="/products" component={ProductsPage} />
            <PrivateRoute
              exact
              path="/products/:id"
              component={SingleProduct}
            />
            <PrivateRoute exact path="/cart" component={Cart} />
            <PrivateRoute exact path="/about" component={About} />
          </Switch>
          <Footer />
        </DataProvider>
      </Router>
    </>
  );
};

export default App;
