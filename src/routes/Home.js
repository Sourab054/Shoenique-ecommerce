import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import About from "./About";
import Contact from "./Contact";
// import "./App.scss";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <>
      <section className="bg-tertiary pt-14 pb-4 md:py-12 lg:py-6 xl:py-20 text-primary">
        <div className="p-4 flex flex-col font-body sm:px-8 md:grid md:grid-cols-3 lg:max-w-7xl lg:mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="order-1 space-y-2 md:space-y-6 md:order-none md:col-span-2 md:my-6 lg:space-y-10"
          >
            <h1 className="text-3xl heading-white font-head heading my-4 sm:text-4xl lg:text-5xl">
              We make your move a perfect move with our
              <span className="text-font font-body font-light"> sneakers</span>.
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

            <button className="bg-primary uppercase text-sm font-semibold font-head text-secondary tracking-wider px-3 py-2 rounded-sm shadow-md transition-all duration-300 border hover:border-primary hover:text-primary hover:bg-transparent transform ">
              <Link to="/products">Explore Now</Link>
            </button>
          </motion.div>
          <div className="bg-gray-50 grid place-content-center rounded-md shadow-md md:bg-transparent md:shadow-none">
            <motion.img
              // variants={imageVariant}
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.5, type: "spring", stiffness: 100 }}
              src="/img/hero.png"
              alt=""
              className="sm:w-96 sm:h-96 md:object-cover lg:w-full lg:h-full lg:-my-12 "
            />
          </div>
        </div>
      </section>
      <section id="about" className="bg-primary text-secondary ">
        <About />
      </section>
      <section id="contact" className="bg-tertiary text-primary ">
        <Contact />
      </section>
    </>
  );
};

export default Home;
