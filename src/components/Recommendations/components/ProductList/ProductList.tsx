import React, { useEffect, useState } from "react";
import OptionSelected from "../core/OptionSelected";
import ProductCard from "../core/ProductCard";
import "./ProductList.css";
import EditPen from "../../../../assets/svgs/EditPen";
import PointingFinger from "../../../../assets/svgs/PointingFinger";

interface produtListInterface {
  products: any;
  productsInfo: any;
  profileInfo: any;
  onClickProduct: (x: any, y: any) => void;
  quizMode: boolean;
}

const ProductList = ({
  products,
  productsInfo,
  profileInfo,
  onClickProduct,
  quizMode,
}: produtListInterface) => {
  const [profileValues, setProfileValues] = useState<string[]>([]);
  const [allProducts, setAllProducts] = useState<any[]>([]);

  const extractValues = (obj: any) => {
    const result = [];
    for (const key in profileInfo) {
      const item = profileInfo[key];
      if (key === "skin_health") {
        for (const innerKey in item) {
          result.push(`${innerKey}(${item[innerKey].value})`);
        }
      } else {
        if (key != "gender") {
          result.push(item.value);
        }
      }
    }
    return result;
  };

  const extractValuesQuiz = (obj: any) => {
    let values: string[] = [];
    for (let key in obj) {
      if (Array.isArray(obj[key])) {
        values = values.concat(obj[key]);
      } else {
        values.push(obj[key]);
      }
    }
    return values;
  };

  // useEffect(() => {
  //   if (productsInfo) {
  //     const values = quizMode
  //       ? extractValuesQuiz(profileInfo)
  //       : extractValues(profileInfo);
  //     setProfileValues(values);
  //   }
  // }, [profileInfo]);

  // console.log('THESEEEEE......', profileInfo);
  // console.log('THESEEEEE......222222', profileValues);

  useEffect(() => {
    if (productsInfo) {
      const values = quizMode
        ? extractValuesQuiz(profileInfo)
        : extractValues(profileInfo);
      setProfileValues(values);
    }
  }, [profileInfo]);
  // quizMode

  return (
    <div style={{ marginTop: 10 }}>
      <div className="product-list-container">
        <div className="card-wrap">
          <div className="title-row">
            <p>About</p>
            <div>
              <EditPen />
            </div>
          </div>
          {/* <div style={{overflowX: "hidden"}}> */}
          <div className="selected-opts">
            {profileValues?.map((val: any) => (
              <>
                {val?.length > 0 ? (
                  <OptionSelected
                    noEdit
                    label={val}
                    onClick={() => console.log("")}
                  />
                ) : (
                  <></>
                )}
              </>
            ))}
            {/* </div> */}
          </div>
        </div>
        <div className="card-wrap-2">
          <p>Yay! We’ve found your matches</p>
          <div className="row-centered">
            <p className="">Check out your matched products</p>
            <PointingFinger />
          </div>
        </div>
      </div>
      <div className="products-row">
        {products?.map((item: any) => (
          <ProductCard
            item={item}
            meta={productsInfo?.product_meta?.[item?.id]}
            onClickProduct={() =>
              onClickProduct(item, productsInfo?.product_meta?.[item?.id])
            }
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
