import React from "react";

const Contact = () => {
  return (
    <div className="px-4 py-4 pt-14 sm:px-8 md:pt-14 md:pb-16 lg:max-w-7xl lg:mx-auto">
      <div>
        <h1 className="text-3xl font-head heading-white my-4 sm:text-4xl lg:text-5xl">
          Contact Us
        </h1>
      </div>
      <div className="pt-6 md:grid md:gap-3 md:grid-cols-2">
        <form>
          <div className="flex flex-col pb-6">
            <label className="pb-1">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="px-2 py-1 rounded-sm"
            />
          </div>
          <div className="flex flex-col pb-6">
            <label className="pb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="px-2 py-1 rounded-sm"
            />
          </div>
          <div className="flex flex-col pb-6">
            <label className="pb-1">Message</label>
            <textarea
              cols="30"
              rows="5"
              placeholder="Enter your message"
              className="px-2 py-1 rounded-sm"
            ></textarea>
          </div>
          <div>
            <button className="bg-primary mt-4 text-sm font-semibold font-head text-secondary tracking-widest px-3 py-2 rounded-sm shadow-md transition-all duration-300 border hover:border-primary hover:text-primary hover:bg-transparent transform ">
              SEND MESSAGE
            </button>
          </div>
        </form>
        <div>
          <img
            src="/img/contact-us.svg"
            alt=""
            className="hidden md:block md:h-64"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
