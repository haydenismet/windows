import React from "react";
import Contact from "./portfolio_components/Contact";
import About from "./portfolio_components/About";
import Design from "./portfolio_components/Design";
import Development from "./portfolio_components/Development";
import Experience from "./portfolio_components/Experience";
import Learning from "./portfolio_components/Learning";
import Likes from "./portfolio_components/Likes";
import Listening from "./portfolio_components/Listening";
import Tools from "./portfolio_components/Tools";
import UserInterface from "./portfolio_components/UserInterface";
import Welcome from "./portfolio_components/Welcome";
function WindowRight(props: any) {
  function renderPortfolio(navigationSelected: string): React.ReactNode {
    switch (navigationSelected) {
      case "about":
        return <About />;
      case "experience":
        return <Experience />;
      case "tools":
        return <Tools />;
      case "development":
        return <Development />;
      case "userinterface":
        return <UserInterface />;
      case "design":
        return <Design />;
      case "learning":
        return <Learning />;
      case "listening":
        return <Listening />;
      case "likes":
        return <Likes />;
      case "contact":
        return <Contact />;
      default:
        return <Welcome />;
    }
  }
  return (
    <>
      <div className="right-inner-content">
        {props.navClick ? renderPortfolio(props.navClick) : <About />}
      </div>
    </>
  );
}

export default WindowRight;
