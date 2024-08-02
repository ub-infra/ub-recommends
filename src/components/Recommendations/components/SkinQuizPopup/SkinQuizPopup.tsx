import React from "react";
import Option from "../core/Option";
// import OptionEdit from '.core/OptionEdit'
import OptionSelected from "../core/OptionSelected";
// import LoveHateCard from "../components/LoveHateCard";
import SearchBar from "../core/SearchBar";
import FindingMatches from "../FindingMatches/FindingMatches";
import './SkinQuizPopup.css'

function SkinQuizPopup() {
  return (
    <div>
      <div className="options-row">
        <OptionSelected
          label="optkjvnd"
          onClick={() => console.log("lkdmvlkdmvl")}
          noEdit={true}
        />
        <OptionSelected
          label="optkjv1"
          onClick={() => console.log("lkdmvlkdmvl")}
          noEdit={false}
        />
        <OptionSelected
          label="optkjvnd2"
          onClick={() => console.log("lkdmvlkdmvl")}
          noEdit={true}
        />
        <OptionSelected
          label="optkjvn33"
          onClick={() => console.log("lkdmvlkdmvl")}
          noEdit={true}
        />
      </div>
      <p className="heading">
        What recommendations are you looking for?
      </p>
      <p className="subheading">Select one</p>
      <Option
        label="Selct this"
        onClick={() => console.log("inGGGG")}
        isSelected={false}
      />
      <Option
        label="Selct this 2"
        onClick={() => console.log("inGGGG")}
        isSelected={true}
      />
      <Option
        label="Selct this 3"
        onClick={() => console.log("inGGGG")}
        isSelected={false}
      />
      <Option
        label="Selct this 4"
        onClick={() => console.log("inGGGG")}
        isSelected={false}
      />
      <SearchBar />
      {/* <LoveHateCard /> */}

      <FindingMatches />
    </div>
  );
}

export default SkinQuizPopup;
