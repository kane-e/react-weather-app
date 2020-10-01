import React, { useState } from "react";
import "./Temperature.css";

export default function Temperature(props) {
  const [temperature, setTemperature] = useState(props.fahrenheit);
  function getFahrenheit(event) {
    event.preventDefault();
    setTemperature(props.fahrenheit);
  }
  function getCelsius(event) {
    event.preventDefault();
    setTemperature(props.fahrenheit - (32 * 5) / 9);
  }

  return (
    <div className="Temperature">
      <div className="row current-temp">
        <div className="col-8 text-right">
          <span id="current-temp">{Math.round(props.fahrenheit)}</span>
          <span className="current-unit">
            <a
              href="/"
              id="fahrenheit-link"
              className="active"
              onClick={getFahrenheit}
            >
              °F
            </a>
            |
            <a
              href="/"
              id="celsius-link"
              className="not-active"
              onClick={getCelsius}
            >
              °C
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}
