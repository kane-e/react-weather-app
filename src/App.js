import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Search from "./Search";
import ForecastLinks from "./ForecastLinks";
import HourlyForecast from "./HourlyForecast";
import DailyForecast from "./DailyForecast";
import Header from "./Header";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="app-wrapper">
        <div className="weather-app">
          <Header />
          <hr />
          <Search defaultCity="New York" />
          <ForecastLinks />
          <HourlyForecast />
          <DailyForecast />
        </div>
        <Footer />
      </div>
    </div>
  );
}
