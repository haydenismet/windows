import React from "react";
import WindowHeader from "./WindowHeader";
import WindowFooter from "./WindowFooter";
import WindowLeft from "./WindowLeft";
import WindowRight from "./WindowRight";
import ClosePortfolioModal from "./ClosePortfolioModal";

function Window(props: any) {
  return (
    <>
      <div className="window">
        <WindowHeader
          closeClick={props.closeClick}
          handleCloseClick={props.handleCloseClick}
          setCloseClick={props.setCloseClick}
        />
        <div className="window-body">
          <div className="content-container">
            <WindowLeft
              handleNavClick={props.handleNavClick}
              navClick={props.navClick}
            />
            <WindowRight navClick={props.navClick} />
          </div>
        </div>
        <WindowFooter />
      </div>

      {props.closeClick === "close" ? (
        <ClosePortfolioModal
          closeClick={props.closeClick}
          handleCloseClick={props.handleCloseClick}
          setCloseClick={props.setCloseClick}
        />
      ) : null}
    </>
  );
}

export default Window;
