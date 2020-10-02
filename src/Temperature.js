import React, { useState } from "react";
import "./Temperature.css";

export default function Temperature(props) {
  const [unit, setUnit] = useState("fahrenheit");

  function getFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function getCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  function celsiusTemperature(event) {
    return props.fahrenheit - (32 * 5) / 9;
  }
  if (unit === "fahrenheit") {
    return (
      <div className="Temperature">
        <div className="row current-temp">
          <div className="col-8 text-right">
            <span id="current-temp">{Math.round(props.fahrenheit)}</span>
            <span className="current-unit">
              °F |{" "}
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
  } else {
    return (
      <div className="Temperature">
        <div className="row current-temp">
          <div className="col-8 text-right">
            <span id="current-temp">{Math.round(celsiusTemperature())}</span>
            <span className="current-unit">
              <a
                href="/"
                id="fahrenheit-link"
                className="not-active"
                onClick={getFahrenheit}
              >
                °F
              </a>
              |
              <a href="/" id="celsius-link" className="active">
                °C
              </a>
            </span>
          </div>
        </div>
      </div>
    );
  }
}
