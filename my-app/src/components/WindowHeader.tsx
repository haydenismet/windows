import React from "react";
import ClosePortfolio from "./ClosePortfolio";
function WindowHeader(props: any) {
  return props.closeClick !== "close" ? (
    <>
      <div className="title-bar">
        <div className="title-bar-text">Portfolio Installation</div>
        <div className="title-bar-controls">
          <button
            data-window="close"
            aria-label="Close"
            onClick={props.handleCloseClick}
          ></button>
        </div>
      </div>
    </>
  ) : (
    <ClosePortfolio />
  );
}

export default WindowHeader;
