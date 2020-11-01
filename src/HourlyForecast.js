import React from "react";
import "./HourlyForecast.css";
import Icon from "./Icon";


export default function HourlyForecast(props){
    
    function formatHours() {
    let date = new Date(props.data.dt * 1000);
    let hours = date.getHours();
    if (hours < 10) {
      hours = `0${hours}`;
    }
    let minutes = date.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }

    return date.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
  }

  if (props.unit === "fahrenheit") {
    return (
      <div className=" HourlyForecast col col-xs-1">
        <div>{formatHours()}</div>
        <div>
          <span className="forecast-high">
            {Math.round(props.data.temp)}
          </span>
          °
        </div>
        <div>
          <Icon id="ForecastIcon" data={props.data.weather[0].icon} />
        </div>
      </div>
    );
  } else {
    return (
      <div className="HourlyForecast col col-xs-1">
        <div>{formatHours()}</div>
        <div>
          <span className="forecast-high">
            {Math.round(((props.data.temp - 32) * (5 / 9)))}
          </span>
          °
        </div>
        <div>
          <Icon id="ForecastIcon" data={props.data.weather[0].icon} />
        </div>

      </div>
    );
}


    
} 