import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./routes/Home";
import ProductsPage from "./routes/ProductsPage";
import { DataContext } from "./DataContext";
import Cart from "./routes/Cart";
import About from "./routes/About";
import SingleProduct from "./routes/SingleProduct";
import Login from "./routes/Login";
import Register from "./routes/Register";
import PrivateRoute from "./routes/PrivateRoute";
import { useContext } from "react";

const App = () => {
  const value = useContext(DataContext);
  const loading = value.userLoading;

  var Spinner = require("react-spinkit");
  return (
    <>
      {loading && (
        <div className="grid place-items-center min-h-screen w-full">
          <Spinner name="line-spin-fade-loader" color="black" />
        </div>
      )}
      <Router>
        <Navbar />
        <Switch>
          <PrivateRoute exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <PrivateRoute exact path="/products" component={ProductsPage} />
          <PrivateRoute exact path="/products/:id" component={SingleProduct} />
          <PrivateRoute exact path="/cart" component={Cart} />
          <PrivateRoute exact path="/about" component={About} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default App;
