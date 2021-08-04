import React, { useContext, useState } from "react";
import Fade from "react-reveal/Fade";
import { DataContext } from "../DataContext";
import { AiFillEye } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const [isAdding, setIsAdding] = useState(false);
  const value = useContext(DataContext);
  const addToCart = value.addToCart;

  return (
    <>
      {product.media.imageUrl === null ? (
        ""
      ) : (
        <div className="rounded-md shadow-lg border border-gray-200 mb-5">
          <Fade bottom>
            <img
              src={product.media.thumbUrl}
              alt=""
              className="border-b border-gray-400 rounded-t-md object-contain flex p-10 items-center"
            />
            <div className="flex justify-around p-3">
              <div>
                <h4 className="font-head font-semibold text-lg">
                  {product.shoe}
                </h4>
                <p className="text-xs">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
                  ipsa!
                </p>
              </div>
              <p className="text-sm font-semibold">${product.retailPrice} </p>
            </div>
            <div className="flex justify-around p-4 font-body ipad:flex-col ">
              <Link
                to={`/products/${product.id}`}
                className="border border-font text-black bg-primary rounded-md px-5 py-1.5 sm:px-3 sm:py-1 ipad:mb-2"
              >
                <div className="flex items-center ipad:justify-center">
                  <AiFillEye className="mr-1" />
                  Details
                </div>
              </Link>
              <button
                className={`${
                  isAdding
                    ? "bg-secondary border border-secondary text-white rounded-md px-3 py-1 capitalize"
                    : "bg-secondary border border-tertiary text-white rounded-md px-3 py-1.5 capitalize "
                }`}
                onClick={() => addToCart(product.id)}
              >
                <div className="flex items-center font-normal ipad:justify-center">
                  <FiShoppingCart className="mr-1" />
                  {!isAdding ? " Add to cart" : "Added"}
                </div>
              </button>
            </div>
          </Fade>
        </div>
      )}
    </>
  );
};

export default Product;
