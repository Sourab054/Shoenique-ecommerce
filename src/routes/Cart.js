import React, { useContext, useState, useEffect } from "react";
import { DataContext } from "../DataContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const value = useContext(DataContext);
  const [cart, setCart] = value.cart;
  const [total, setTotal] = useState(0);
  // console.log(cart);

  useEffect(() => {
    const getTotal = () => {
      const res = cart.reduce((prev, item) => {
        return prev + item.retailPrice * item.qty;
      }, 0);
      setTotal(res);
    };
    getTotal();
  }, [cart]);

  const remove = (id) => {
    let newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  };

  const increment = (id) => {
    cart.forEach((item) => {
      if (item.id === id) {
        item.qty += 1;
        console.log(item);
      }
    });
    setCart([...cart]);
  };
  const reduction = (id) => {
    cart.forEach((item) => {
      if (item.id === id) {
        item.qty >= 1 ? (item.qty = 1) : (item.qty -= 1);
        console.log(item);
      }
    });
    setCart([...cart]);
  };
  return (
    <div className="cart-component container">
      {cart.map((item) => (
        <div className="cart-page">
          <div>
            <img src={item.media.thumbUrl} alt="" />
          </div>
          <div>
            <h2>{item.title}</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
              ipsum dolor, sit amet consectetur adipisicing elit. Unde,
              reiciendis! harum!
            </p>
            <h3 style={{ color: "#732eca" }}>${item.retailPrice}</h3>
          </div>
          <div className="cart-btn">
            <div className="btn-class">
              <button className="quant-btn" onClick={() => reduction(item.id)}>
                -
              </button>
              <span>{!item.qty ? 1 : item.qty}</span>
              <button className="quant-btn" onClick={() => increment(item.id)}>
                +
              </button>
            </div>
            <div>
              <button className="remove-btn" onClick={() => remove(item.id)}>
                Remove item
              </button>
            </div>
          </div>
        </div>
      ))}
      <div className="total">
        <Link className="payment" to="/payment">
          {" "}
          Payment{" "}
        </Link>
        <h3>
          Grand Total : <span style={{ color: "#732eca" }}>${total}</span>
        </h3>
      </div>
    </div>
  );
};

export default Cart;
