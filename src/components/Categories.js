import { DataContext } from "../DataContext";
import React, { useState, useEffect } from "react";

const Categories = ({ products, filterCategory }) => {
  const allCategories = [
    "all",
    ...new Set(products.map((item) => item.gender)),
  ];
  const [categories, setCategories] = useState(allCategories);
  const [active, setActive] = useState();

  const handleClick = (category, index) => {
    // console.log("object");
    setActive(index);
    filterCategory(category);
  };

  useEffect(() => {
    // console.log(categories);
  }, []);

  return (
    <div className="flex items-center justify-center">
      <div className="flex overflow-x-scroll category items-center sm:justify-center">
        {categories.map((category, index) => {
          return (
            <button
              className={
                index === active
                  ? "capitalize px-5 py-1.5 shadow-sm rounded-md border bg-secondary text-primary mb-4 ml-2 hover:border-secondary transition-all duration-300"
                  : "capitalize text-gray-500 px-5 py-1.5 shadow-sm rounded-md border bg-primary mb-4 ml-2 hover:border-secondary transition-all duration-300"
              }
              key={index}
              onClick={() => handleClick(category, index)}
            >
              {category}{" "}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
