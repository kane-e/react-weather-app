import React from "react";
import "./DateTime.css";

export default function DateTime(props) {
  function formatHours() {
    let hours = props.date.getHours();
    if (hours < 10) {
      hours = `0${hours}`;
    }
    let minutes = props.date.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }

    return props.date.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
  }

  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let day = days[props.date.getDay()];
  let months = [
    "Jan",
    "Feb",
    "March",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let month = months[props.date.getMonth()];
  let number = props.date.getDate();
  

  return (
    <div className="DateTime">
      <h3>
        {day} {month} {number}, {formatHours()}
      </h3>
    </div>
  );
}
