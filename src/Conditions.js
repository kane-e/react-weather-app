import React from "react";
import "./Conditions.css";
import Icon from "./Icon";
import Temperature from "./Temperature";
import Wind from "./Wind";
import MaxMin from "./MaxMin";


export default function Conditions(props) {
  function setColor(){
    if(props.color==="#d92027"){
      return "#5fdde5";
    }
  }
  return (
    <div className="Conditions">
      <h1 id="city" style={{color: setColor()}} >
        {props.data.city}, {props.data.country}
      </h1>
      <Temperature
        fahrenheit={props.data.temperature}
        unit={props.unit}
        setUnit={props.setUnit}
        color={props.color}
      />
      <h4 className="text-center current-condition mb-2" style={{color: setColor()}}>
        {props.data.description}
      </h4>
      <div className="row">
        <div className="col text-center">
          <Icon data={props.data.icon} />
        </div>
      </div>
      <MaxMin dailyLow={props.dailyLow} dailyHigh={props.dailyHigh } unit={props.unit}/>
      <div className="row conditions">
        <Wind speed={props.data.wind} unit={props.unit} />
        <div className="col-6 humidity">
          <i className="fas fa-tint"></i>
          <span id="humidity"> {Math.round(props.data.humidity)}</span>%
        </div>
      </div>
    </div>
  );
}
