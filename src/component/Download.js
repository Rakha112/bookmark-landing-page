import React from "react";
import CardDownload from "./CardDownload";

function Download() {
  return (
    <div className="download" id="price">
      <h1>Download the extension</h1>
      <p>
        We’ve got more browsers in the pipeline. Please do let us know if you’ve
        got a favourite you’d like us to prioritize.
      </p>
      <CardDownload />
    </div>
  );
}

export default Download;
