import React from "react";
import "./ErrorMessage.css";

export default function ErrorMessage() {
   
    function refresh(){
         window.location.reload(false);
    }
    
    return(
        <div className="ErrorMessage">
           Couldn't find that!
           Click on the monkey to search again.
           <button onClick={refresh} id="reload"> 🙈</button>
        </div>
    )
    
}