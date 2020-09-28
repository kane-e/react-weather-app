import React from "react";
import "./City.css";

export default function City(props) {
  return (
    <div className="City">
      <h1 id="city">{props.name}</h1>
    </div>
  );
}
