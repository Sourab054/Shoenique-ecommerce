import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { DataContext } from "../DataContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const value = useContext(DataContext);
  const notify = value.notify;
  const user = value.currentUser;
  const signup = value.signup;
  const history = useHistory();

  async function handleSubmit() {
    console.log("running");
    try {
      setError("");
      setLoading(true);
      await signup(email, password, name);
      console.log(user);
      notify("success", "Sign up successful");
      history.push("/login");
    } catch {
      setError("Failed to create an account");
      notify("danger", "Failed to create an account");
    }
    setLoading(false);
  }

  return (
    <section className="py-6 px-4 pt-16 sm:px-8 md:pt-16 lg:max-w-7xl lg:mx-auto">
      <div className="grid place-content-center md:grid-cols-2 md:gap-10 py-14">
        <div className="hidden md:block">
          <img src="/img/Login.svg" alt="" />
        </div>
        <div className="justify-self-center">
          <h1 className="text-3xl heading-white ipad:text-4xl"> Sign Up </h1>
          <div className="my-4 ipad:my-6">
            <label className="text-font">Name</label> <br />
            <input
              type="text"
              className="px-2 py-1 w-full shadow-sm border border-gray-300
            rounded-sm focus:outline-none focus:border-transparent focus:ring-2
             focus:ring-accentLight ipad:py-2 ipad:w-96"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="my-4 ipad:my-6">
            <label className="text-font">Email</label> <br />
            <input
              type="email"
              className="px-2 py-1 w-full shadow-sm border border-gray-300
            rounded-sm focus:outline-none focus:border-transparent focus:ring-2
             focus:ring-accentLight ipad:py-2 ipad:w-96"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4 ipad:mb-5">
            <label className="text-font">Password</label> <br />
            <input
              type="password"
              className="px-2 py-1 w-full shadow-sm border border-gray-300
            rounded-sm focus:outline-none focus:border-transparent focus:ring-2
             focus:ring-accentLight ipad:py-2 ipad:w-96"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            disabled={loading}
            onClick={handleSubmit}
            className="bg-accent mb-2 text-sm font-semibold font-head text-primary tracking-widest px-3 py-2 rounded-sm shadow-sm transition-all duration-300 border hover:bg-accentDark ipad:mb-4"
          >
            Sign Up
          </button>
          <p className="text-font">
            Already have an account?{" "}
            <Link to="/login" className="text-accent hover:underline">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Register;
