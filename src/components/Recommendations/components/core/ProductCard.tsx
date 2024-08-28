import React from "react";
import ProductInfo from "./ProductInfo";
import "./ProductCard.css";
import Star from "../../../../assets/svgs/Star";

interface ProductProps {
  item: any;
  meta: any;
  onClickProduct: () => void;
}

const kFormatter = (num: number): string => {
  if (Math.abs(num) >= 1000) {
    const formattedNumber =
      Math.sign(num) * parseFloat((Math.abs(num) / 1000).toFixed(1));
    return `${formattedNumber}k`;
  } else {
    return `${Math.sign(num) * Math.abs(num)}`;
  }
};

const generateImageUrl = (images: string) => {
  if (images?.[0] == "[") {
    return `https://ubprodstorage.blob.core.windows.net/ubprodcontainer/${images?.substring(
      2,
      images?.length - 2
    )}`;
  } else
    return `https://ubprodstorage.blob.core.windows.net/ubprodcontainer/${images}`;
};

const ProductCard = ({ item, meta, onClickProduct }: ProductProps) => {
  const experts = item?.expert_count
  const users = item?.recommended_count;
  const imageUrl = generateImageUrl(item?.images);

  return (
    <>
      {item?.product_name ? (
        <div className="prod-card" onClick={onClickProduct}>
          <img
            src={item?.image_url}
            width={'100%'}
            // height={145}
            alt="product image"
            // className="rounded"
            style={{ borderRadius: 4, height: 145, objectFit: "contain" }}
          />
          <div className="score">
            <Star />
            <p>
              {item?.match_score}%<span>{""} Matched</span>
            </p>
          </div>
          <ProductInfo item={item} onClick={onClickProduct} />

          <div className="recommended-by">
            <p>{kFormatter(users ?? 1527)} Users <span className="subtext">like you recommend similar products</span></p>
            {/* <p className="subtext">recommended</p> */}
          </div>
          <div className="recommended-by">
            <p>{kFormatter(experts ?? 1124)} Experts <span className="subtext"> recommend similar products</span></p>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default ProductCard;
