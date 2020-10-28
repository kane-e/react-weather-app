import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Search from "./Search";
import Footer from "./Footer";


export default function App() {
  const [backgroundColor, setBackgroundColor] = useState("linear-gradient(-225deg, #407088 0%, #5d54a4 90%)");
  const [textColor, setTextColor] = useState("");
  const [key, setKey] = useState("")

  const colorArray = [
    {
      background: "linear-gradient(to right, #434343 0%, black 100%)",
      text: "pink"
    },
    {
      background: "linear-gradient(-60deg, #ff5858 0%, #f09819 100%)",
      text: "blue"
    },
    {
      background: "linear-gradient(to top, #0ba360 0%, #3cba92 100%)",
      text: "purple"
    }
  ]

  function changeBackground(event){
    event.preventDefault();
    colorArray.map((object, index) => {
        return (
        setBackgroundColor(colorArray.background),
        setTextColor(colorArray.text),
        setKey(colorArray.index)
        )
     }
     
     );

  }
  return (
    <div className="App background-image" >
      
      <div className="app-wrapper">
       <button type="button" className="btn btn-dark theme-button" onClick={changeBackground}>Theme</button>
        <div className="weather-app" style={{backgroundImage: backgroundColor, color: textColor}}>
          <Search defaultCity="Tokyo" />
        </div>
        <Footer />
      </div>
    </div>
  );
}

// background image