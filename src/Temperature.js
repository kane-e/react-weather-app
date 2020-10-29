import React from "react";
import "./Temperature.css";

export default function Temperature(props) {
  function getFahrenheit(event) {
    event.preventDefault();
    props.setUnit("fahrenheit");
  }
  function getCelsius(event) {
    event.preventDefault();
    props.setUnit("celsius");
  }
  function celsiusTemperature(event) {
    return props.fahrenheit - (32 * 5) / 9;
  }
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
  if (props.unit === "fahrenheit") {
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
                style={{color: setColor()}}
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
                style={{color: setColor()}}
              >
                °F{" "}
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
