import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import About from "./About";
import Contact from "./Contact";
// import "./App.scss";

const Home = () => {
  return (
    <>
      <section className="p-4 bg-primary flex flex-col font-body sm:px-8 md:grid md:grid-cols-3 md:pt-24 lg:max-w-7xl lg:mx-auto">
        <div className="order-1 space-y-2 md:order-none md:col-span-2 md:my-6 lg:space-y-6">
          <h1 className="text-3xl font-head heading my-4 sm:text-4xl lg:text-5xl">
            We make your move a perfect move with our
            <span className="text-tertiary"> sneakers</span>.
          </h1>
          <span className="w-40 h-40"></span>
          <p className="text-sm text-font sm:text-base lg:text-lg">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis,
            reiciendis. Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Ab, ratione <br /> Dignissimos illum corporis accusantium
            sequi eum repudiandae, incidunt sapiente tenetur et. Saepe tempora
            voluptatibus itaque! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Laboriosam, error.
          </p>

          <button className="bg-tertiary text-sm font-semibold font-head text-white tracking-wider px-3 py-2 rounded-sm shadow-md transition-all duration-300 border hover:border-tertiary hover:text-tertiary hover:bg-transparent transform ">
            <Link to="/products">BROWSE PRODUCTS</Link>
          </button>
        </div>
        <div className="bg-gray-200 grid place-content-center rounded-md shadow-md md:bg-transparent md:shadow-none">
          <img
            src="/img/hero.png"
            alt=""
            className="sm:w-96 sm:h-96 lg:w-full lg:h-full lg:-my-12 "
          />
        </div>
      </section>
      <section className="bg-secondary text-primary ">
        <About />
      </section>
      <section className="bg-primary text-secondary ">
        <Contact />
      </section>
      <footer className="bg-secondary text-primary ">
        <Footer />
      </footer>
    </>
  );
};

export default Home;
