import React, { useContext, useState, useEffect } from "react";
import { DataContext } from "../DataContext";
import { Link } from "react-router-dom";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const Cart = () => {
  const value = useContext(DataContext);
  const [cart, setCart] = value.cart;
  const [total, setTotal] = useState(0);
  // console.log(cart);

  // const createCheckoutSession = async () => {
  //   const stripe = await stripePromise;
  //   console.log(stripe);
  //   //call to back-end to create a checkout session
  //   const checkoutSession = await axios.post("/api/create-checkout-session", {
  //     items: cart,
  //     email: currentUser.email,
  //   });

  //   //Redirecting
  //   const result = await stripe.redirectToCheckout({
  //     sessionId: checkoutSession.data.id,
  //   });
  //   if (result.error) {
  //     alert(result.error.message);
  //   }
  // };

  useEffect(() => {
    // console.log(currentUser.email);
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
        item.qty <= 1 ? (item.qty = 1) : (item.qty -= 1);
        // item.qty -= 1;
        // console.log(item);
      }
    });
    setCart([...cart]);
  };
  return (
    <>
      {cart.length >= 1 ? (
        <div className="px-4 py-4 font-body pt-20 lg:px-36">
          <div className="flex justify-between items-center">
            <h1 className="font-head text-xl font-medium pl-4 pb-4 text-black ipad:text-3xl">
              Your Cart ({cart.length} items)
            </h1>
            <h3
              className="text-red-600 capitalize pb-3 cursor-pointer transition-all duration-150 hover:underline "
              onClick={() => setCart([])}
            >
              remove all
            </h3>
          </div>
          {cart.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-2 shadow-sm gap-x-3 p-2 border bg-white border-gray-200 mb-5 sm:grid-cols-3 sm:gap-x-5 lg:gap-x-2"
            >
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
                <h3 className="pt-2 text-font font-semibold pl-2 md:text-lg">
                  ${item.retailPrice}
                </h3>
              </div>
              <div className="col-start-2 col-end-4 sm:col-start-3 sm:col-end-4 sm:justify-self-center">
                <button
                  className="bg-secondary text-sm font-medium font-head text-white tracking-widest px-3 py-2 rounded-sm shadow-sm transition-all duration-300 border hover:border-secondary hover:text-secondary hover:bg-transparent transform"
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
              <span className="text-black text-lg font-semibold">${total}</span>
            </h3>
            <Link className="bg-accent grid place-content-center text-base font-medium font-head text-white tracking-widest px-3 py-2 rounded-sm shadow-sm transition-all duration-300 border hover:bg-accentDark transform">
              {" "}
              Proceed to checkout{" "}
            </Link>
          </div>
        </div>
      ) : (
        <div className="px-4 py-4 font-body pt-20 mb-12 lg:px-36">
          <div className="flex flex-col items-center justify-center">
            <div>
              <img className="w-96 h-96" src="./img/EmptyCart.svg" alt="" />
            </div>
            <h3 className="text-2xl font-head font-semibold mb-2 ">
              Your Cart is Empty!
            </h3>
            <p className="text-lg text-center font-head font-medium mb-4">
              Please add items to continue shopping.
            </p>
            <Link to="/products">
              <button className="bg-accent mb-2 text-sm font-semibold font-head text-primary tracking-widest px-4 py-2 rounded-sm shadow-sm transition-all duration-300 border hover:bg-accentDark ipad:mb-4">
                Explore
              </button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
