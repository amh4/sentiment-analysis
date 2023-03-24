import React, { useState } from "react";

const UserInput = () => {
  const [userSentence, setUserSentence] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(userSentence);

    fetch(
      "http://127.0.0.1:5000/get_sentiment/" + encodeURIComponent(userSentence)
    )
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  };

  return (
    <div className="user-input-form">
      <p>Enter your sentence here:</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(event) => setUserSentence(event.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UserInput;
