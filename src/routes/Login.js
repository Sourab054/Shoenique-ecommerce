import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { DataContext } from "../DataContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const value = useContext(DataContext);
  const user = value.currentUser;
  const login = value.login;
  const history = useHistory();

  toast.configure();
  const notify = () => {
    console.log("toast");
    toast.success("Login Successfull", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  async function handleClick() {
    try {
      setError("");
      setLoading(true);
      await login(email, password);
      notify();
      history.push("/");
    } catch {
      setError("Failed to log in");
    }
    setLoading(false);
  }

  return (
    <section className="py-6 px-4 pt-16 sm:px-8 md:pt-16 lg:max-w-7xl lg:mx-auto">
      <div className="grid place-content-center md:grid-cols-2 md:gap-10 py-14">
        <div>
          <h1 className="text-3xl heading-white ipad:text-4xl"> Sign In </h1>
          <div className="my-4 ipad:my-6">
            <input
              type="email"
              placeholder="Enter your e-mail"
              className="px-2 py-1 w-full shadow-sm border border-gray-300
            rounded-sm focus:outline-none focus:border-transparent focus:ring-2
               focus:ring-accentLight ipad:py-2 ipad:w-96"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4 ipad:mb-5">
            <input
              type="password"
              placeholder="Enter your password"
              className="px-2 py-1 w-full shadow-sm border border-gray-300
            rounded-sm focus:outline-none focus:border-transparent focus:ring-2
            focus:ring-accentLight ipad:py-2 ipad:w-96"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            onClick={handleClick}
            className="bg-accent mb-2 text-sm font-semibold font-head text-primary tracking-widest px-3 py-2 rounded-sm shadow-sm transition-all duration-300 border hover:bg-accentDark ipad:mb-4"
          >
            Sign In
          </button>
          <p className="text-font">
            Don't have an account?{" "}
            <Link to="/register" className="text-accent hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
        <div className="hidden md:block">
          <img src="/img/Login.svg" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Login;
