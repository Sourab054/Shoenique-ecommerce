import React, { useContext } from "react";
import { DataContext } from "../DataContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const value = useContext(DataContext);
  const [cart] = value.cart;
  return (
    <nav className="container">
      <div className="nav">
        <div className="logo">
          <h1>Shoenique</h1>
        </div>
        <div className="nav-links">
          <ul className="nav-list">
            <li>
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/products" className="nav-link">
                Shop
              </Link>
            </li>
            <li>
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/cart" className="nav-link">
                <div className="nav-list-cart">
                  <i className="fas fa-shopping-cart"></i>{" "}
                  <span>{cart.length}</span>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
