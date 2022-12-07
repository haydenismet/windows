import React from "react";
import "98.css";
import "./App.css";

function WindowHeader() {
  return (
    <>
      <div className="title-bar">
        <div className="title-bar-text">Portfolio Installation</div>
        <div className="title-bar-controls">
          <button aria-label="Close"></button>
        </div>
      </div>
    </>
  );
}

export default WindowHeader;
