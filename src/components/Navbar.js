import React, { useContext, useEffect, useState } from "react";
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
  FaShoppingCart,
} from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { FiShoppingCart } from "react-icons/fi";
import Avatar from "react-avatar";

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
  useEffect(() => {
    showSidebar(false);
  }, []);
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
          <button className="sm:flex sm:bg-gray-50 sm:justify-center sm:items-center sm:text-sm sm:font-semibold sm:font-head sm:text-black sm:tracking-wider sm:px-3 sm:py-1.5 sm:rounded-sm sm:shadow-sm transition-all duration-300 transform mr-4 md:hover:bg-gray-200 ">
            <Link to="/cart">
              <div className="flex relative">
                <FiShoppingCart size="21" className="mr-1" />
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
            className="sm:bg-accent sm:text-sm sm:font-medium sm:font-head sm:text-primary sm:tracking-wider sm:px-3 sm:py-1.5 sm:rounded-sm sm:shadow-sm transition-all duration-300 transform md:hover:bg-accentDark"
          >
            {currentUser ? (
              <FaSignOutAlt size="20" className="sm:hidden ml-1" />
            ) : (
              <FaRegUser size="18" className="sm:hidden" />
            )}
            <h1 className="hidden sm:block">
              {!currentUser ? "Login" : "Logout"}
            </h1>
          </button>
        </div>
      </div>
      {currentUser && sidebar && (
        <motion.nav
          animate={
            sidebar ? { x: 0, y: 0, opacity: 1 } : { x: "-100vw", opacity: 0 }
          }
          initial={{ x: "-100vw", opacity: 0 }}
          transition={{ duration: 0.3 }}
          className={` ${
            !sidebar
              ? "w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 z-10 h-full bg-secondary text-primary flex justify-center fixed top-0 -left-full transition-all duration-500"
              : "w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 z-10 h-full bg-secondary text-primary flex justify-center fixed top-0 left-0 transition-all duration-500"
          }`}
        >
          <ul
            onClick={() => showSidebar(false)}
            className="flex flex-col text-lg text-center items-center w-full "
          >
            <li className="ml-auto p-4 pb-1 text-primary hover:text-accent">
              <Link onClick={() => showSidebar(false)}>
                <MdClose size="30" />
              </Link>
            </li>
            <li className="flex items-center justify-start p-5 pl-20 space-x-1 w-full border-b border-gray-200 transition-all duration-300 hover:text-accent">
              <Avatar
                className="mr-1 "
                name={currentUser.displayName}
                size="60"
                round={true}
                textSizeRatio={0}
                color="#11B6E4"
              />
              <div className="flex flex-col">
                <Link className="text-xl overflow-hidden capitalize" to="/">
                  {currentUser.displayName}
                </Link>
                <small className="text-xs text-gray-200">
                  {currentUser.email}
                </small>
              </div>
            </li>
            <li className="flex items-center justify-start pl-14 p-4 space-x-1 w-full transition-all duration-300 hover:text-accent">
              <FaHome className="mr-2" />
              <Link to="/">Home</Link>
            </li>
            <li className="flex items-center pl-14 p-4 space-x-1 w-full transition-all duration-300 hover:text-accent">
              <FaShoppingBag className="mr-2" />
              <Link to="/products">Shop</Link>
            </li>
            <li className="flex items-center pl-14 p-4 w-full space-x-1 transition-all duration-300 hover:text-accent">
              <FaInfoCircle className="mr-2" />
              <a href="#about">About</a>
            </li>
            <li className="flex w-4/5 items-center p-3 pl-4 border-b-2 border-gray-600 space-x-1 transition-all duration-300 hover:text-accent">
              <FaMailBulk className="mr-2" />
              <a href="#contact">Contact</a>
            </li>
            <li className="flex items-center pl-14 p-3 w-full space-x-1 transition-all duration-300 hover:text-accent">
              <FaShoppingCart className="mr-2" />
              <Link to="/cart">My Cart</Link>
            </li>
            <li
              onClick={handleLogin}
              className="flex items-center pl-14 p-3 w-full space-x-1 transition-all duration-300 hover:text-accent"
            >
              <FaSignOutAlt className="mr-2" />
              <Link href="#about">Logout</Link>
            </li>
          </ul>
        </motion.nav>
      )}
    </>
  );
};

export default Navbar;
