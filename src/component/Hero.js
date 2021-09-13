import React from "react";
import hero from "../images/illustration-hero.svg";
const Hero = () => {
  return (
    <div className="hero">
      <img src={hero} alt="" />
      <h1>A Simple Bookmark Manager</h1>
      <p>
        A clean and simple interface to organize your favourite websites. Open a
        new browser tab and see your sites load instantly. Try it for free.
      </p>
      <div className="button">
        <button className="button1">Get it on Chrome</button>
        <button className="button2">Get it on Firefox</button>
      </div>
    </div>
  );
};

export default Hero;
