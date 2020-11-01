import React from "react";

export default function MaxMin(props){
    if(props.unit === "fahrenheit"){
        return(
      <div className="MaxMin row conditions ">
        <div className="col-6 low">
          <i className="fas fa-thermometer-empty"></i>
          <span id="current-low"> {Math.round(props.dailyLow)}</span>°
        </div>
        <div className="col-6 high">
          <i className="fas fa-thermometer-three-quarters"></i>
          <span id="current-high"> {Math.round(props.dailyHigh)}</span>°
        </div>
      </div>
      )
    } else{
        return (
      <div className="MaxMin row conditions ">
        <div className="col-6 low">
          <i className="fas fa-thermometer-empty"></i>
          <span id="current-low"> {Math.round((props.dailyLow-32) * (5 / 9))}</span>°
        </div>
        <div className="col-6 high">
          <i className="fas fa-thermometer-three-quarters"></i>
          <span id="current-high"> {Math.round((props.dailyHigh-32) * (5/ 9))}</span>°
        </div>
      </div>
     
        )
    }
    
}
