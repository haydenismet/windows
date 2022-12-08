import React from "react";
import WindowHeader from "./WindowHeader";
import WindowFooter from "./WindowFooter";
import WindowLeft from "./WindowLeft";
import WindowRight from "./WindowRight";

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
