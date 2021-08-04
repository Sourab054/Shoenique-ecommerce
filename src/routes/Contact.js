import React from "react";

const Contact = () => {
  return (
    <div className="px-4 py-4 pt-14 sm:px-8 md:pt-14 md:pb-16 lg:max-w-7xl lg:mx-auto">
      <div>
        <h1 className="text-3xl font-head heading-white my-4 sm:text-4xl lg:text-5xl">
          Contact Us
        </h1>
      </div>
      <div className="pt-6 md:grid md:gap-x-32 md:grid-cols-2">
        <form>
          <div className="flex flex-col pb-6">
            <label className="pb-1">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="px-2 py-1 border border-gray-300 rounded-sm focus:outline-none focus:border-transparent focus:ring-2 focus:ring-gray-600"
            />
          </div>
          <div className="flex flex-col pb-6">
            <label className="pb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="px-2 py-1 border border-gray-300 rounded-sm focus:outline-none focus:border-transparent focus:ring-2 focus:ring-gray-600"
            />
          </div>
          <div className="flex flex-col pb-6">
            <label className="pb-1">Message</label>
            <textarea
              cols="30"
              rows="5"
              placeholder="Enter your message"
              className="px-2 py-1 border border-gray-300 rounded-sm focus:outline-none focus:border-transparent focus:ring-2 focus:ring-gray-600"
            ></textarea>
          </div>
          <div>
            <button className="bg-accent mt-4 text-sm font-semibold font-head text-primary tracking-widest px-3 py-2 rounded-sm shadow-sm transition-all duration-300 border hover:bg-accentDark">
              SEND MESSAGE
            </button>
          </div>
        </form>
        <div className="md:place-self-center">
          <img
            src="/img/Contact.svg"
            alt=""
            className="hidden md:block md:h-72"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
