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

const App = () => {
  const [cart, setCart] = useState({});

  useEffect(() => {
    const cart = window.localStorage.getItem("cart");
    setCart(JSON.parse(cart));
  }, []);

  useEffect(() => {
    window.localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <>
      <Router>
        <DataProvider>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/products" component={ProductsPage} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/about" component={About} />
          </Switch>
          {/* <Footer /> */}
        </DataProvider>
      </Router>
    </>
  );
};

export default App;
