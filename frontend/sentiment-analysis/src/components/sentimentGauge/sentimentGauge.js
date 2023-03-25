import React, { useState} from "react";
import GaugeChart from 'react-gauge-chart';

const SentimentGauge = ({ sentenceScore }) => {

  return (
    <div>
      <GaugeChart id='gauge-chart1'
      nrOfLevels={20}
      percent={sentenceScore}/>
    </div>
  );
};

export default SentimentGauge;
