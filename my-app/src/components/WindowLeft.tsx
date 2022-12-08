import React from "react";

import WindowLeftDesktop from "./WindowLeftDesktop";
import WindowLeftMobile from "./WindowLeftMobile";

function WindowLeft() {
  return (
    <>
      <div className="left-inner-content">
        <WindowLeftDesktop />
        <WindowLeftMobile />
      </div>
    </>
  );
}

export default WindowLeft;
