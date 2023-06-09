import React, { useState } from "react";
import SentimentGauge from "../sentimentGauge/sentimentGauge";
import "./userInput.css";
import Error from "../error/error";

const UserInput = () => {
  const [sentenceScore, setSentenceScore] = useState(0);
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const userInput = document.getElementById("input-field").value;

    fetch(
      "https://sentiment-analysis-backend-cors.onrender.com/get_sentiment/" +
        encodeURIComponent(userInput)
    )
      .then((response) => response.json())
      .then((data) => setSentenceScore(data.compound))
      .catch((error) => {
        console.log(error);
        setError("Sorry something went wrong, please try again");
      });
  };

  return (
    <div className="user-input">
      <form className="user-input-form" onSubmit={handleSubmit}>
        <input type="text" id="input-field" placeholder="Enter a sentence" />
        <button className="user-submit-button" type="submit">
          Submit
        </button>
      </form>
      {error && <Error errorMessage={error} />}
      {!error && <SentimentGauge sentenceScore={sentenceScore} />}
    </div>
  );
};

export default UserInput;
