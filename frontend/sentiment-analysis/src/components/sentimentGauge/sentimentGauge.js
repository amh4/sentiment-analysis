import React from "react";

const SentimentGauge = ({ sentenceScore }) => {
  return (
    <div>
      <p>{sentenceScore}</p>
    </div>
  );
};

export default SentimentGauge;
