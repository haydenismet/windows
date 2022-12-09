import React from "react";
import Window from "./components/Window";
import "98.css";
import "./styles/App.css";

function getTime(date: Date): void {
  let hours: number = date.getHours();
  console.log(typeof hours, "hour of day ", hours);
}

getTime(new Date());

function App() {
  return (
    <>
      <div className="outer-container">
        <div className="inner-container">
          <Window />
        </div>
      </div>
    </>
  );
}

export default App;
