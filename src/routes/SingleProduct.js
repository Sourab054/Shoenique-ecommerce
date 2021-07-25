import React, { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import axios from "axios";
import { DataContext } from "../DataContext";
import { IoIosArrowBack } from "react-icons/io";

const SingleProduct = () => {
  const history = useHistory();
  const value = useContext(DataContext);
  const addToCart = value.addToCart;
  const [isLoading, setIsLoading] = value.loading;
  const [product, setProduct] = useState([]);
  const { id } = useParams();

  var Spinner = require("react-spinkit");

  const options = {
    method: "GET",
    url: `https://v1-sneakers.p.rapidapi.com/v1/sneakers/${id}`,
    headers: {
      "x-rapidapi-key": "0765955ed0msha0db50a6e394579p1e9b9fjsnd335255f018e",
      "x-rapidapi-host": "v1-sneakers.p.rapidapi.com",
    },
  };

  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        setProduct(response.data.results);
        setIsLoading(false);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  if (isLoading || !product) {
    return (
      <div className="grid place-items-center min-h-screen w-full">
        <Spinner name="three-bounce" />
      </div>
    );
  }

  return (
    <section className="pt-20 px-4 py-4 lg:max-w-7xl lg:mx-auto">
      {product.map((item) => (
        <div key={item.id}>
          <div className="md:pl-4">
            <button className="bg-gray-50 text-black px-3 py-1 rounded-sm shadow-sm">
              <div
                className="flex justify-between items-center"
                onClick={() => history.goBack()}
              >
                <IoIosArrowBack />
                Back
              </div>
            </button>
          </div>
          <div className="sm:grid sm:grid-cols-2 sm:gap-5">
            <div className="sm:py-8">
              <img src={item.media.imageUrl} alt="" className="p-4" />
            </div>
            <div className="place-self-center">
              <p className="capitalize text-font font-medium">
                {item.gender}'s Shoe
              </p>
              <h1 className="text-2xl font-head font-semibold heading mb-4 ipad:text-3xl">
                {" "}
                {item.shoe}
              </h1>
              <p className="text-lg font-semibold">${item.retailPrice}</p>
              <p className="text-gray-600 pt-2 leading-4 text-xs ipad:text-sm">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam molestias sequi, sed necessitatibus labore ex qui amet
                quis quisquam. Eum, nesciunt impedit nihil natus aperiam aliquam
                quos et porro quam!
              </p>
              <div className="font-head  font-semibold">
                <h1 className="mt-4 mb-1 tracking-wider text-gray-800">
                  Size (UK)
                </h1>
                <button className="px-2.5 py-1 mr-2  bg-gray-900 text-white rounded-md">
                  5
                </button>
                <button className="px-2.5 py-1 mr-2 bg-gray-900 text-white rounded-md">
                  6
                </button>
                <button className="px-2.5 py-1 mr-2 bg-gray-900 text-white rounded-md">
                  7
                </button>
                <button className="px-2.5 py-1 mr-2 bg-gray-900 text-white rounded-md">
                  8
                </button>
              </div>

              <div className="pt-6 lg:pt-16">
                <button
                  onClick={() => addToCart(item.id)}
                  className="bg-tertiary w-full text-white rounded-sm px-3 py-2 capitalize ipad:text-lg"
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default SingleProduct;
