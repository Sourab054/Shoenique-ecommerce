import React, { useContext, useState } from "react";
import { DataContext } from "../DataContext";
import { Link, useHistory } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaBars,
  FaHome,
  FaShoppingBag,
  FaInfoCircle,
  FaMailBulk,
  FaRegUser,
  FaSignOutAlt,
} from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { FiShoppingCart } from "react-icons/fi";

const Navbar = () => {
  const value = useContext(DataContext);
  const [cart] = value.cart;
  const currentUser = value.currentUser;
  const logout = value.logout;
  const [sidebar, showSidebar] = useState(false);
  const history = useHistory();

  const handleLogin = () => {
    if (currentUser) {
      logout();
      history.push("/login");
    } else {
      history.push("/login");
    }
  };
  return (
    <>
      <div className="px-8 fixed top-0 inset-x-0 bg-secondary text-primary z-10 flex justify-between items-center h-16 shadow-md xl:px-36">
        <div className="flex items-center">
          <FaBars size="22" onClick={() => showSidebar(!sidebar)} />
          <Link to="/">
            <h1 className="font-logo text-4xl ml-2">Shoenique</h1>
          </Link>
        </div>
        <div className="flex items-center">
          <button className="sm:flex sm:bg-gray-50 sm:justify-center sm:items-center sm:text-sm sm:font-semibold sm:font-head sm:text-black sm:tracking-wider sm:px-3 sm:py-1.5 sm:rounded-sm sm:shadow-sm transition-all duration-300 transform mr-4">
            <Link to="/cart">
              <div className="flex relative">
                <FiShoppingCart size="20" className="mr-1 " />
                <h1 className="hidden sm:block">Cart</h1>
                {cart.length > 0 && (
                  <div className="bg-accent text-primary rounded-full py-0.5 px-1.5 text-xs absolute bottom-2 -right-2 sm:bottom-4 sm:-right-5">
                    <span className="sm:font-semibold">{cart.length}</span>
                  </div>
                )}
              </div>
            </Link>
          </button>
          <button
            onClick={handleLogin}
            className="sm:bg-accent sm:text-sm sm:font-medium sm:font-head sm:text-primary sm:tracking-wider sm:px-3 sm:py-1.5 sm:rounded-sm sm:shadow-sm transition-all duration-300 transform "
          >
            {currentUser ? (
              <FaSignOutAlt size="20" className="sm:hidden" />
            ) : (
              <FaRegUser size="18" className="sm:hidden" />
            )}
            <h1 className="hidden sm:block">
              {!currentUser ? "Login" : "Logout"}
            </h1>
          </button>
        </div>
      </div>
      {sidebar && (
        <motion.nav
          animate={
            sidebar ? { x: 0, y: 0, opacity: 1 } : { x: "-100vw", opacity: 0 }
          }
          initial={{ x: "-100vw", opacity: 0 }}
          transition={{ duration: 0.3 }}
          className={` ${
            !sidebar
              ? "w-full sm:w-1/2 md:w-1/4 z-10 h-full bg-secondary text-primary flex justify-center fixed top-0 -left-full transition-all duration-500"
              : "w-full sm:w-1/2 md:w-1/4 z-10 h-full bg-secondary text-primary flex justify-center fixed top-0 left-0 transition-all duration-500"
          }`}
        >
          <ul
            onClick={() => showSidebar(false)}
            className="flex flex-col text-lg text-center items-center w-full "
          >
            <li className="ml-auto p-4 text-primary hover:text-accent">
              <Link onClick={() => showSidebar(false)}>
                <MdClose size="30" />
              </Link>
            </li>
            <li className="flex items-center justify-start pl-10 p-4 rounded-sm space-x-1 w-full border-b border-gray-200 transition-all duration-300 hover:text-accent">
              <FaHome />
              <Link to="/">Home</Link>
            </li>
            <li className="flex items-center pl-10 p-4 rounded-sm space-x-1 w-full border-b border-gray-200 transition-all duration-300 hover:text-accent">
              <FaShoppingBag />
              <Link to="/products">Shop</Link>
            </li>
            <li className="flex items-center pl-10 p-4 rounded-sm w-full border-b border-gray-200 space-x-1 transition-all duration-300 hover:text-accent">
              <FaInfoCircle />
              <a href="#about">About</a>
            </li>
            <li className="flex items-center pl-10 p-4 w-full border-b border-gray-200 rounded-sm space-x-1 transition-all duration-300 hover:text-accent">
              <FaMailBulk />
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </motion.nav>
      )}
    </>
  );
};

export default Navbar;
