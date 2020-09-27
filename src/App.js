import React from "react";
import axios from "axios";
import ReactAnimatedWeather from "react-animated-weather";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello World</h1>
        <ReactAnimatedWeather icon="CLEAR_DAY" />
      </header>
    </div>
  );
}

export default App;
