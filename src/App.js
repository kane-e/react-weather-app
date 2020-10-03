import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Search from "./Search";
import ForecastLinks from "./ForecastLinks";
import HourlyForecast from "./HourlyForecast";

import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="app-wrapper">
        <div className="weather-app">
          <Search defaultCity="New York" />
          <ForecastLinks />
          <HourlyForecast />
        </div>
        <Footer />
      </div>
    </div>
  );
}
