import React from "react";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import Product from "./Product";
import Categories from "./Categories";
import { DataContext } from "../DataContext";
import { ImSpinner9 } from "react-icons/im";

const Products = () => {
  const value = useContext(DataContext);
  const [products, setProducts] = value.products;
  const [isLoading, setIsLoading] = value.loading;

  console.log(products);

  const filterCategory = (category) => {
    if (category === "all") {
      setProducts(products);
      // console.log(products);
      return;
    }
    const newItems = products.filter((product) => product.gender === category);
    setProducts(newItems);
    // console.log(products);
    setProducts(newItems);
    // console.log(newItems);
  };

  // const allCategories = [
  //   "all",
  //   ...new Set(products.map((item) => item.gender)),
  // ];
  // console.log(allCategories);
  // setCategories(allCategories);

  return (
    <>
      {isLoading ? (
        <div className="animate-spin w-10 h-10"></div>
      ) : (
        <section className="p-4 font-body lg:px-20">
          <Categories products={products} filterCategory={filterCategory} />

          <div className="pb-5 sm:grid sm:grid-cols-2 sm:gap-5 ipad:grid-cols-3">
            {products.map((product) => (
              <Product product={product} key={product.id} />
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default Products;
