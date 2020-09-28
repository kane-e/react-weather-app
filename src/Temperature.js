import React from "react";
import "./Temperature.css";

export default function Temperature(props) {
  return (
    <div className="Temperature">
      <div className="row current-temp">
        <div className="col-8 text-right">
          <span id="current-temp">{props.value} </span>
          <span className="current-unit">
            <a href="/" id="fahrenheit-link" className="active">
              °F
            </a>
            |
            <a href="/" id="celsius-link" className="not-active">
              °C
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}
