import React from "react";

function getTime(date: Date): string {
  let hours: number = date.getHours();
  let minutes: number = date.getMinutes();
  return `${hours}:${minutes}`;
}

function WindowFooter() {
  return (
    <>
      <div className="status-bar">
        <p className="status-bar-field">{window.clientInformation.userAgent}</p>
        <p className="status-bar-field">{getTime(new Date())}</p>
      </div>
    </>
  );
}

export default WindowFooter;
