import React, { useState } from "react";
import "./Search.css";
import Conditions from "./Conditions";
import DateTime from "./DateTime";
import Forecast from "./Forecast";
import axios from "axios";
import ErrorMessage from "./ErrorMessage";
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import LocationButton from "./LocationButton";
import RandomButton from "./RandomButton";



export default function Search(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weather, setWeather] = useState({ ready: false });
  const [unit, setUnit] = useState("fahrenheit");
  const [preview, setPreview] = useState("daily");
  const [dailyHigh, setDailyHigh] = useState(null);
  const [dailyLow, setDailyLow] = useState(null);
  const [error, setError] = useState(false);
  const [alert, setAlert] = useState(false);
  const [message, setMessage] = useState(false);
  
  

  function showWeather(response) {
    setWeather({
      ready: true,
      city: response.data.name,
      country: response.data.sys.country,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].main,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      lat: response.data.coord.lat,
      lon: response.data.coord.lon,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    searchCity();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }
  function searchCity() {
    let apiKey = "35e83019a6881c6f862e82a156e4c5fc";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(showWeather).catch(err => { 
      setError(true)
    }
    )
  }
  
  function getPosition(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(searchPosition);
  }
  function searchPosition(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let apiKey = "35e83019a6881c6f862e82a156e4c5fc";
    let units = "imperial";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}&appid=${apiKey}`;
    axios.get(apiUrl).then(showWeather);
  }
  function searchRandom(event) {
    event.preventDefault();
    let cities = [
      "London",
      "New York",
      "Sao Paulo",
      "Moscow",
      "Lima",
      "Madrid",
      "Seoul",
      "Jakarta",
      "Cairo",
    ];

    let randomCity = Math.floor(Math.random() * 10);
    let city = (randomCity, cities[randomCity]);

    let apiKey = "35e83019a6881c6f862e82a156e4c5fc";
    let units = "imperial";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(showWeather);
  }

  //custom tooltips
  function showTooltip(event){
    setAlert(true);
  }
  function hideTooltip(event){
    setAlert(false);
  }
  function showMessage(event){
    setMessage(true);
  }
  function hideMessage(event){
    setMessage(false);
  }

  //set secondary text color
  function setColor(){
    if(props.color==="#810000"){
      return "#0e918c";
    }if (props.color==="purple"){
      return "#b80d57"
    } if (props.color ==="#2a014b"){
      return "#4ef037"
    }if (props.color ==="white"){
      return "#90007f"
    }
  }
  

  if (weather.ready && error === false) {
    return (
      <div className="Search">
        <DateTime date={weather.date} color={props.color}/>
        <hr style={{borderColor: setColor()}}/>
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

          <input type="submit" style={{backgroundColor: setColor()}} value="Search" id="submit" />
          
          <button
            id="location-button"
            className="location-button"
            onClick={getPosition} onMouseEnter = {showTooltip} onMouseLeave= {hideTooltip}
          >
            { alert ? <LocationButton /> : null }
            <i className="fas fa-map-marker-alt"></i>
          </button>
  
          <button id="random-button" onClick={searchRandom} onMouseEnter={showMessage} onMouseLeave= {hideMessage} >
            { message ? <RandomButton /> : null}
            <i className="fas fa-globe"></i>
          </button>
           
        </form>
        <Conditions
          data={weather}
          unit={unit}
          setUnit={setUnit}
          dailyHigh={dailyHigh}
          dailyLow={dailyLow}
          color={props.color}
        />
        <Forecast
          data={weather}
          unit={unit}
          dailyHigh={dailyHigh}
          setDailyHigh={setDailyHigh}
          dailyLow={dailyLow}
          setDailyLow={setDailyLow}
          preview = {preview}
          setPreview= {setPreview}
          color={props.color}
        />
        
      </div>
    );
  }  
  if (error === true){
      return <ErrorMessage />
    } 
  else {
    searchCity();
    return (
      <Loader
         type="Watch"
         color= "#810000"
         height={100}
         width={100}
         className="Loader"
 
      />
    )
  }
  }
