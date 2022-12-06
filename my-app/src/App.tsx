import React from "react";
import logo from "./logo.svg";
import "98.css";
import "./App.css";

function App() {
  return (
    <>
      <div className="outer-container">
        <div className="inner-container">
          <div className="window">
            <div className="title-bar">
              <div className="title-bar-text">Portfolio Installation</div>
              <div className="title-bar-controls">
                <button aria-label="Close"></button>
              </div>
            </div>
            <div className="window-body">
              <div className="content-container">
                <div className="left-inner-content">
                  <fieldset>
                    <legend>Today's mood</legend>
                    <div className="field-row">
                      <input
                        id="radio13"
                        type="radio"
                        name="fieldset-example2"
                      />
                      <label htmlFor="radio13">Who am I</label>
                    </div>
                    <div className="field-row">
                      <input
                        id="radio14"
                        type="radio"
                        name="fieldset-example2"
                      />
                      <label htmlFor="radio14">Curriculum Vitae</label>
                    </div>
                    <div className="field-row">
                      <input
                        id="radio15"
                        type="radio"
                        name="fieldset-example2"
                      />
                      <label htmlFor="radio15">Development</label>
                    </div>
                    <div className="field-row">
                      <input
                        id="radio16"
                        type="radio"
                        name="fieldset-example2"
                      />
                      <label htmlFor="radio16">Design</label>
                    </div>
                  </fieldset>
                </div>
                <div className="right-inner-content">Hello</div>
              </div>
            </div>
            <div className="status-bar">
              <p className="status-bar-field">6 object(s)</p>
              <p className="status-bar-field">10:32AM</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
