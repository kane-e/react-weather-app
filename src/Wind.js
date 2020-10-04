import React from "react";

export default function Wind(props) {
  if (props.unit === "fahrenheit") {
    return (
      <div className="col-6 wind">
        <i className="fas fa-wind"></i>
        <span id="wind"> {Math.round(props.speed)}</span>
        <span id="wind-unit"> mph</span>
      </div>
    );
  } else {
    return (
      <div className="col-6 wind">
        <i className="fas fa-wind"></i>
        <span id="wind"> {Math.round(props.speed * 1.6)}</span>
        <span id="wind-unit"> kph</span>
      </div>
    );
  }
}
