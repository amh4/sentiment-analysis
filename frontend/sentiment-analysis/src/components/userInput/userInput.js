import React, { useState } from "react";
import SentimentGauge from "../sentimentGauge/sentimentGauge";

const UserInput = () => {
  // const [userSentence, setUserSentence] = useState(null);
  const [sentenceScore, setSentenceScore] = useState(0.5);

  // const handleInputChange = (event) => {
  //   setUserSentence(event.target.value);
  // };

  const handleSubmit = (event) => {
    event.preventDefault();
    const userInput = document.getElementById('input-field').value
    // setUserSentence(userInput)

    fetch(
      "http://127.0.0.1:5000/get_sentiment/" + encodeURIComponent(userInput)
    )
      .then((response) => response.json())
      .then((data) => setSentenceScore(data.compound))
      .catch((error) => console.log(error));
  };

  return (
    <div className="user-input-form">
      <p>Enter your sentence here:</p>
      <form onSubmit={handleSubmit}>
        <input type="text" id="input-field"/>
        <button type="submit">Submit</button>
      </form>
      <SentimentGauge sentenceScore={sentenceScore} />
    </div>
  );
};

export default UserInput;
