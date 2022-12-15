import React from "react";

function WindowLeftDesktop(props: any) {
  return (
    <>
      <div className="desktop-radio">
        <fieldset id="desktop-radio-options">
          <legend> Select one</legend>
          <div className="field-row">
            <input
              id="radio-about"
              type="radio"
              data-portfolio="about"
              name="portfolio-checklist"
              onClick={props.handleNavClick}
              checked={props.navClick === "about"}
            />
            <label htmlFor="radio-about">About</label>
          </div>
          <div className="field-row">
            <input
              id="radio-experience"
              type="radio"
              data-portfolio="experience"
              name="portfolio-checklist"
              onClick={props.handleNavClick}
              checked={props.navClick === "experience"}
            />
            <label htmlFor="radio-experience">Experience</label>
          </div>
          <div className="field-row">
            <input
              id="radio-tools"
              type="radio"
              data-portfolio="tools"
              name="portfolio-checklist"
              onClick={props.handleNavClick}
              checked={props.navClick === "tools"}
            />
            <label htmlFor="radio-tools">Tools</label>
          </div>
          <div className="field-row">
            <input
              id="radio-development"
              type="radio"
              data-portfolio="development"
              name="portfolio-checklist"
              onClick={props.handleNavClick}
              checked={props.navClick === "development"}
            />
            <label htmlFor="radio-development">Development</label>
          </div>
          <div className="field-row">
            <input
              id="radio-userinterface"
              type="radio"
              data-portfolio="userinterface"
              name="portfolio-checklist"
              onClick={props.handleNavClick}
              checked={props.navClick === "userinterface"}
            />
            <label htmlFor="radio-userinterface">User Interface</label>
          </div>
          <div className="field-row">
            <input
              id="radio-design"
              type="radio"
              data-portfolio="design"
              name="portfolio-checklist"
              onClick={props.handleNavClick}
              checked={props.navClick === "design"}
            />
            <label htmlFor="radio-design">Design</label>
          </div>
          <div className="field-row">
            <input
              id="radio-learning"
              type="radio"
              data-portfolio="learning"
              name="portfolio-checklist"
              onClick={props.handleNavClick}
              checked={props.navClick === "learning"}
            />
            <label htmlFor="radio-learning">Learning</label>
          </div>
          <div className="field-row">
            <input
              id="radio-listening"
              type="radio"
              data-portfolio="listening"
              name="portfolio-checklist"
              onClick={props.handleNavClick}
              checked={props.navClick === "listening"}
            />
            <label htmlFor="radio-listening">Listening to</label>
          </div>
          <div className="field-row">
            <input
              id="radio-likes"
              type="radio"
              data-portfolio="likes"
              name="portfolio-checklist"
              onClick={props.handleNavClick}
              checked={props.navClick === "likes"}
            />
            <label htmlFor="radio-likes">Likes</label>
          </div>
        </fieldset>
      </div>
    </>
  );
}

export default WindowLeftDesktop;
