import React from "react";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import Product from "./Product";
import Categories from "./Categories";
import { DataContext } from "../DataContext";

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
        <div className="basic"> </div>
      ) : (
        <article className="products">
          <Categories products={products} filterCategory={filterCategory} />

          <div className="grid">
            {products.map((product) => (
              <Product product={product} key={product.id} />
            ))}
          </div>
        </article>
      )}
    </>
  );
};

export default Products;
