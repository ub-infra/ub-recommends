// import Image from "next/image";
import React from "react";
// import EditPen from "../../../../assets/svgs/EditPen.svg";
// import PointingFinger from "../../../../assets/svgs/PointingFinger.svg";
import OptionSelected from "../core/OptionSelected";
import ProductCard from "../core/ProductCard";
import './ProductList.css'

const ProductList = () => {
  return (
    <div>
    <div className="product-list-container">
      <div className="card-wrap">
        <div className="title-row">
          <p>About</p>
          {/* <Image src={EditPen} width={20} height={20} alt="Edit" /> */}
        </div>
        <div className="flex flex-wrap mt-2.5">
          <OptionSelected noEdit label="dnlkd" onClick={() => console.log('')}/>
          <OptionSelected noEdit={true} label="jcnvjkfnq" onClick={() => console.log('ijdkf')}/>
          <OptionSelected noEdit={false} label="jcnvjkfnq" onClick={() => console.log('ijdkf')}/>
        </div>
      </div>
      <div className="card-wrap" style={{border: 0}}>
        <p className="title">
          Yay! We’ve found your matches
        </p>
        <div className="row-centered">
          <p className="">
            Check out your matched products
          </p>
          {/* <Image src={PointingFinger} height={30} width={30} alt="products" /> */}
        </div>
      </div>
      </div>
      <div className="flex overflow-x-scroll space-x-4 mt-4 pb-2.5">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default ProductList;
