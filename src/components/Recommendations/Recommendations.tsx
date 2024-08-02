import React, { useState } from "react";
import "./Recommendations.css";
import LandingPopup from "./components/LandingPopup/LandingPopup";
import SkinQuizPopup from "./components/SkinQuizPopup/SkinQuizPopup";
import ProductList from "./components/ProductList/ProductList";
import ProductDetails from "./components/ProductDetails/ProductDetails";

export interface RecommendationProps {
  show: boolean;
  onClose: () => void;
}
const Recommendations = (props: RecommendationProps) => {
  if (!props?.show) return null;
  const [index, setIndex] = useState(0);
//   let index = 0;
  return (
    <div className="popup">
      <div className="popup-content">
        {index == 0 ? (
          <LandingPopup
            onClick={() => {
              setIndex(1);
            }}
          />
        ) : index == 1 ? (
          <SkinQuizPopup />
        ) : index == 2 ? (
          <ProductList />
        ) : index == 4 ? (
          <ProductDetails />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Recommendations;
