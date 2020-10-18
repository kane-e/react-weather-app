import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Search from "./Search";


import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="app-wrapper">
        <div className="weather-app">
          <Search defaultCity="Tokyo" />
        </div>
        <Footer />
      </div>
    </div>
  );
}
