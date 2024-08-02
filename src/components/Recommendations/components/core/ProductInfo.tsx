import React from 'react'
import './ProductCard.css'
const ProductInfo = () => {
  return (
    <>
        <p className="name">
            Mylo care
          </p>
          <p
            className="category"
            style={{ fontSize: 10 }}
          >
            Mylo care
          </p>
          <p className="name" style={{marginTop: 4}}>
            ₹199{" "}
            <span className='category'>
              ₹169
            </span>
          </p>
          <button className="buybtn">
            Buy Now
          </button>
    </>
  )
}

export default ProductInfo