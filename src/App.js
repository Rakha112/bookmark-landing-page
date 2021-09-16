import React, { useState } from "react";
import logo from "./images/logo-bookmark.svg";
import logo_putih from "./images/logo-bookmark-putih.svg";
import hamburger from "./images/icon-hamburger.svg";
import x from "./images/icon-close.svg";
import fb from "./images/icon-facebook.svg";
import tw from "./images/icon-twitter.svg";
import Hero from "./component/Hero";
import Features from "./component/Features";
import Download from "./component/Download";
import Faq from "./component/Faq";
import Foot from "./component/Foot";
import Footer from "./component/Footer";
import { Link } from "react-scroll";

function App() {
  const [aktif, setAktif] = useState(false);
  const toggleClass = () => {
    setAktif(!aktif);
  };
  return (
    <div className={aktif ? "App aktif" : "App"}>
      <div className="nav_dekstop">
        <img className="logo" src={logo} alt="logo-bookmark" />
        <div className="isi_dekstop">
          <Link
            activeClass="active"
            to="fitur"
            offset={-50}
            spy={true}
            smooth={true}
            duration={1000}
          >
            FEATURES
          </Link>
          <Link
            activeClass="active"
            to="price"
            offset={-50}
            spy={true}
            smooth={true}
            duration={1000}
          >
            PRICING
          </Link>
          <Link
            activeClass="active"
            to="contact"
            offset={-50}
            spy={true}
            smooth={true}
            duration={1000}
          >
            CONTACT
          </Link>

          <button>LOGIN</button>
        </div>
      </div>
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
            <Link
              onClick={() => toggleClass()}
              activeClass="active"
              to="fitur"
              offset={-50}
              spy={true}
              smooth={true}
              duration={1000}
            >
              FEATURES
            </Link>
            <Link
              onClick={() => toggleClass()}
              activeClass="active"
              to="price"
              offset={-50}
              spy={true}
              smooth={true}
              duration={1000}
            >
              PRICING
            </Link>
            <Link
              onClick={() => toggleClass()}
              activeClass="active"
              to="contact"
              offset={-50}
              spy={true}
              smooth={true}
              duration={1000}
            >
              CONTACT
            </Link>

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
      <Features />
      <Download />
      <Faq />
      <Foot />
      <Footer />
    </div>
  );
}

export default App;
