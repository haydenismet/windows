import React from "react";

function getTime(): string {
  //let hours: number = date.getHours();
  //let minutes: number = date.getMinutes();
  const localTime: string = new Date().toLocaleTimeString("default", {
    hour: "2-digit",
    minute: "2-digit",
  });
  const hours: number = new Date().getHours();
  const suffix: string = hours >= 12 && hours <= 23 ? "PM" : "AM";
  return `${localTime} ${suffix}`;
}

function WindowFooter() {
  return (
    <>
      <div className="status-bar">
        <p className="status-bar-field">{window.clientInformation.userAgent}</p>
        <p className="status-bar-field">{getTime()}</p>
      </div>
    </>
  );
}

export default WindowFooter;
