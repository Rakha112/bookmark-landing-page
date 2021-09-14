import React from "react";
import dataCard from "./dataCard";
const CardDownload = () => {
  return (
    <div className="card-container">
      {dataCard.map((data) => {
        return (
          <div className="card" key={data.id}>
            <img src={data.logo} alt="" />
            <h2>{data.h2}</h2>
            <p>{data.p}</p>
            <button>{data.b}</button>
          </div>
        );
      })}
    </div>
  );
};

export default CardDownload;
