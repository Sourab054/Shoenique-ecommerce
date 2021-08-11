import React from "react";
import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-secondary xl:px-28 sticky top-full text-primary ">
      <div className="px-4 pt-4 text-fontWhite xs mb-1:px-8 lg:mx-auto">
        <div className="grid justify-items-center font-body capitalize grid-cols-2 md:grid-cols-4">
          <div className="capitalize font-body">
            <h1 className="uppercase pt-4 pb-1 text-primary">Get to know us</h1>
            <p className="text-xs mb-1">Our Company</p>
            <p className="text-xs mb-1">Our Brand Family</p>
            <p className="text-xs mb-1">careers</p>
            <p className="text-xs mb-1">blog</p>
          </div>
          <div className="capitalize font-body">
            <h1 className="uppercase pt-4 pb-1 text-primary">Informations</h1>
            <p className="text-xs mb-1">contact</p>
            <p className="text-xs mb-1">private policy</p>
            <p className="text-xs mb-1">terms</p>
          </div>
          <div className="capitalize font-body">
            <h1 className="uppercase pt-4 pb-1 text-primary">customer care</h1>
            <p className="text-xs mb-1">FAQs</p>
            <p className="text-xs mb-1">return policy</p>
            <p className="text-xs mb-1">COVID-19 response</p>
          </div>
          <div className="capitalize font-body">
            <h1 className="uppercase pt-4 pb-1 text-primary">Gift cards</h1>
            <p className="text-xs mb-1">buy a gift card</p>
            <p className="text-xs mb-1">check balance</p>
          </div>
        </div>
        <div className="flex justify-around border-b border-fontWhite py-6 md:px-36 lg:px-96">
          <div className="border border-white rounded p-2 text-white">
            <FaTwitter size="20" />
          </div>

          <div className="border border-white rounded p-2 text-white">
            <FaFacebookF size="20" />
          </div>
          <div className="border border-white rounded p-2 text-white">
            <FaInstagram size="20" />
          </div>
          <div className="border border-white rounded p-2 text-white">
            <FiMail size="20" />
          </div>
        </div>
        <div className="px-4 py-4 mt-auto">
          <h1 className="text-xs text-center font-medium">
            Copyright &copy; 2021{" "}
            <span className="text-accent">Sourab Patil</span> .
          </h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
