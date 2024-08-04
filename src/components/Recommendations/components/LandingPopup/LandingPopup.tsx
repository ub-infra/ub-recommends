import React from "react";
import "./LandingPopup.css";
import Banner from "../../../../assets/svgs/Banner";

interface LandindPopupProps {
  onClick: () => void;
}

const LandingPopup = (props: LandindPopupProps) => {
  return (
    <div>
      <div>
        <p className="popup-heading">
          We’re here to help you find your best matches
        </p>
        <p className="matches-subtitle">
          We’ll ask you a series of questions about you so we can find your best
          product matches
        </p>
      </div>
      <div>
        <div>
        <Banner />
        </div>
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
