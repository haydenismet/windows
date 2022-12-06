import React from "react";
import logo from "./logo.svg";
import "98.css";
import "./App.css";

function App() {
  return (
    <>
      <div className="outer-container">
        <div className="inner-container">
          <div className="window">
            <div className="title-bar">
              <div className="title-bar-text">Portfolio Installation</div>
              <div className="title-bar-controls">
                <button aria-label="Close"></button>
              </div>
            </div>
            <div className="window-body">
              <p>There's so much room for activities!</p>
              <button>Click me</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
