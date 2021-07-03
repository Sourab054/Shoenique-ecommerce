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
    setCategories(allCategories);
  }, [products]);

  return (
    <div className="category">
      {categories.map((category, index) => {
        return (
          <button
            className="category-btn"
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
