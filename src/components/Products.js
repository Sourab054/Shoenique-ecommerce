import React from "react";
import { useState, useEffect, useContext } from "react";
import Product from "./Product";
import Categories from "./Categories";
import { DataContext } from "../DataContext";
import { FiSearch } from "react-icons/fi";

var Spinner = require("react-spinkit");

const Products = () => {
  const value = useContext(DataContext);
  const [products, setProducts] = value.products;
  const [isLoading, setIsLoading] = value.loading;
  const [newProducts, setNewProducts] = useState([]);
  const [cat, setCat] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (searchTerm !== "") {
      const searchRes = products.filter((product) => {
        return Object.values(product)
          .join(" ")
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      // setProducts(searchRes);
      setNewProducts(searchRes);
    } else {
      setProducts(products);
      setNewProducts(products);
    }
  }, [products, searchTerm]);

  const filterCategory = (category) => {
    setCat(category);
    setProducts(products);
    if (category === "all") {
      setProducts(products);
      console.log(products);
      return;
    } else {
      const newItems = products.filter(
        (product) => product.gender === category
      );
      console.log(newItems);
      setNewProducts(newItems);
    }
  };

  if (isLoading) {
    return (
      <div className="grid place-items-center h-96 w-full">
        <Spinner name="three-bounce" />
      </div>
    );
  }

  return (
    <>
      <section className="p-4 font-body lg:px-20">
        <div className="sm:flex sm:justify-between sm:pb-4">
          <div className="grid place-content-center">
            <div className="border border-gray-200 shadow-sm p-1 rounded-md mt-20 mb-4 flex items-center justify-center">
              <input
                type="text"
                placeholder="Search for your favourite sneakers..."
                onChange={(e) => setSearchTerm(e.target.value)}
                className="outline-none text-sm overflow-ellipsis p-1 pl-1 sm:w-80 md:w-96"
              />
              <FiSearch className="mr-2 text-tertiary" />
            </div>
          </div>
          <Categories products={products} filterCategory={filterCategory} />
        </div>
        <div className="pb-5 sm:grid sm:grid-cols-2 sm:gap-5 ipad:grid-cols-4">
          {cat === "all" &&
            products?.map((product) => (
              <Product product={product} key={product.id} />
            ))}
          {cat !== "all" &&
            newProducts.map((product) => (
              <Product product={product} key={product.id} />
            ))}
        </div>
      </section>
    </>
  );
};

export default Products;
