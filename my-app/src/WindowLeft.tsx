import React from "react";
import "98.css";
import "./App.css";

function WindowLeft() {
  return (
    <>
      <div className="left-inner-content">
        <fieldset>
          <legend> Select one</legend>
          <div className="field-row">
            <input id="radio13" type="radio" name="fieldset-example2" checked />
            <label htmlFor="radio13">About</label>
          </div>
          <div className="field-row">
            <input id="radio14" type="radio" name="fieldset-example2" />
            <label htmlFor="radio14">Experience</label>
          </div>
          <div className="field-row">
            <input id="radio15" type="radio" name="fieldset-example2" />
            <label htmlFor="radio15">Tools</label>
          </div>
          <div className="field-row">
            <input id="radio16" type="radio" name="fieldset-example2" />
            <label htmlFor="radio16">Development</label>
          </div>
          <div className="field-row">
            <input id="radio16" type="radio" name="fieldset-example2" />
            <label htmlFor="radio16">User Interface</label>
          </div>
          <div className="field-row">
            <input id="radio16" type="radio" name="fieldset-example2" />
            <label htmlFor="radio16">Design</label>
          </div>
          <div className="field-row">
            <input id="radio16" type="radio" name="fieldset-example2" />
            <label htmlFor="radio16">Learning</label>
          </div>
          <div className="field-row">
            <input id="radio16" type="radio" name="fieldset-example2" />
            <label htmlFor="radio16">Listening to</label>
          </div>
          <div className="field-row">
            <input id="radio16" type="radio" name="fieldset-example2" />
            <label htmlFor="radio16">Likes</label>
          </div>
        </fieldset>
      </div>
    </>
  );
}

export default WindowLeft;
