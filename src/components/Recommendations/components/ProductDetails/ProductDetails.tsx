import React from "react";
import "./ProductDetails.css";
import ProductInfo from "../core/ProductInfo";
import Star from "../../../../assets/svgs/Star";

interface produInterface {
  product: any;
  meta: any;
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

const ProductDetails = ({ product, meta }: produInterface) => {
  // const users = meta?.platform?.[0]?.recommendation_meta?.users_count;
  const users = product?.recommended_count;

  return (
    <div style={{ marginTop: 10, minHeight: 460 }}>
      <div className="prod-details-card flx relative details">
        <img
          src={product?.image_url}
          width={104}
          height={104}
          alt="product image"
          style={{ height: 104, objectFit: "contain" }}
        />
        <div style={{ marginLeft: 10 }}>
          <ProductInfo
            item={product}
            onClick={() => window.open(product?.redirection_link ?? "https://mylofamily.com/", "_blank")}
          />
        </div>
        <div className="score">
          <Star />
          <p>
            {product?.match_score}%<span>{""} Matched</span>
          </p>
        </div>
      </div>

      {/* <p>{kFormatter(experts ?? 1527)} Users</p>
            <p className="subtext">recommended</p>
            <p>{kFormatter(users ?? 1824)} Experts</p>
            <p className="subtext">recommended</p> */}
      <div className="card">
        <p className="rec-count">
          <span>{kFormatter(users ?? 1824)}+ Users </span>like you recommended
          this or similar products
        </p>
        {/* <p className="rec-count">
          <span>{kFormatter(experts ?? 1527)}+ Experts </span>recommended this
          or similar products
        </p> */}
      </div>
    </div>
  );
};

export default ProductDetails;
