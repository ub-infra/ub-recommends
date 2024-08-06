import React from "react";
import "./FindingMatches.css";

const FindingMatches = () => {
  return (
    <div className="matches-container">
      <p className="popup-title">We’re finding you best matches</p>
      <p className="popup-subtitle">Just a lil bit</p>

      <img
        src={'https://ubprodstorage.blob.core.windows.net/ubprodcontainer/static/challenge/H/L/gV8PVsCwK2iayfFbPtGV8.jpeg'}
        height={240}
        width={320}
        alt="searching..."
        className="self-center"
      />
      {/* <p className="label">Phone No.</p>
      <MobileNumberInput />
      
      <div className="buttonwrap">
        <button className="button">Let’s get started!</button>
      </div>
      <p className="doitlatertxt">I’ll do it later</p> */}
    </div>
  );
};

export default FindingMatches;
