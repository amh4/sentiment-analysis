import React, { useState } from "react";
import SentimentGauge from "../sentimentGauge/sentimentGauge";

const UserInput = () => {
  const [sentenceScore, setSentenceScore] = useState(0);
  const [error, setError] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userInput = document.getElementById('input-field').value

    fetch(
      "http://127.0.0.1:5000/get_sentiment/" + encodeURIComponent(userInput)
    )
      .then((response) => response.json())
      .then((data) => setSentenceScore(data.compound))
      .catch((error) => setError(error));
  };

  return (
    <div className="user-input-form">
      <form onSubmit={handleSubmit}>
        <input type="text" id="input-field" placeholder="Enter a sentence"/>
        <button type="submit">Submit</button>
      </form>
      <SentimentGauge sentenceScore={sentenceScore} />
    </div>
  );
};

export default UserInput;
