import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Search from "./Search";
import Temperature from "./Temperature";
import Conditions from "./Conditions";
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
          <div className="error-wrapper">
            <Search />
            <City name="Tokyo, JP" />
            <Temperature value={66} />
            <Conditions
              description="Cloudy"
              low={60}
              high={75}
              wind={10}
              humidity={4}
            />
            <ForecastLinks />
            <HourlyForecast />
            <DailyForecast />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
