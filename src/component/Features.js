import React, { useState } from "react";
import k1 from "../images/illustration-features-tab-1.svg";
import k2 from "../images/illustration-features-tab-2.svg";
import k3 from "../images/illustration-features-tab-3.svg";

function Features() {
  const [aktif, setAktif] = useState({
    k1: true,
    k2: false,
    k3: false,
  });
  const toggle1 = () => {
    setAktif({
      k1: true,
      k2: false,
      k3: false,
    });
  };
  const toggle2 = () => {
    setAktif({
      k1: false,
      k2: true,
      k3: false,
    });
  };
  const toggle3 = () => {
    setAktif({
      k1: false,
      k2: false,
      k3: true,
    });
  };
  return (
    <div className="features" id="fitur">
      <h1>Features</h1>
      <p>
        Our aim is to make it quick and easy for you to access your favourite
        websites. Your bookmarks sync between your devices so you can access
        them on the go.
      </p>
      <h2 className="f1" onClick={() => toggle1()}>
        Simple Bookmarking
      </h2>
      <div className={aktif.k1 ? "merah aktif" : "merah"}></div>
      <h2 className="f2" onClick={() => toggle2()}>
        Speedy Searching
      </h2>
      <div className={aktif.k2 ? "merah aktif" : "merah"}></div>
      <h2 className="f3" onClick={() => toggle3()}>
        Easy Sharing
      </h2>
      <div className={aktif.k3 ? "merah aktif" : "merah"}></div>
      <div className={aktif.k1 ? "konten aktif" : "konten"}>
        <img src={k1} alt="" />
        <h1>Bookmark in one click</h1>
        <p>
          Organize your bookmarks however you like. Our simple drag-and-drop
          interface gives you complete control over how you manage your
          favourite sites.
        </p>
      </div>
      <div className={aktif.k2 ? "konten aktif" : "konten"}>
        <img src={k2} alt="" />
        <h1>Intelligent search</h1>
        <p>
          Our powerful search feature will help you find saved sites in no time
          at all. No need to trawl through all of your bookmarks.
        </p>
      </div>
      <div className={aktif.k3 ? "konten aktif" : "konten"}>
        <img src={k3} alt="" />
        <h1>Share your bookmarks</h1>
        <p>
          Easily share your bookmarks and collections with others. Create a
          shareable link that you can send at the click of a button.
        </p>
      </div>
    </div>
  );
}

export default Features;
