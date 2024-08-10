import React, { useState } from "react";
import "./SelectFavouriteProducts.css";
import SearchBar from "../core/SearchBar";
import ArrowSelect from "../../../../assets/svgs/ArrowSelect";
import Chevron from "../../../../assets/svgs/Chevron";
import Cross from "../../../../assets/svgs/Cross";

interface SelectFavouriteProductsProps {
  products: any;
  onClick: () => void;
}

const SelectFavouriteProducts = ({
  products,
  onClick,
}: SelectFavouriteProductsProps) => {
  const [selectNone, setSelectNone] = useState(false);
  const [show, setShow] = useState(false);
  const [selectedProds, setSelectedProds] = useState<string[]>([]);

  const handleOnClickProduct = (prod: string) => {
    if (selectedProds?.includes(prod)) {
      const arr = selectedProds?.filter((x) => x != prod);
      setSelectedProds(arr);
    } else {
      setSelectedProds((prev) => [...prev, prod]);
    }
    setShow(false);
  };

  const [filteredList, setFilteredList] = useState([]);
  const handleSearch = (query: string) => {
    setShow(true);
    if (query?.length > 2) {
      const arr = products?.filter(
        (x: string) => x?.toLocaleLowerCase()?.search(query) > -1
      );
      setFilteredList(arr);
    } else {
      setFilteredList([]);
    }
  };

  const list = filteredList?.length > 0 ? filteredList : products;

  return (
    <div className="select-product-container">
      <p className="qstn">
        Which skincare, haircare, makeup products do you love?
      </p>
      <p className="desc">Select multiple products</p>
      <SearchBar
        onFocus={() => setShow(true)}
        onChange={(val) => handleSearch(val)}
      />
      {show && (
        <div
          style={{
            borderRadius: 6,
            boxShadow: "0 2px 4px 1px rgba(0, 0, 0, 0.1)",
            backgroundColor: "#fff",
            marginBottom: 10,
            height: 200,
            overflowY: "auto",
          }}
        >
          {list?.map((product: string) => (
            <div
              className="listedprod"
              onClick={() => handleOnClickProduct(product)}
            >
              <p
                style={
                  selectedProds?.includes(product)
                    ? { fontWeight: 500, color: "#27272a" }
                    : {}
                }
              >
                {product}
              </p>
              <ArrowSelect />
            </div>
          ))}
        </div>
      )}

      {selectedProds?.map((prod) => (
        <div className="selected-prod">
          <div className="selected-prod-row">
            {/* <img src="https://picsum.photos/200" alt="" /> */}
            <div style={{ display: "flex", width: "100%" }}>
              <p style={{ maxLines: 2, display: "flex", flex: 1 }}>{prod}</p>
            </div>
          </div>
          <div
            style={{ cursor: "pointer", alignSelf: "center" }}
            onClick={() => handleOnClickProduct(prod)}
          >
            <Cross />
          </div>
        </div>
      ))}

      {selectedProds?.length > 0 ? (
        <div>
          <div className="outlinedbtn-retake" onClick={onClick}>
            <p>Continue</p>
            <Chevron />
          </div>
        </div>
      ) : (
        <div className="dont-like-any" onClick={onClick}>
          <p>I don’t love any products</p>
          <div className="dont-like-radio" />
        </div>
      )}
    </div>
  );
};

export default SelectFavouriteProducts;
