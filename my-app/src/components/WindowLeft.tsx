import React from "react";

import WindowLeftDesktop from "./WindowLeftDesktop";
import WindowLeftMobile from "./WindowLeftMobile";
import Contact from "./Contact";
function WindowLeft() {
  return (
    <>
      <div className="left-inner-content">
        <WindowLeftDesktop />
        <WindowLeftMobile />
        <Contact />
      </div>
    </>
  );
}

export default WindowLeft;
