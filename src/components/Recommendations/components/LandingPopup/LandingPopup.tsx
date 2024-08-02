import React from "react";
import "./LandingPopup.css";

interface LandindPopupProps {
  onClick: () => void;
}

const LandingPopup = (props: LandindPopupProps) => {
  return (
    <div>
      <div>
        <p className="heading">
          We’re here to help you find your best matches
        </p>
        <p className="subtitle">
          We’ll ask you a series of questions about you so we can find your best
          product matches
        </p>
      </div>
      <div>
        <img src="../../CoinKing.png" style={{ height: 485, width: 380 }} />
      </div>
      <button
        className="button"
        onClick={props?.onClick}
      >
        Let’s get started!
      </button>
    </div>
  );
};

export default LandingPopup;
