import React from "react";
// import Checked from "../../../../assets/svgs/OptionChecked.svg";
import './Options.css'

export interface OptionProps {
  isSelected: boolean;
  label: string;
  onClick: (x: any) => void
}
const Option = ({ isSelected, label, onClick }: OptionProps) => {

  return (
    <div className="justify-end">
      <div
        className={"option border-bottom-0"}
        style={{marginBottom: 6}}
        onClick={onClick}
      >
        <p>{label}</p>
        {isSelected ? (
          // <img src={Checked} width={20} className="ml-2"/>
          <></>
        ) : (
          <div className="radio-unchecked ml-2" />
        )}
      </div>
    </div>
  );
}

export default Option;