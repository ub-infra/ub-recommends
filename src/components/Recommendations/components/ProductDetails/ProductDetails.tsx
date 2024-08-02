import React from "react";
// import ProductInfo from "./core/ProductInfo";
// import Star from "../../../../assets/svgs/Star.svg";
// import StarHalf from "../../../../assets/svgs/StarHalf.svg";
// import ProductPlaceholder from "../../../../assets/svgs/ProductPlaceholder.svg";
// import Rupee from "../../../../assets/svgs/Rupee.svg";
// import Pills from "../../../../assets/svgs/Pills.svg";
// import Image from "next/image";
import "./ProductDetails.css";
import ProductInfo from "../core/ProductInfo";

const ProductDetails = () => {
  return (
    <div>
      <div className="card flx relative details">
        <img
          src={"https://picsum.photos/200"}
          width={104}
          height={104}
          alt="product image"
        />
        <div style={{ marginLeft: 10 }}>
          <ProductInfo />
        </div>
        <div className="score">
          {/* <Image src={Star} height={14} width={14} alt="rating" /> */}
          <p>
            98%
            <span>{""} Matched</span>
          </p>
        </div>
      </div>
      <div className="card">
        <p className="rec-count">
          <span>2.2M+ Users </span>like you recommended this or similar products
        </p>
        <p className="rec-count">
          <span>2.2M+ Users </span>like you recommended this or similar products
        </p>
      </div>

      <div className="card">
        <div className="flx-btwn">
          <p>Personalized rating</p>
          <div className="score-lg">
            {/* <img src={Star} height={24} width={24} alt="rating" /> */}
            <p>4.8</p>
          </div>
        </div>

        <div className="flx">
          {/* <Image src={StarHalf} width={18} alt="Rating" /> */}
          <p className="rating">
            4.8/5 for pregnancy
          </p>
        </div>
      </div>

      {/* <div className="card">
        <p className="text-base text-gray-950 font-semibold text-left">
          Personalised for you
        </p>
        <div className="border p-2.5 border-gray-100 rounded-md mt-2.5">
          <p className="text-base text-gray-950 font-Medium text-left">
            1.Similar products you love
          </p>
          <div className="flex border px-2.5 py-1.5 border-gray-300 rounded-md mt-2.5">
            <Image src={ProductPlaceholder} width={18} alt="Rating" />
            <p className="text-sm text-gray-800 font-light ml-1 self-center">
              Cetaphil gentle cleanser
            </p>
          </div>
        </div>

        <div className="border p-2.5 border-gray-100 rounded-md mt-2.5">
          <p className="text-base text-gray-950 font-Medium text-left">
            2. Made with ingredients from your favourite products:
          </p>
        </div>

        <div className="border p-2.5 border-gray-100 rounded-md mt-2.5">
          <p className="text-base text-gray-950 font-Medium text-left">
            3. Suits your preferences
          </p>
          <div className="flex border px-2.5 py-1.5 border-gray-300 rounded-md mt-2.5">
            <Image src={Pills} width={18} alt="Preferences" />
            <p className="text-sm text-gray-800 font-light ml-1 self-center">
              Vegan
            </p>
          </div>
        </div>

        <div className="border p-2.5 border-gray-100 rounded-md mt-2.5">
          <p className="text-base text-gray-950 font-Medium text-left">
            4. Within your budget
          </p>

          <div className="flex border px-2.5 py-1.5 border-gray-300 rounded-md mt-2.5">
            <Image src={Rupee} width={18} alt="budget" />
            <p className="text-sm text-gray-800 font-light ml-1 self-center">
              500-1500
            </p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default ProductDetails;
