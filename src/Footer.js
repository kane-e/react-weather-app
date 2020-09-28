import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div id="code-by" className="Footer">
      <a
        href="https://github.com/kane-e/react-weather-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Open-source code
      </a>{" "}
      by Emma Kane
      <span role="img" aria-label="woman">
        🙋‍♀️
      </span>
    </div>
  );
}
