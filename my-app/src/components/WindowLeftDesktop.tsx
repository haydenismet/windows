import React from "react";

function WindowLeftDesktop() {
  return (
    <>
      <div className="desktop-radio">
        <fieldset>
          <legend> Select one</legend>
          <div className="field-row">
            <input
              id="radio1"
              type="radio"
              data-portfolio="experience"
              name="portfolio-checklist"
            />
            <label htmlFor="radio1">Experience</label>
          </div>
          <div className="field-row">
            <input
              id="radio2"
              type="radio"
              data-portfolio="tools"
              name="portfolio-checklist"
            />
            <label htmlFor="radio2">Tools</label>
          </div>
          <div className="field-row">
            <input
              id="radio3"
              type="radio"
              data-portfolio="development"
              name="portfolio-checklist"
            />
            <label htmlFor="radio3">Development</label>
          </div>
          <div className="field-row">
            <input
              id="radio4"
              type="radio"
              data-portfolio="userinterface"
              name="portfolio-checklist"
            />
            <label htmlFor="radio4">User Interface</label>
          </div>
          <div className="field-row">
            <input
              id="radio5"
              type="radio"
              data-portfolio="design"
              name="portfolio-checklist"
            />
            <label htmlFor="radio5">Design</label>
          </div>
          <div className="field-row">
            <input
              id="radio6"
              type="radio"
              data-portfolio="learning"
              name="portfolio-checklist"
            />
            <label htmlFor="radio6">Learning</label>
          </div>
          <div className="field-row">
            <input
              id="radio7"
              type="radio"
              data-portfolio="listening"
              name="portfolio-checklist"
            />
            <label htmlFor="radio7">Listening to</label>
          </div>
          <div className="field-row">
            <input
              id="radio8"
              type="radio"
              data-portfolio="likes"
              name="portfolio-checklist"
            />
            <label htmlFor="radio8">Likes</label>
          </div>
        </fieldset>
      </div>
    </>
  );
}

export default WindowLeftDesktop;
