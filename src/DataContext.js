import React, { useState, createContext, useEffect } from "react";
import axios from "axios";
import { auth } from "./firebase";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [cart, setCart] = useState([]);

  const options = {
    method: "GET",
    url: "https://v1-sneakers.p.rapidapi.com/v1/sneakers",
    params: { limit: "40" },
    headers: {
      "x-rapidapi-key": "0765955ed0msha0db50a6e394579p1e9b9fjsnd335255f018e",
      "x-rapidapi-host": "v1-sneakers.p.rapidapi.com",
    },
  };

  /*{ Authentication }*/

  function signup(email, password, name) {
    var user = auth.currentUser;
    console.log(user);
    return auth
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        user = auth.currentUser;
        console.log(user);
      })
      .then(() => {
        user.updateProfile({
          displayName: name,
        });
      });
  }

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  function logout() {
    return auth.signOut();
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  /*{ Cart }*/

  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        let data = response.data.results;
        data.map((item) => {
          item.qty = 1;
        });
        // console.log(data);
        setProducts(data);
        setIsLoading(false);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  const addToCart = (id) => {
    const check = cart.every((item) => {
      return item.id !== id;
    });
    if (check) {
      const data = products.filter((product) => {
        return product.id === id;
      });
      setCart([...cart, ...data]);
    } else {
      const data = cart.find((item) => {
        return item.id === id;
      });
      data.qty += 1;
      // setCart([...data, ...cart]);
      // alert("Product has already been added to the cart");
    }
  };

  useEffect(() => {
    const cartItem = JSON.parse(localStorage.getItem("Cart"));
    if (cartItem) setCart(cartItem);
  }, []);

  useEffect(() => {
    localStorage.setItem("Cart", JSON.stringify(cart));
  }, [cart]);

  const value = {
    products: [products, setProducts],
    cart: [cart, setCart],
    addToCart: addToCart,
    loading: [isLoading, setIsLoading],
    currentUser,
    login,
    signup,
    logout,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
