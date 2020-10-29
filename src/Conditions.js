import React from "react";
import "./Conditions.css";
import Icon from "./Icon";
import Temperature from "./Temperature";
import Wind from "./Wind";
import MaxMin from "./MaxMin";


export default function Conditions(props) {
  function setColor(){
    if(props.color==="#810000"){
      return "#0e918c";
    } if (props.color==="purple"){
      return "#b80d57"
    } if (props.color ==="#2a014b"){
      return "#4ef037"
    }if (props.color ==="white"){
      return "#90007f"
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
