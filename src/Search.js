import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div className="Search">
      <form className="search-form">
        <input
          type="text"
          placeholder="Enter City or ZIP, CC"
          spellCheck="false"
          autoComplete="off"
          autoFocus="on"
          id="search-input"
        />
        <input type="submit" value="Search" id="submit" />

        <button
          id="location-button"
          className="location-button"
          data-toggle="tooltip"
          data-placement="top"
          title="My Location"
        >
          <i className="fas fa-map-marker-alt"></i>
        </button>
        <button
          id="random-button"
          data-toggle="tooltip"
          data-placement="top"
          title="Random City"
        >
          <i className="fas fa-globe"></i>
        </button>
      </form>

      <h1 id="city">Tokyo, JP</h1>
    </div>
  );
}
