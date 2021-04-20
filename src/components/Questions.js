import React, { useState } from "react";

const Questions = ({ data }) => {
  const [show, setShow] = useState(false);

  const toggleInfo = () => {
    setShow(!show);
  };

  return (
    <>
      <div className="ques-container">
        <h3 className="title">
          {data.title}{" "}
          <button className="btn" onClick={toggleInfo}>
            {show ? "-" : "+"}
          </button>
        </h3>

        <p>{show ? `${data.info}` : null}</p>
      </div>
    </>
  );
};

export default Questions;
