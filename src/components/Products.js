import React from "react";
import { useState, useEffect, useContext } from "react";
import Product from "./Product";
import Categories from "./Categories";
import { DataContext } from "../DataContext";

const Products = () => {
  const value = useContext(DataContext);
  const [products, setProducts] = value.products;
  const [isLoading, setIsLoading] = value.loading;
  const [newProducts, setNewProducts] = useState([]);
  const [cat, setCat] = useState("");
  // newProducts.push(products);

  // setNewProducts(products);
  useEffect(() => {
    setNewProducts(products);
    console.log(newProducts);
  }, [products]);

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

  return (
    <>
      {isLoading ? (
        <div className="animate-spin w-10 h-10"></div>
      ) : (
        <section className="p-4 font-body lg:px-20">
          <Categories products={products} filterCategory={filterCategory} />

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
      )}
    </>
  );
};

export default Products;
