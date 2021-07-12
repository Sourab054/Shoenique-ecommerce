import React, { useContext, useState, useEffect } from "react";
import { DataContext } from "../DataContext";
import { Link } from "react-router-dom";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import Footer from "../components/Footer";

const Cart = () => {
  const value = useContext(DataContext);
  const [cart, setCart] = value.cart;
  const [total, setTotal] = useState(0);
  console.log(cart);

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
        // console.log(item);
      }
    });
    setCart([...cart]);
  };
  return (
    <>
      <div className="px-4 py-4 font-body sm:pt-8 lg:px-36">
        <h1 className="font-head text-2xl font-semibold text-center pb-2 text-black">
          Your Cart
        </h1>
        {cart.map((item) => (
          <div className="grid grid-cols-2 gap-x-3 p-2 border border-gray-200 mb-5 sm:grid-cols-3 sm:gap-x-5 lg:gap-x-2">
            <div className="sm:row-span-2">
              <img src={item.media.thumbUrl} alt="" />
            </div>
            <div className="sm:place-self-center sm:justify-self-start sm:row-span-2">
              <h2 className="font-head font-semibold pl-2 sm:text-xl">
                {item.title}
              </h2>
              <p className="hidden ipad:block ipad:text-sm ipad:pl-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
                ipsum dolor.
              </p>
              <h3 className="pt-2 text-gray-700 font-semibold pl-2 md:text-lg">
                ${item.retailPrice}
              </h3>
            </div>
            <div className="col-start-2 col-end-4 sm:col-start-3 sm:col-end-4 sm:justify-self-center">
              <button
                className="bg-secondary text-sm font-medium font-head text-white tracking-widest px-3 py-2 rounded-sm shadow-md transition-all duration-300 border hover:border-secondary hover:text-secondary hover:bg-transparent transform"
                onClick={() => remove(item.id)}
              >
                Remove item
              </button>
            </div>
            <div className="row-start-2 row-end-3 sm:col-start-3 sm:col-end-4 sm:row-start-1 sm:row-end-2 sm:place-self-end sm:justify-self-center">
              <button className="p-4" onClick={() => reduction(item.id)}>
                <AiOutlineMinus />
              </button>
              <span className="px-2">{item.qty}</span>
              <button className="p-4" onClick={() => increment(item.id)}>
                <AiOutlinePlus />
              </button>
            </div>
          </div>
        ))}
        <div className="capitalize sm:flex justify-between">
          <h3 className="text-gray-600 text-center pb-2 sm:self-center">
            Grand Total :{" "}
            <span className="text-black font-semibold">${total}</span>
          </h3>
          <Link
            className="bg-tertiary grid place-content-center text-sm font-medium font-head text-white tracking-widest px-3 py-2 rounded-sm shadow-md transition-all duration-300 border hover:border-tertiary hover:text-tertiary hover:bg-transparent transform"
            to="/payment"
          >
            {" "}
            Proceed to checkout{" "}
          </Link>
        </div>
      </div>
      <footer className="bg-secondary fixed inset-x-0 bottom-0 text-primary ">
        <Footer />
      </footer>
    </>
  );
};

export default Cart;
