import React, { useState, createContext, useEffect } from "react";
import axios from "axios";
import { auth } from "./firebase";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [userLoading, setuserLoading] = useState(true);
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

  const toastOptions = {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  };
  toast.configure();
  const notify = (type, message) => {
    if (type === "success") {
      toast.success(message, toastOptions);
    } else if (type === "info") {
      toast.info(message, toastOptions);
    } else {
      toast.danger(message, toastOptions);
    }
  };

  /*{ Authentication }*/

  async function signup(email, password, name) {
    await auth.createUserWithEmailAndPassword(email, password);
    return auth.currentUser.updateProfile({
      displayName: name,
    });
  }

  function login(email, password) {
    console.log(currentUser);
    return auth.signInWithEmailAndPassword(email, password);
  }

  function logout() {
    return auth.signOut();
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setuserLoading(false);
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
  }, [isLoading]);

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
      notify("info", "Item already added");
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
    userLoading,
    currentUser,
    login,
    signup,
    logout,
    notify,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
