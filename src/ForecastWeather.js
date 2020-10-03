import React from "react";
import Icon from "./Icon";

export default function ForecastWeather(props) {
  function forecastDay() {
    let dt = new Date(props.data.dt * 1000);
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let day = days[dt.getDay()];
    return `${day}`;
  }
  return (
    <div className=" ForecastWeather col col-xs-1">
      <div>{forecastDay()}</div>
      <div>
        <span className="forecast-high">{Math.round(props.data.temp.max)}</span>
        °
      </div>
      <div>
        <Icon id="ForecastIcon" data={props.data.weather[0].icon} />
      </div>

      <div>
        <span className="forecast-low">{Math.round(props.data.temp.min)}</span>°
      </div>
    </div>
  );
}
