import React from "react";
import "./Conditions.css";
import CurrentIcon from "./CurrentIcon";
import Temperature from "./Temperature";

export default function Conditions(props) {
  return (
    <div className="Conditions">
      <h1 id="city">
        {props.data.city}, {props.data.country}
      </h1>
      <Temperature fahrenheit={props.data.temperature} />
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
