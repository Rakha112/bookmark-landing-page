import React, { useState, useRef } from "react";
import dataFaq from "./dataFaq";

const Faq = () => {
  const [aktif, setAktif] = useState(null);
  const [tinggi, setTinggi] = useState("0px");
  const content = useRef([]);

  const toggle = (i) => {
    setAktif(aktif === null ? i : null);
    setAktif(aktif === i ? null : i);
    setTinggi(aktif === i ? "0px" : `${content.current[i].scrollHeight}px`);
  };

  return (
    <div className="faq">
      <div className="isi_faq">
        <h1>Frequently Asked Questions</h1>
        <p>
          Here are some of our FAQs. If you have any other questions you’d like
          answered please feel free to email us.
        </p>
      </div>
      <div className="accordion_container">
        <div className="accordion">
          {dataFaq.map((data, i) => {
            return (
              <div className="isi-accord" key={i}>
                <button className="judul" onClick={() => toggle(i)}>
                  <h3>{data.q}</h3>

                  <svg
                    className={aktif === i ? "rotate" : ""}
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="12"
                  >
                    <path
                      fill="none"
                      stroke="#5267DF"
                      strokeWidth="3"
                      d="M1 1l8 8 8-8"
                    />
                  </svg>
                </button>
                <div
                  className="isi-answer"
                  ref={(ref) => (content.current[i] = ref)}
                  style={
                    i === aktif
                      ? { maxHeight: `${tinggi}` }
                      : { maxHeight: "0px" }
                  }
                >
                  <p>{data.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="more">
        <button>More Info</button>
      </div>
    </div>
  );
};

export default Faq;
