import React from "react";

import WindowLeftDesktop from "./WindowLeftDesktop";
import WindowLeftMobile from "./WindowLeftMobile";

function WindowLeft() {
  return (
    <>
      <div className="left-inner-content">
        <WindowLeftDesktop />
        <WindowLeftMobile />
        <div className="contact-container">
          <button>Github</button>
          <button>LinkedIn</button>
          <button>PDF Export</button>
        </div>
      </div>
    </>
  );
}

export default WindowLeft;
