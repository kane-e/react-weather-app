import React, { useState } from "react";
import "./Search.css";
import Conditions from "./Conditions";
import axios from "axios";

export default function Search(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weather, setWeather] = useState({ ready: false });

  function showWeather(response) {
    console.log(response.data);
    setWeather({
      ready: true,
      city: response.data.name,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: 9 / 28 / 20,
      description: response.data.weather[0].main,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
    });
  }
  function updateCity(event) {
    setCity(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    let units = "imperial";
    let apiKey = "0d7e16e444bab64875c9066cabbd2b5bd94";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(showWeather);
  }

  if (weather.ready) {
    return (
      <div className="Search">
        <form className="search-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter City or ZIP, CC"
            spellCheck="false"
            autoComplete="off"
            autoFocus="on"
            id="search-input"
            onChange={updateCity}
          />
          <input type="submit" value="Search" id="submit" />

          <button
            id="location-button"
            className="location-button"
            data-toggle="tooltip"
            data-placement="top"
            title="My Location"
          >
            <i className="fas fa-map-marker-alt"></i>
          </button>
          <button
            id="random-button"
            data-toggle="tooltip"
            data-placement="top"
            title="Random City"
          >
            <i className="fas fa-globe"></i>
          </button>
        </form>
        <Conditions data={weather} />
      </div>
    );
  } else {
    let units = "imperial";
    let apiKey = "e16e444bab64875c9066cabbd2b5bd94";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(showWeather);
    return "Loading";
  }
}
