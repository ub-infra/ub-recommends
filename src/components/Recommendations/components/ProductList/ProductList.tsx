import React, { useEffect, useState } from "react";
import OptionSelected from "../core/OptionSelected";
import ProductCard from "../core/ProductCard";
import './ProductList.css'
import EditPen from "../../../../assets/svgs/EditPen";
import PointingFinger from "../../../../assets/svgs/PointingFinger";

interface produtListInterface {
  products: any;
  productsInfo: any;
  profileInfo: any;
  onClickProduct: (x: any, y: any) => void;
}

const ProductList = ({
  products,
  productsInfo,
  profileInfo,
  onClickProduct,
}: produtListInterface) => {
  const [profileValues, setProfileValues] = useState<string[]>([]);
  const [allProducts, setAllProducts] = useState<any[]>([]);
  const extractValues = (obj: any) => {
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

  useEffect(() => {
    if (productsInfo) {
      const values = extractValues(profileInfo);
      setProfileValues(values);
    }
  }, [profileInfo]);

  useEffect(() => {
    let allProds: string[] = [];
    for (let i = 0; i < products.length; i++) {
      const element = products[i];
      if (element?.products) {
        allProds = [...allProds, ...element.products];
      }
    }
    setAllProducts([...allProds]);
  }, [productsInfo]);

  return (
    <div style={{marginTop: 10}}>
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
        {allProducts?.map((item: any) => (
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
