import React, { useState } from "react";
import axios from "axios";
import "./Conditions.css";

export default function Conditions(props) {
  return (
    <div className="Conditions">
      <h4 className="text-center current-condition mb-2">
        {props.description}
      </h4>
      <div className="row">
        <div className="col text-center">
          <img id="icon" src="" alt="" />
        </div>
      </div>
      <div className="row conditions ">
        <div className="col-6 low">
          <i className="fas fa-thermometer-empty"></i>
          <span id="current-low"> {props.low}</span>°
        </div>
        <div className="col-6 high">
          <i className="fas fa-thermometer-three-quarters"></i>
          <span id="current-high"> {props.high}</span>°
        </div>
      </div>
      <div className="row conditions">
        <div className="col-6 wind">
          <i className="fas fa-wind"></i>
          <span id="wind"> {props.wind}</span>
          <span id="wind-unit"> mph</span>
        </div>
        <div className="col-6 humidity">
          <i className="fas fa-tint"></i>
          <span id="humidity"> {props.humidity}</span>%
        </div>
      </div>
    </div>
  );
}
