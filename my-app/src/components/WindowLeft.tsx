import React from "react";

import WindowLeftDesktop from "./WindowLeftDesktop";
import WindowLeftMobile from "./WindowLeftMobile";
import Contact from "./Contact";
function WindowLeft(props: any) {
  return (
    <>
      <div className="left-inner-content">
        <WindowLeftDesktop
          handleNavClick={props.handleNavClick}
          navClick={props.navClick}
        />
        <WindowLeftMobile
          handleNavClick={props.handleNavClick}
          navClick={props.navClick}
        />
        <Contact />
      </div>
    </>
  );
}

export default WindowLeft;
