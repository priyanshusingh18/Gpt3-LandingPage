import React from "react";
import Feature from "../../feature/Feature";
import "./whatGPT3.css";
const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 secstion__margin">
      <div className="gpt3__whatgpt3-features">
        <Feature />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p className="gradient__text">Explore the Library </p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature />
        <Feature />
        <Feature />
      </div>
    </div>
  );
};

export default WhatGPT3;
