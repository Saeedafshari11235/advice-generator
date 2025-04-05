import React, { useState } from "react";
import "./generator.css";

export default function Generator() {
  const [advice, setAdvice] = useState("need Advice? Click here");
  const url = "https://api.adviceslip.com/advice";
  const getAdviceHandler = () => {
    fetch(url)
      .then((respone) => {
        return respone.json();
      })
      .then((response) => {
        setAdvice(response.slip.advice);
      })
      .catch((error) => {
        setAdvice("Sorry try again :(");
      });
  };
  return (
    <div className="advice-container">
      <div className="advice" onClick={getAdviceHandler}>
        {advice}
      </div>
    </div>
  );
}
