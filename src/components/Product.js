import React, { useContext, useState } from "react";
import Fade from "react-reveal/Fade";
import { DataContext } from "../DataContext";

const Product = ({ product }) => {
  const [isAdding, setIsAdding] = useState(false);
  const value = useContext(DataContext);
  const addToCart = value.addToCart;

  return (
    <>
      {product.media.imageUrl === null ? (
        ""
      ) : (
        <div className="product">
          <Fade bottom>
            <img
              src={product.media.imageUrl}
              style={{ width: 400, height: 300 }}
              alt=""
            />

            <h4>{product.title}</h4>

            <p>${product.retailPrice} </p>
            <button
              className={`${isAdding ? "cart-btn" : "cart"}`}
              onClick={() => addToCart(product.id)}
            >
              {!isAdding ? " Add to cart" : "Added"}
            </button>
          </Fade>
        </div>
      )}
    </>
  );
};

export default Product;
