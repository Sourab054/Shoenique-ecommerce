import React, { useContext, useState } from "react";
import { DataContext } from "../DataContext";
import { Link } from "react-router-dom";
import { FaBars, FaOpencart } from "react-icons/fa";

const Navbar = () => {
  const value = useContext(DataContext);
  const [links, setLinks] = useState(false);
  const [cart] = value.cart;
  return (
    <nav className="fixed inset-x-0 p-1 shadow-md h-14 top-0 z-10 bg-primary sm:px-4 md:pb-16 ">
      <div className="flex justify-between px-4 py-1 items-center lg:max-w-7xl lg:mx-auto">
        <div>
          <Link to="/">
            <h1 className="font-logo text-4xl">Shoenique</h1>
          </Link>
        </div>
        <div className="flex justify-between">
          <Link to="/cart">
            <FaOpencart size="22" className="mr-4 md:hidden" />
          </Link>
          <FaBars
            className="md:hidden"
            size="20"
            onClick={() => setLinks(!links)}
          />
          <ul className="hidden md:pt-2 md:flex">
            <li className="text-secondary p-2 rounded-sm space-x-1 transition-all duration-300 hover:text-tertiary">
              <Link to="/">Home</Link>
            </li>
            <li className="text-secondary p-2 rounded-sm space-x-1 transition-all duration-300 hover:text-tertiary">
              <Link to="/products">Shop</Link>
            </li>
            <li className="text-secondary p-2 rounded-sm space-x-1 transition-all duration-300 hover:text-tertiary">
              <Link to="#about">About</Link>
            </li>
            <li className="text-secondary p-2 rounded-sm space-x-1 transition-all duration-300 hover:text-tertiary">
              <Link to="#">Contact</Link>
            </li>
            <li className="text-secondary p-3 rounded-sm space-x-1 transition-all duration-300 hover:text-tertiary">
              <Link to="/cart" className="flex relative">
                <FaOpencart size="22" className="mr-1 " />
                <div>
                  {" "}
                  <span className="bg-secondary text-white text-xs px-1 rounded-full absolute bottom-2 right-0">
                    {cart.length}
                  </span>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {links && (
        <div className="md:hidden">
          <ul className="pt-2">
            <li className="bg-tertiary text-center text-primary p-2 rounded-sm border-b border-primary ">
              <Link to="/">Home</Link>
            </li>
            <li className="bg-tertiary text-center text-primary p-2 rounded-sm  border-b border-primary">
              <Link to="/products">Shop</Link>
            </li>
            <li className="bg-tertiary text-center text-primary p-2 rounded-sm  border-b border-primary">
              <Link to="/about">About</Link>
            </li>
            <li className="bg-tertiary text-center text-primary p-2 rounded-sm border-b border-primary">
              <Link to="#">Contact</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
