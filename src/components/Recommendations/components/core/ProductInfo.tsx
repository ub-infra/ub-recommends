import React from "react";
import "./ProductCard.css";

interface ProductProps {
  item: any;
  onClick: () => void;
}

const ProductInfo = ({ item, onClick }: ProductProps) => {
  return (
    <>
      <p className="name">
        {item?.product_name}
      </p>
      <p className="category" style={{ fontSize: 10 }}>
        {item?.sub_category
          ? item?.sub_category
          : item?.category
          ? item?.category
          : "Mylo Care"}
      </p>
      <p className="name" style={{ marginTop: 4 }}>
        {item?.mrp ? `₹ ${item?.mrp}` : ""}{" "}
        {/* {item?.source_mrp && <span className='category'>
              ₹{item?.mrp}
            </span>} */}
      </p>
      {/* <button className="buybtn" onClick={onClick}>
        Buy Now
      </button> */}
    </>
  );
};

export default ProductInfo;
