import { DataContext } from "../DataContext";
import React, { useState, useEffect } from "react";

const Categories = ({ products, filterCategory }) => {
  const allCategories = [
    "all",
    ...new Set(products.map((item) => item.gender)),
  ];
  const [categories, setCategories] = useState(allCategories);

  useEffect(() => {
    // console.log(allCategories);
  }, [products]);

  return (
    <div className=" hidden sm:flex sm:flex-wrap sm:pt-16 sm:items-center sm:justify-center sm:text-gray-500">
      <div className="border border-gray-200 rounded-md p-1 shadow-sm">
        <label htmlFor="categories">Categories : </label>
        <select
          name="categories"
          className="capitalize outline-none"
          onChange={(e) => filterCategory(e.target.value)}
        >
          {categories.map((category, index) => {
            return (
              <option key={index} value={category}>
                {" "}
                {category}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default Categories;
