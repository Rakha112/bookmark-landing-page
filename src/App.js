import React, { useState } from "react";
import logo from "./images/logo-bookmark.svg";
import logo_putih from "./images/logo-bookmark-putih.svg";
import hamburger from "./images/icon-hamburger.svg";
import x from "./images/icon-close.svg";
import fb from "./images/icon-facebook.svg";
import tw from "./images/icon-twitter.svg";
import Hero from "./component/Hero";
function App() {
  const [aktif, setAktif] = useState(false);
  const toggleClass = () => {
    setAktif(!aktif);
  };
  return (
    <div className={aktif ? "App aktif" : "App"}>
      <div className={aktif ? "nav aktif" : "nav"}>
        <img
          className="logo"
          src={aktif ? logo_putih : logo}
          alt="logo-bookmark"
        />
        <img
          onClick={() => toggleClass()}
          className="ham"
          src={aktif ? x : hamburger}
          alt="icon-hamburger"
        />
        <div className={aktif ? "nav_aktif aktif" : "nav_aktif"}>
          <div className="isi">
            <p>FEATURES</p>
            <p>PRICING</p>
            <p>CONTACT</p>
            <button>LOGIN</button>
          </div>
          <div className="sosmed">
            <a
              className="fb"
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={fb} alt="" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <img src={tw} alt="" />
            </a>
          </div>
        </div>
      </div>
      <Hero />
    </div>
  );
}

export default App;
