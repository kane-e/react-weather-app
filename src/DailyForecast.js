import React from "react";
import "./DailyForecast.css";

export default function DailyForecast() {
  return (
    <div className="DailyForecast">
      <div className="row forecast text-center">
        <div className="col col-xs-1">
          <div>Mon</div>
          <div>
            {" "}
            <span className="forecast-high">80</span>°
          </div>
          <div>
            <img src="images/clouds2.jpg" alt="" />
          </div>
          <div>
            <span className="forecast-low">60</span>°
          </div>
        </div>
        <div className="col col-xs-1">
          <div>Mon</div>
          <div>
            {" "}
            <span className="forecast-high">80</span>°
          </div>
          <div>
            <img src="images/clouds2.jpg" alt="" />
          </div>
          <div>
            <span className="forecast-low">60</span>°
          </div>
        </div>
        <div className="col col-xs-1">
          <div>Mon</div>
          <div>
            {" "}
            <span className="forecast-high">80</span>°
          </div>
          <div>
            <img src="images/clouds2.jpg" alt="" />
          </div>
          <div>
            <span className="forecast-low">60</span>°
          </div>
        </div>
        <div className="col col-xs-1">
          <div>Mon</div>
          <div>
            {" "}
            <span className="forecast-high">80</span>°
          </div>
          <div>
            <img src="images/clouds2.jpg" alt="" />
          </div>
          <div>
            <span className="forecast-low">60</span>°
          </div>
        </div>
        <div className="col col-xs-1">
          <div>Mon</div>
          <div>
            {" "}
            <span className="forecast-high">80</span>°
          </div>
          <div>
            <img src="images/clouds2.jpg" alt="" />
          </div>
          <div>
            <span className="forecast-low">60</span>°
          </div>
        </div>
      </div>
    </div>
  );
}
