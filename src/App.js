import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Search from "./Search";
import palms from "./images/palms.jpg";
import mountains from "./images/mountains.jpg"
 


import Footer from "./Footer";


export default function App() {
  const [background, setBackground] = useState(`url(${mountains})`);

  function changeBackground(event){
    setBackground(`url(${palms})`);
  }
  return (
    <div className="App background-image" style={{backgroundImage: background}}>
      <button type="button" className="btn btn-dark theme-button" onClick={changeBackground}>Theme</button>
      <div className="app-wrapper">
        <div className="weather-app">
          <Search defaultCity="Tokyo" />
        </div>
        <Footer />
      </div>
    </div>
  );
}

// background image