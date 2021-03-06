import React, { useState } from "react";
import "./Forecast.css";
import axios from "axios";
import DailyForecast from "./DailyForecast";
import HourlyForecast from "./HourlyForecast";


export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);
  
  // retrieve daily forecast and set current day high and low temperature to send back to conditions.js
  function getForecast(response) {
    setForecast(response.data);
    props.setDailyHigh(response.data.daily[0].temp.max);
    props.setDailyLow(response.data.daily[0].temp.min);
    setLoaded(true);
  }
  // make hourly forecast visible
  function getHourly(event){
    event.preventDefault();
    return props.setPreview("hourly")
  }
  // make daily forecast visible
  function getDaily(event){
    event.preventDefault();
    return props.setPreview("daily");
  }
  // set secondary text color
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


  if (loaded && forecast.lat === props.data.lat && forecast.lon === props.data.lon && props.preview === "daily" ) {
    return (
      <div className= "Forecast">
      <span className="forecast-links">
        <a href="/" id="daily-link" className="active">
          Daily
        </a>{" "}
        |
        <a href="/" id="hourly-link" className="not-active" onClick={getHourly} style={{color: setColor()}}>
          {" "}
          Hourly
        </a>
      </span>
      <div className=" row">
        <DailyForecast data={forecast.daily[1]} unit={props.unit} color={props.color} />
        <DailyForecast data={forecast.daily[2]} unit={props.unit} color={props.color} />
        <DailyForecast data={forecast.daily[3]} unit={props.unit} color={props.color}/>
        <DailyForecast data={forecast.daily[4]} unit={props.unit} color={props.color}/>
        <DailyForecast data={forecast.daily[5]} unit={props.unit} color={props.color}/>
        
      </div>
      </div>
    );
  } else {
    if (loaded && forecast.lat === props.data.lat && forecast.lon === props.data.lon && props.preview === "hourly" ) {
    return (
      <div className= "Forecast">
      <span className="forecast-links">
        <a href="/" id="daily-link" className="not-active" style={{color: setColor()}} onClick={getDaily}>
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
