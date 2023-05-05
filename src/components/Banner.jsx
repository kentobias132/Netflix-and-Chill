import React, { useState } from "react";

function Banner() {
  const [active, setActive] = useState(false);
  const pwd = "1234";
  const handleChange = (e) => {
    if (e.target.value === pwd) {
      setActive((prevState) => !prevState);
    }
  };

  return (
    <>
      <label htmlFor="password">Password : </label>
      <input type="text" id="password" onChange={handleChange} />
      {active ? (
        <h3>Correct password, Door Activated</h3>
      ) : (
        <h3>The Password is incorrect</h3>
      )}
      {/* <button onClick={handleChange}>
        {" "}
        {active ? "Deactivated Card" : "Activate Card"}{" "}
      </button> */}
    </>
  );
}

export default Banner;
