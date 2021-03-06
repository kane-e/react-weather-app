import React, {useEffect, useState} from "react";
import "./DateTime.css";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default function DateTime(props) {
  const [greeting, setGreeting] = useState(true);
  
 // change greeting to date/time
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
  // set secondary text color
  function setColor(){
    if(props.color==="#810000"){
      return "#0e918c";
    } if (props.color==="purple"){
      return "#b80d57"
    } if (props.color ==="#2a014b"){
      return "#4ef037"
    }if (props.color ==="white"){
      return "#90007f"
    }
  }
  

if(greeting === true){
  return(
    
    <div className="DateTime">
      <ReactCSSTransitionGroup
        transitionName="greeting"
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnter={false}
        transitionLeaveTimeout={300}>
      <h3 key="greeting" style={{color: setColor()}}>
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
        transitionEnterTimeout={500}
        transitionLeave={false}>
      <h3 key="date" style={{color: setColor()}}>
        {day} {month} {number}, {formatHours()}
      </h3>
      </ReactCSSTransitionGroup>
    </div>
  );
}
   
}
