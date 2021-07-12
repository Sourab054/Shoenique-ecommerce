import React from "react";
import Footer from "../components/Footer";
import Products from "../components/Products";

const ProductsPage = () => {
  return (
    <>
      <Products />
      <footer className="bg-secondary text-primary ">
        <Footer />
      </footer>
    </>
  );
};

export default ProductsPage;
