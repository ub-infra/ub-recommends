import React, { useState } from "react";
import "./Recommendations.css";
import LandingPopup from "./components/LandingPopup/LandingPopup";
import SkinQuizPopup from "./components/SkinQuizPopup/SkinQuizPopup";
import ProductList from "./components/ProductList/ProductList";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import FindingMatches from "./components/FindingMatches/FindingMatches";
import GoBack from "../../assets/svgs/GoBack";
import Close from "../../assets/svgs/Close";

export interface RecommendationProps {
  show: boolean;
  onClose: () => void;
}
const Recommendations = (props: RecommendationProps) => {
  if (!props?.show) return null;
  const [index, setIndex] = useState(0);
  const [profileInfo, setProfileInfo] = useState({});
  const [products, setProducts] = useState([]);
  const [productsInfo, setProductsInfo] = useState({});
  const [productSelected, setProductSelected] = useState({});
  const [selectedMeta, setSelectedMeta] = useState({});

  const fetchProducts = (info: any) => {
    const url = `https://app.unsweetenedbeauty.com/search/product/quiz`;
    // const url = `http://localhost:8082/search/product/quiz/plugin/b2c`;
    const data = { ...info };
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
        setProductsInfo(data);
        setProducts(data?.items);
        setIndex(3);
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

  return (
    <div className="popup">
      {/* <div className="popup-content"> */}
      <div className={`popup-content ${index === 3 ? 'index-2' : ''}`}>
        <div className="row-between">
          <div
            style={{ cursor: "pointer" }}
            onClick={() => (index > 0 ? index == 3 ? setIndex(index - 2) : setIndex(index - 1) : console.log(""))}
          >
            <GoBack />
          </div>
          <div style={{ cursor: "pointer" }} onClick={close}>
            <Close />
          </div>
        </div>
        {index == 0 ? (
          <LandingPopup
            onClick={() => {
              setIndex(index + 1);
              console.log("also heree.....");
            }}
          />
        ) : index == 1 ? (
          <SkinQuizPopup
            onSubmit={(info) => {
              setProfileInfo(info);
              setIndex(2);
              fetchProducts(info);
            }}
          />
        ) : index == 2 ? (
          <FindingMatches />
        ) : index == 3 ? (
          <ProductList
            products={products}
            productsInfo={productsInfo}
            profileInfo={profileInfo}
            onClickProduct={(product, meta) => {
              onClickProduct(product, meta);
            }}
          />
        ) : index == 4 ? (
          <ProductDetails product={productSelected} meta={selectedMeta} />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Recommendations;
