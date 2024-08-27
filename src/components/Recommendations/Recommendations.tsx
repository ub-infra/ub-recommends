import React, { useState } from "react";
import "./Recommendations.css";
import LandingPopup from "./components/LandingPopup/LandingPopup";
import SkinQuizPopup from "./components/SkinQuizPopup/SkinQuizPopup";
import ProductList from "./components/ProductList/ProductList";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import FindingMatches from "./components/FindingMatches/FindingMatches";
import GoBack from "../../assets/svgs/GoBack";
import Close from "../../assets/svgs/Close";
import SkinAnalysis from "./components/SkinAnalysis/SkinAnalysis";
import SelectFaceAnalysisOrQuiz from "./components/SelectFaceAnalysisOrQuiz/SelectFaceAnalysisOrQuiz";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";

export interface RecommendationProps {
  show: boolean;
  onClose: () => void;
}

const dummyInfo = {
  gender: "female",
  age: "25",
  location: "",
  skinType: "Oily",
  skinGoals: [
    "Reduce acne",
    "Minimise pores",
    "Reduce blackheads and/or whiteheads",
  ],
  bodyConcern: "Hyperpigmentation",
  hairConcern: ["Hairfall", "Dandruff"],
  stress: "Somewhat stressed",
};

const Recommendations = (props: RecommendationProps) => {
  if (!props?.show) return null;
  const [index, setIndex] = useState(0);
  const [profileInfo, setProfileInfo] = useState({});
  const [products, setProducts] = useState([]);
  const [productsInfo, setProductsInfo] = useState({});
  const [productSelected, setProductSelected] = useState({});
  const [selectedMeta, setSelectedMeta] = useState({});

  const fetchProducts = (info: any, showQuiz: Boolean) => {
    const url = showQuiz
      ? `https://app.unsweetenedbeauty.com/mylo/products/quiz`
      : `https://app.unsweetenedbeauty.com/mylo/products/ai/data`;
    const data = showQuiz
      ? { skinprofile: info }
      : { skin_health: info?.skin_health };
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok " + response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Success:THIS I SDATATTA HERE.....", data);
        // setProductsInfo(data);
        setProducts(data?.result);
        setIndex(4);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const onClickProduct = (product: object, meta: object) => {
    setProductSelected(product);
    setSelectedMeta(meta);
    setIndex(4);
  };

  const [showQuiz, setShowQuiz] = useState(false);

  return (
    <div className="popup">
      {/* <div className="popup-content"> */}
      {/* <div className={`popup-content ${index === 4 ? "index-2" : ""}`}> */}
      <div className="popup-content">
        <div className="row-between">
          <div
            style={{ cursor: "pointer" }}
            onClick={() =>
              index > 0
                ? index == 3
                  ? setIndex(index - 2)
                  : setIndex(index - 1)
                : console.log("")
            }
          >
            <GoBack />
          </div>
          <div style={{ cursor: "pointer" }} onClick={close}>
            <Close />
          </div>
        </div>
        <ErrorBoundary onClick={() => setIndex(1)}>
        {index == 0 ? (
          <LandingPopup
            onClick={() => {
              setIndex(index + 1);
              console.log("also heree.....");
            }}
          />
        ) : index == 1 ? (
          <SelectFaceAnalysisOrQuiz
            onClickQuiz={() => {
              setShowQuiz(true);
              setIndex(2);
            }}
            onClickFaceAnalysis={() => {
              setShowQuiz(false);
              setIndex(2);
            }}
          />
        ) : index == 2 ? (
          <>
            {showQuiz ? (
              <SkinQuizPopup
                onSubmit={(info) => {
                  setIndex(3);
                  setProfileInfo(info);
                  fetchProducts(info, true);
                }}
              />
            ) : (
              <SkinAnalysis
                onClick={(skinHealth) => {
                  setIndex(3);
                  setProfileInfo(skinHealth);
                  fetchProducts(skinHealth, false);
                }}
              />
            )}
          </>
        ) : index == 3 ? (
          <FindingMatches />
        ) : index == 4 ? (
          <ProductList
            products={products}
            productsInfo={productsInfo}
            profileInfo={profileInfo}
            onClickProduct={(product, meta) => {
              onClickProduct(product, meta);
            }}
            quizMode={showQuiz}
          />
        ) : index == 5 ? (
          <ProductDetails product={productSelected} meta={selectedMeta} />
        ) : (
          <></>
        )}
        </ErrorBoundary>
      </div>
    </div>
  );
};

export default Recommendations;
