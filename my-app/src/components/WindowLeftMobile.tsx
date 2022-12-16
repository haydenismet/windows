import React from "react";

function WindowLeftMobile(props: any) {
  return (
    <>
      <div className="mobile-select">
        <select onChange={props.handleNavClick}>
          <option value="about" disabled selected>
            Please select
          </option>
          <option
            value="about"
            selected={props.navClick ? props.navClick === "about" : true}
          >
            About
          </option>
          <option value="experience" selected={props.navClick === "experience"}>
            Experience
          </option>
          <option value="tools" selected={props.navClick === "tools"}>
            Tools
          </option>
          <option
            value="development"
            selected={props.navClick === "development"}
          >
            Development
          </option>
          <option
            value="userinterface"
            selected={props.navClick === "userinterface"}
          >
            User Interface
          </option>
          <option value="design" selected={props.navClick === "design"}>
            Design
          </option>
          <option value="learning" selected={props.navClick === "learning"}>
            Learning
          </option>
          <option value="listening" selected={props.navClick === "listening"}>
            Listening to
          </option>
          <option value="likes" selected={props.navClick === "likes"}>
            Likes
          </option>
          <option value="contact" selected={props.navClick === "contact"}>
            Contact
          </option>
        </select>
      </div>
    </>
  );
}

export default WindowLeftMobile;
