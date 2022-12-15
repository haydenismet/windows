import React, { ReactElement, useState } from "react";
import Window from "./components/Window";
import "98.css";
import "./styles/App.css";
import ClosePortfolio from "./components/ClosePortfolio";

function App() {
  const [closeClick, setCloseClick] = useState<string>("");
  const [navClick, setNavClick] = useState<string>("");
  function handleCloseClick(e: any): void {
    setCloseClick(e.target.dataset.window);
  }

  function handleNavClick(e: any) {
    if (e.target.dataset.portfolio) {
      setNavClick(e.target.dataset.portfolio);
    } else {
      setNavClick(e.target.value);
    }
  }
  console.log("navclick is", navClick);
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
