import React from "react";
import GaugeChart from "react-gauge-chart";
import "./sentimentGauge.css";

const SentimentGauge = ({ sentenceScore }) => {
  return (
    <div className="sentiment-gauge-container">
      <div className="chart-container">
        <GaugeChart
          id="gauge-chart1"
          nrOfLevels={20}
          colors={[
            "#FF0000",
            "#FF2200",
            "#FF4400",
            "#FF6600",
            "#FF8800",
            "#FFAA00",
            "#FFCC00",
            "#FFE000",
            "#FFF200",
            "#FCFF00",
            "#D5FF00",
            "#ADFF00",
            "#85FF00",
            "#5DFF00",
            "#35FF00",
            "#0DFF00",
            "#00FF19",
            "#00FF3B",
            "#00FF5D",
            "#00FF7F",
          ]}
          needleColor="#ff9966"
          needleBaseColor="#ff9966"
          arcWidth={0.23}
          hideText={true}
          percent={(sentenceScore + 1) / 2}
        />
      </div>
    </div>
  );
};

export default SentimentGauge;
