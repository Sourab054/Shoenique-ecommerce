import { DataContext } from "../DataContext";
import React, { useState, useEffect } from "react";

const Categories = ({ products, filterCategory }) => {
  const allCategories = [
    "all",
    ...new Set(products.map((item) => item.gender)),
  ];
  const [categories, setCategories] = useState(allCategories);

  useEffect(() => {
    console.log(allCategories);
    // setCategories(allCategories);
  }, [products]);

  return (
    <div className="flex flex-wrap pt-16 items-center justify-center">
      {categories.map((category, index) => {
        return (
          <button
            className="capitalize px-3 py-1 rounded-lg border bg-secondary text-primary mb-4 ml-2 hover:border-secondary transition-all duration-300 hover:bg-transparent hover:text-secondary "
            key={index}
            onClick={() => filterCategory(category)}
          >
            {category}{" "}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
