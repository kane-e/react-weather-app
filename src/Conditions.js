import React from "react";
import "./Conditions.css";
import CurrentIcon from "./CurrentIcon";

export default function Conditions(props) {
  return (
    <div className="Conditions">
      <h1 id="city">{props.data.city}</h1>
      <div className="row current-temp">
        <div className="col-8 text-right">
          <span id="current-temp">{Math.round(props.data.temperature)}</span>
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
      <h4 className="text-center current-condition mb-2">
        {props.data.description}
      </h4>
      <div className="row">
        <div className="col text-center">
          <CurrentIcon data={props.data.icon} />
        </div>
      </div>
      <div className="row conditions ">
        <div className="col-6 low">
          <i className="fas fa-thermometer-empty"></i>
          <span id="current-low"> 00</span>°
        </div>
        <div className="col-6 high">
          <i className="fas fa-thermometer-three-quarters"></i>
          <span id="current-high"> 99</span>°
        </div>
      </div>
      <div className="row conditions">
        <div className="col-6 wind">
          <i className="fas fa-wind"></i>
          <span id="wind"> {Math.round(props.data.wind)}</span>
          <span id="wind-unit"> mph</span>
        </div>
        <div className="col-6 humidity">
          <i className="fas fa-tint"></i>
          <span id="humidity"> {Math.round(props.data.humidity)}</span>%
        </div>
      </div>
    </div>
  );
}
