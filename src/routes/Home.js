import React from "react";
// import "./App.scss";

const Home = () => {
  return (
    <section className="landing container">
      <div className="landing-inner">
        <h1 className="my-1">It's okay to be obsessed with sneakers</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis,
          reiciendis. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Ab, ratione <br /> Dignissimos illum corporis accusantium sequi eum
          repudiandae, incidunt sapiente tenetur et. Saepe tempora voluptatibus
          itaque! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Laboriosam, error.
        </p>

        <button className="btn my-1">Order now</button>
      </div>
      <div>
        <img style={{ width: 500, height: 500 }} src="/img/hero.png" alt="" />
      </div>
    </section>
  );
};

export default Home;
