import React from 'react'
import './ProductCard.css'

interface ProductProps {
  item: any;
  onClick: () => void;
}

const ProductInfo = ({item, onClick}: ProductProps) => {
  return (
    <>
        <p className="name" style={{width: 160}}>
            {item?.product_name}
          </p>
          <p
            className="category"
            style={{ fontSize: 10 }}
          >
            {item?.category}
          </p>
          <p className="name" style={{marginTop: 4}}>
            {item?.price ?? item?.source_price ?? item?.source_mrp}{" "}
            {item?.source_mrp && <span className='category'>
              ₹{item?.source_mrp}
            </span>}
          </p>
          <button className="buybtn" onClick={onClick}>
            Buy Now
          </button>
    </>
  )
}

export default ProductInfo