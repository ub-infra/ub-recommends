import React, { useState } from "react";
import "./Recommendations.css";
import LandingPopup from "./components/LandingPopup/LandingPopup";

export interface RecommendationProps {
  show: boolean;
  onClose: () => void;
}
const Recommendations = (props: RecommendationProps) => {
  if (!props?.show) return null;
    const [indexAgain, setIndexAgain] = useState(0);
    let index = 0;
  return (
    <div className="popup">
      <div className="popup-content">
        <h1>{indexAgain}</h1>
        {index == 0 ? (
          <LandingPopup onClick={() => {
            index = 2
            setIndexAgain(1)
        }} />
        ) : (
          <p>Index is 2</p>
        )}
      </div>
    </div>
  );
};

export default Recommendations;
