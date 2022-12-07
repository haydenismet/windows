import React from "react";
import WindowHeader from "./WindowHeader";
import "98.css";
import "./App.css";
import WindowLeft from "./WindowLeft";
import WindowRight from "./WindowRight";
import WindowFooter from "./WindowFooter";

function Window() {
  return (
    <>
      <div className="window">
        <WindowHeader />
        <div className="window-body">
          <div className="content-container">
            <WindowLeft />
            <WindowRight />
          </div>
        </div>
        <WindowFooter />
      </div>
    </>
  );
}

export default Window;
