import React from 'react'
import ProductInfo from './ProductInfo'
import './ProductCard.css'

interface ProductProps {
  item: any;
  meta: any;
  onClickProduct: () => void;
}

const kFormatter = (num: number): string => {
  if (Math.abs(num) >= 1000) {
    const formattedNumber = Math.sign(num) * parseFloat((Math.abs(num) / 1000).toFixed(1));
    return `${formattedNumber}k`;
  } else {
    return `${Math.sign(num) * Math.abs(num)}`;
  }
}

const generateImageUrl = (images: string) => {
  if (images?.[0] == '[') {
      return `https://ubprodstorage.blob.core.windows.net/ubprodcontainer/${images?.substring(2, images?.length - 2)}`
  } else return `https://ubprodstorage.blob.core.windows.net/ubprodcontainer/${images}`
}

const ProductCard = ({ item, meta, onClickProduct }: ProductProps) => {
  const usersRecommended = meta?.platform?.[0]?.recommendation_meta?.experts_count + meta?.platform?.[0]?.recommendation_meta?.users_count
  const imageUrl = generateImageUrl(item?.images);
  
  return (
    <>
      {item?.price || item?.source_price || item?.source_mrp ? (
        <div className="prod-card">
          <img
            src={imageUrl}
            width={160}
            height={145}
            alt="product image"
            // className="rounded"
            style={{ borderRadius: 4, height: 145, objectFit: 'contain' }}
          />
          <ProductInfo item={item} onClick={onClickProduct}/>

          <div className="recommended-by">
            <p>{kFormatter(usersRecommended ?? 1824)}</p>
            <p className="subtext">Users recommended</p>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default ProductCard;
