import React, { useState } from "react";
import "./Forecast.css";
import axios from "axios";
import DailyForecast from "./DailyForecast";
import HourlyForecast from "./HourlyForecast";


export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);
  

  function getForecast(response) {
    setForecast(response.data);
    console.log(response.data);
    
    props.setDailyHigh(response.data.daily[0].temp.max);
    props.setDailyLow(response.data.daily[0].temp.min);
    setLoaded(true);
  }
  function getHourly(event){
    event.preventDefault();
    return props.setPreview("hourly")
  }
  function getDaily(event){
    event.preventDefault();
    return props.setPreview("daily");
  }

  if (loaded && forecast.lat === props.data.lat && forecast.lon === props.data.lon && props.preview === "daily" ) {
    return (
      <div className= "Forecast">
      <span className="forecast-links">
        <a href="/" id="daily-link" className="active">
          Daily
        </a>{" "}
        |
        <a href="/" id="hourly-link" className="not-active" onClick={getHourly}>
          {" "}
          Hourly
        </a>
      </span>
      <div className=" row">
        <DailyForecast data={forecast.daily[1]} unit={props.unit} />
        <DailyForecast data={forecast.daily[2]} unit={props.unit} />
        <DailyForecast data={forecast.daily[3]} unit={props.unit} />
        <DailyForecast data={forecast.daily[4]} unit={props.unit} />
        <DailyForecast data={forecast.daily[5]} unit={props.unit} />
        
      </div>
      </div>
    );
  } else {
    if (loaded && forecast.lat === props.data.lat && forecast.lon === props.data.lon && props.preview === "hourly" ) {
    return (
      <div className= "Forecast">
      <span className="forecast-links">
        <a href="/" id="daily-link" className="not-active" onClick={getDaily}>
          Daily
        </a>{" "}
        |
        <a href="/" id="hourly-link" className="active">
          {" "}
          Hourly
        </a>
      </span>
      <div className=" row">
        <HourlyForecast data={forecast.hourly[1]} unit={props.unit} />
        <HourlyForecast data={forecast.hourly[2]} unit={props.unit} />
        <HourlyForecast data={forecast.hourly[3]} unit={props.unit} />
        <HourlyForecast data={forecast.hourly[4]} unit={props.unit} />
        <HourlyForecast data={forecast.hourly[5]} unit={props.unit} />
        
      </div>
      </div>
    );
  } else {
    let apiKey = "35e83019a6881c6f862e82a156e4c5fc";
    let lat = props.data.lat;
    let lon = props.data.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&
    exclude=minutely&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(getForecast);

    return "";
  }
  }
}
