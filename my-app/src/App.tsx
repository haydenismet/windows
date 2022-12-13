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

  return (
    <>
      <div className="outer-container">
        <div className="inner-container">
          <Window
            handleCloseClick={handleCloseClick}
            closeClick={closeClick}
            setCloseClick={setCloseClick}
          />
        </div>
      </div>
    </>
  );
}

export default App;
