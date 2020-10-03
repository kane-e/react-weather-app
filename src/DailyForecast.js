import React, { useState } from "react";
import "./DailyForecast.css";
import axios from "axios";
import ForecastWeather from "./ForecastWeather";

export default function DailyForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function getForecast(response) {
    console.log(response);
    setForecast(response.data);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="DailyForecast row">
        <ForecastWeather data={forecast.daily[1]} />
        <ForecastWeather data={forecast.daily[2]} />
        <ForecastWeather data={forecast.daily[3]} />
        <ForecastWeather data={forecast.daily[4]} />
        <ForecastWeather data={forecast.daily[5]} />
      </div>
    );
  } else {
    let apiKey = "35e83019a6881c6f862e82a156e4c5fc";
    let lat = props.data.lat;
    let lon = props.data.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&
    exclude=minutely,hourly&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(getForecast);

    return "Loading";
  }
}
