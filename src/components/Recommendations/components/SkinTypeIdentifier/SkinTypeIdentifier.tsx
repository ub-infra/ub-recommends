import React, { useState } from "react";
import "./SkinTypeIdentifier.css";
import {
  skinTypeOptions,
  titles,
} from "../../constants/skinTypeIdentifierQuestions";
import GoBack from "../../../../assets/svgs/GoBack";
import Close from "../../../../assets/svgs/Close";
import IdentifierOption from "../core/IdentifierOption";

type SkinTypeIdentifierProps = {
  onComplete: (x: string) => void;
  onClose: () => void;
};

const SkinTypeIdentifier = ({
  onComplete,
  onClose,
}: SkinTypeIdentifierProps) => {
  const [index, setIndex] = useState(0);
  const [values, setValues] = useState({
    feelAfterWash: "",
    noProductsAfter30mins: "",
    looksRed: "",
    midday: "",
    breakouts: "",
  });
  const [skinType, setSkinType] = useState("Combination");
  const [categories, setCategories] = useState(["", "", "", "", ""]);

  const property =
    index === 0
      ? "feelAfterWash"
      : index === 1
      ? "noProductsAfter30mins"
      : index === 2
      ? "midday"
      : index === 3
      ? "breakouts"
      : "looksRed";

  const decideSkinType = () => {
    const oilyCount = categories?.filter((x) => x === "Oily")?.length;
    const dryCount = categories?.filter((x) => x === "Dry")?.length;
    const comboCount = categories?.filter((x) => x === "Combination")?.length;
    const sensitiveCount = categories?.filter((x) => x === "Sensitive")?.length;

    if (sensitiveCount > 1) {
      //   setSkinTypeImg(Sensitive);
      setSkinType("Sensitive");
      setIndex(index + 1);
    } else if (oilyCount > 2) {
      //   setSkinTypeImg(Oily);
      setSkinType("Oily");
      setIndex(index + 1);
    } else if (dryCount > 2) {
      //   setSkinTypeImg(Dry);
      setSkinType("Dry");
      setIndex(index + 1);
    } else if (comboCount > 2) {
      //   setSkinTypeImg(Combination);
      setSkinType("Combination");
      setIndex(index + 1);
    } else if (
      (oilyCount > 1 && dryCount > 1) ||
      (oilyCount > 1 && comboCount > 1) ||
      (dryCount > 1 && comboCount > 1)
    ) {
      //   setSkinTypeImg(Combination);
      setSkinType("Combination");
      setIndex(index + 1);
    } else {
      //   setSkinTypeImg(Combination);
      setSkinType("Combination");
      setIndex(index + 1);
    }
  };

  const resetValues = () => {
    setValues({
      ...values,
      feelAfterWash: "",
      noProductsAfter30mins: "",
      looksRed: "",
      midday: "",
      breakouts: "",
    });
  };
  return (
    <div className="identifier-popup">
      <div className="identifier-popup-content">
        {index < 5 ? (
          <>
            <div className="row-between">
              <p>{titles?.[index]}</p>
              <div style={{ alignSelf: "flex-start"}} className="pointer" onClick={onClose}>
                <Close />
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
              {skinTypeOptions?.[index]?.map((item: any) => (
                <IdentifierOption
                  label={item?.label}
                  isSelected={item?.label === values?.[property]}
                  onClick={() => {
                    setValues({ ...values, [property]: item?.label });
                    const categoryUpdate = categories;
                    categoryUpdate[index] = item?.val;
                    setCategories(categoryUpdate);
                    setIndex(index + 1);
                  }}
                />
              ))}
            </div>

            <div className="row-end">
              {index > 0 && (
                <div
                  onClick={() =>
                    index > 0 ? setIndex(index - 1) : console.log("")
                  }
                  className="pointer"
                >
                  <GoBack />
                </div>
              )}
              {index < 5 && (
                <div
                  onClick={() =>
                    index < 4
                      ? values?.[property]
                        ? setIndex(index + 1)
                        : console.log("Select one")
                      : decideSkinType()
                  }
                  className="pointer"
                  style={{ rotate: "180deg", marginLeft: 6}}
                >
                  <GoBack />
                </div>
              )}
            </div>
          </>
        ) : (
          <>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div className="skin-type">
                <p>{skinType}</p>
              </div>
              <div onClick={() => onComplete(skinType)} className="thnx-btn">
                Ok, Thanks
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SkinTypeIdentifier;
