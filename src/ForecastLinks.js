import React from "react";
import "./ForecastLinks.css";

export default function ForecastLinks() {
  return (
    <div className="ForecastLinks">
      <span className="forecast-links">
        <a href="/" id="daily-link" className="active">
          Daily
        </a>{" "}
        |
        <a href="/" id="hourly-link" className="not-active">
          Hourly
        </a>
      </span>
    </div>
  );
}
