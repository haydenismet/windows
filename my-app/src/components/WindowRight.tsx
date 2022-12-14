import React from "react";
import About from "./portfolio_components/About";
function WindowRight(props: any) {
  console.log(props.navClick);
  return (
    <>
      <div className="right-inner-content">
        <About />
      </div>
    </>
  );
}

export default WindowRight;
