import React from "react";

const Foot = () => {
  const submit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="foot" id="contact">
      <p>35,000+ already joined</p>
      <h1>Stay up-to-date with what we’re doing</h1>
      <form action="submit" onSubmit={(e) => submit(e)}>
        <input type="email" placeholder="Enter your email address" />
        <button>Contact Us</button>
      </form>
    </div>
  );
};

export default Foot;
