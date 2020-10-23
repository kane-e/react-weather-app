import React, {useEffect, useState} from "react";
import "./DateTime.css";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default function DateTime(props) {
  const [greeting, setGreeting] = useState(true);
  

  useEffect(() => {
    const timer = setTimeout(() => {
      setGreeting(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  
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

  
  function displayGreeting() {
    let hours = props.date.getHours();
    if (hours < 12) {
      return "Good Morning";
    }
    if (hours >= 12 && hours <= 16) {
       return "Good Afternoon";
      }
    if (hours >= 17) {
        return "Good Evening";
      }
  }
  

if(greeting === true){
  return(
    
    <div className="DateTime">
      <ReactCSSTransitionGroup
        transitionName="example"
        transitionAppear={true}
        transitionAppearTimeout={300}
        transitionEnter={false}
        transitionLeaveTimeout={300}>
      <h3 key="greeting">
        {displayGreeting()}
      </h3>
      </ReactCSSTransitionGroup>
    </div>
  )

}else{
     return(
        <div className="DateTime">
      <ReactCSSTransitionGroup
        transitionName="fade"
        transitionEnterTimeout={300}
        transitionLeave={false}>
      <h3 key="date">
        {day} {month} {number}, {formatHours()}
      </h3>
      </ReactCSSTransitionGroup>
    </div>
  );
}
   
}
