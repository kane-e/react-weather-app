import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Search from "./Search";
import Footer from "./Footer";


export default function App() {
  const [backgroundColor, setBackgroundColor] = useState("linear-gradient(-225deg, #407088 0%, #5d54a4 90%)");
  const [textColor, setTextColor] = useState("");
  const [key, setKey] = useState(0);

  //color combinations
  const colorArray = [
    {
      background: "linear-gradient(-225deg, #407088 0%, #5d54a4 90%)",
      text: "black",
    },
    {
      background: "linear-gradient(-60deg, #ff5858 0%, #f09819 100%)",
      text: "#810000",
    },
    {
      background: "linear-gradient(to top, #0ba360 0%, #3cba92 100%)",
      text: "purple",
    },
    {
      background: "linear-gradient(to bottom, #323232 0%, #3F3F3F 40%, #1C1C1C 150%), linear-gradient(to top, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.25) 200%)",
      text: "white",
    },
    {
      background: "linear-gradient(to top, red,orange,yellow,green,blue,indigo,violet)",
      text: "#2a014b",
    }
  ];

  function changeBackground(event) {
    event.preventDefault();
    let index = key;
    if (index + 1 === colorArray.length) {
      index = 0;
    } else {
      index = key + 1;
    }
    setBackgroundColor(colorArray[index].background);
    setTextColor(colorArray[index].text);
    setKey(index);
  }
  return (
    <div className="App" >
      
      <div className="app-wrapper">
       <button type="button" className="btn btn-dark theme-button" onClick={changeBackground}><i className="fas fa-paint-brush"></i></button>
        <div className="weather-app" style={{backgroundImage: backgroundColor, color: textColor}}>
          <Search defaultCity="Tokyo" color={textColor} />
        </div>
      </div>
       <Footer />
    </div>
  );
}

