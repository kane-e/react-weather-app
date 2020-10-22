import React from "react";
import Icon from "./Icon";

export default function DailyForecast(props) {
  function forecastDay() {
    let dt = new Date(props.data.dt * 1000);
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let day = days[dt.getDay()];
    return `${day}`;
  }

  if (props.unit === "fahrenheit") {
    return (
      <div className=" DailyForecast col col-xs-1">
        <div>{forecastDay()}</div>
        <div>
          <span className="forecast-high">
            {Math.round(props.data.temp.max)}
          </span>
          °
        </div>
        <div>
          <Icon id="ForecastIcon" data={props.data.weather[0].icon} />
        </div>

        <div>
          <span className="forecast-low">
            {Math.round(props.data.temp.min)}
          </span>
          °
        </div>
      </div>
    );
  } else {
    return (
      <div className=" DailyForecast col col-xs-1">
        <div>{forecastDay()}</div>
        <div>
          <span className="forecast-high">
            {Math.round(((props.data.temp.max - 32) * 5) / 9)}
          </span>
          °
        </div>
        <div>
          <Icon id="ForecastIcon" data={props.data.weather[0].icon} />
        </div>

        <div>
          <span className="forecast-low">
            {Math.round(((props.data.temp.min - 32) * 5) / 9)}
          </span>
          °
        </div>
      </div>
    );
  }
}
