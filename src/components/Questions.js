import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Questions = ({ data }) => {
  const [show, setShow] = useState(false);

  const toggleInfo = () => {
    setShow(!show);
  };

  return (
    <>
      <div className="ques-container">
        <h4 className="title">
          {data.title}{" "}
          <button className="btn" onClick={toggleInfo}>
            {show ? <AiOutlineMinus /> : <AiOutlinePlus />}
          </button>
        </h4>

        <p>{show ? `${data.info}` : null}</p>
      </div>
    </>
  );
};

export default Questions;
