import React from "react";

function ClosePortfolioModal(props: any) {
  //console.log("closePortfolioModal, click = ", props.closeClick);
  return (
    <>
      <div className="close-container-modal">
        <div className="window">
          <div className="title-bar">
            <div className="title-bar-text">No, I don't want you to leave.</div>
            <div className="title-bar-controls">
              <button
                aria-label="Close"
                onClick={props.handleCloseClick}
              ></button>
            </div>
          </div>
          <div className="window-body">
            <p>You're staying here.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ClosePortfolioModal;
