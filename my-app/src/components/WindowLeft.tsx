import React from "react";

import WindowLeftDesktop from "./WindowLeftDesktop";
import WindowLeftMobile from "./WindowLeftMobile";
import Contact from "./Contact";
function WindowLeft(props: any) {
  return (
    <>
      <div className="left-inner-content">
        <WindowLeftDesktop handleNavClick={props.handleNavClick} />
        <WindowLeftMobile />
        <Contact />
      </div>
    </>
  );
}

export default WindowLeft;
