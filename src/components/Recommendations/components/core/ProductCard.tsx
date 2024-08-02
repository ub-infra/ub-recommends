import React from 'react'
import ProductInfo from './ProductInfo'
import './ProductCard.css'

const ProductCard = () => {
  return (
    <div className="card">
          <img
            src={"https://picsum.photos/200"}
            width={160}
            height={145}
            alt="product image"
            // className="rounded"
            style={{borderRadius: 4}}
          />
          <ProductInfo />

          <div className="recommended-by">
            <p>2.2M+</p>
            <p className='subtext'>Users recommended</p>
          </div>
        </div>
  )
}

export default ProductCard