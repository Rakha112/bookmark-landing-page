import React, { useState } from "react";

const Foot = () => {
  const [validation, setValidation] = useState(true);

  const submit = (e) => {
    e.preventDefault();
  };

  const change = (e) => {
    let email = e.target.value;
    if (email !== "") {
      const regexp =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      setValidation(regexp.test(email));
    } else {
      setValidation(true);
    }
  };

  return (
    <div className="foot" id="contact">
      <p>35,000+ already joined</p>
      <h1>Stay up-to-date with what we’re doing</h1>
      <form action="submit" onSubmit={(e) => submit(e)}>
        <div className={validation ? "input" : "input aktif"}>
          <input
            type="email"
            placeholder="Enter your email address"
            onChange={(e) => change(e)}
          />
          <label>Whoops, make sure it's an email</label>
        </div>
        <button>Contact Us</button>
      </form>
    </div>
  );
};

export default Foot;
