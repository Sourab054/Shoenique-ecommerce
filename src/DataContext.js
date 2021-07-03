import React, { useState, createContext, useEffect } from "react";
import axios from "axios";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [cart, setCart] = useState([]);

  const options = {
    method: "GET",
    url: "https://v1-sneakers.p.rapidapi.com/v1/sneakers",
    params: { limit: "20" },
    headers: {
      "x-rapidapi-key": "dbb5590bccmsh8bcc84e2aa2288cp1b507djsnad4785c628d5",
      "x-rapidapi-host": "v1-sneakers.p.rapidapi.com",
    },
  };

  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        // console.log(response.data.results);
        setProducts(response.data.results);
        setIsLoading(false);
      })
      .catch(function (error) {
        console.error(error);
      });
    let items = [...products];
    items.map((product) => {
      product.qty = 1;
      console.log(product);
    });
    setProducts(items);
  }, []);

  // console.log(products);

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
      alert("Product has already been added to the cart");
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
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};