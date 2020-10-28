import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Search from "./Search";
import Footer from "./Footer";


export default function App() {
  const [backgroundColor, setBackgroundColor] = useState("linear-gradient(-225deg, #407088 0%, #5d54a4 90%)");
  const [textColor, setTextColor] = useState("");
  const [key, setKey] = useState(0);

  const colorArray = [
    {
      background: "linear-gradient(120deg, #f6d365 0%, #fda085 100%)",
      text: "#d92027",
    },
    {
      background: "linear-gradient(-60deg, #ff5858 0%, #f09819 100%)",
      text: "blue",
    },
    {
      background: "linear-gradient(to top, #0ba360 0%, #3cba92 100%)",
      text: "purple",
    },
    {
      background: "linear-gradient(-225deg, #407088 0%, #5d54a4 90%)",
      text: "black",
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
    console.log("index", index);
    setBackgroundColor(colorArray[index].background);
    setTextColor(colorArray[index].text);
    setKey(index);
  }
  return (
    <div className="App background-image" >
      
      <div className="app-wrapper">
       <button type="button" className="btn btn-dark theme-button" onClick={changeBackground}>Theme</button>
        <div className="weather-app" style={{backgroundImage: backgroundColor, color: textColor}}>
          <Search defaultCity="Tokyo" color={textColor} />
        </div>
        <Footer />
      </div>
    </div>
  );
}

// background image