import React, { ReactElement, useState } from "react";
import Window from "./components/Window";
import "98.css";
import "./styles/App.css";
import ClosePortfolio from "./components/ClosePortfolio";

function App() {
  const [closeClick, setCloseClick] = useState<string>("");
  function handleCloseClick(e: any): void {
    setCloseClick(e.target.dataset.window);
  }

  const [navClick, setNavClick] = useState<string>("");

  function handleNavClick(e: any) {
    setNavClick(e.target.dataset.portfolio);
  }

  console.log(navClick);

  return (
    <>
      <div className="outer-container">
        <div className="inner-container">
          <Window
            handleCloseClick={handleCloseClick}
            closeClick={closeClick}
            handleNavClick={handleNavClick}
            navClick={navClick}
          />
        </div>
      </div>
    </>
  );
}

export default App;
