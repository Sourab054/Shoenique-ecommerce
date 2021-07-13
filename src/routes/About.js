import React from "react";
import { FaTruckMoving, FaCheckCircle, FaPhoneAlt } from "react-icons/fa";
import { FiRefreshCcw } from "react-icons/fi";

const About = () => {
  return (
    <div className="py-6 px-4 sm:px-8 md:pt-12  lg:max-w-7xl lg:mx-auto">
      <div>
        <h1 className="text-3xl heading font-head pb-6 font-medium sm:text-4xl lg:text-5xl">
          Who are we?
        </h1>
      </div>
      <p className="text-sm text-font font-medium pb-2 leading-6 sm:text-base lg:text-lg">
        We have served millions of people who aspire to better their lives.{" "}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum vel sed rem
        obcaecati voluptatibus aliquam provident, magni blanditiis maiores est.
      </p>
      <p className="text-sm pb-2 text-font font-medium leading-6 sm:text-base md:leading-none lg:text-lg">
        {" "}
        We are present in 10 countries around the globe & are constantly
        expanding. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Odio rerum, totam voluptatum aliquam, nostrum quam molestias aspernatur
        non, dolore quaerat dolor suscipit? Impedit eum quibusdam tempore
        exercitationem est nulla sint.
      </p>
      <div className="text-font sm:grid sm:grid-cols-2 gap-5 md:mt-10 lg:px-20 lg:gap-x-20">
        <div className="text-center  border border-gray-200 rounded-md shadow-md mb-4 py-4 px-6  ">
          <div className="grid place-content-center pb-2 text-tertiary">
            <FaTruckMoving size="50" />
          </div>
          <h1 className="font-head text-gray-900 font-medium inline-block text-2xl line ">
            Express Delivery
          </h1>

          <p className="text-sm pt-4 md:text-base lg:text-lg">
            We deliver your span sneakers in just 2 days safe and secure.
          </p>
        </div>
        <div className="text-center border border-gray-200 rounded-md shadow-md mb-4 py-4 px-6">
          <div className="grid place-content-center pb-2 text-tertiary">
            <FiRefreshCcw size="46" />
          </div>
          <h1 className="font-head text-gray-900 font-medium inline-block text-2xl line">
            Return Available
          </h1>
          <p className="text-sm pt-4 md:text-base lg:text-lg">
            We take back the products if damaged and offer you return.
          </p>
        </div>
        <div className="text-center border border-gray-200 rounded-md shadow-md mb-4 py-4 px-6">
          <div className="grid place-content-center pb-2 text-tertiary">
            <FaCheckCircle size="40" />
          </div>
          <h1 className="font-head text-gray-900 font-medium inline-block text-2xl line">
            Original Products
          </h1>
          <p className="text-sm pt-4 md:text-base lg:text-lg">
            We deliver you 100% original products guaranteed by top brands.
          </p>
        </div>
        <div className="text-center border border-gray-200 rounded-md shadow-md mb-4 py-4 px-6">
          <div className="grid place-content-center pb-2 text-tertiary">
            <FaPhoneAlt size="38" />
          </div>
          <h1 className="font-head text-gray-900 font-medium inline-block text-2xl line">
            Customer Support
          </h1>
          <p className="text-sm pt-4 md:text-base lg:text-lg">
            We are online 24 hours every day to take your queries.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
