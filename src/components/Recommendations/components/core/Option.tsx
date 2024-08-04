import React from "react";
import "./Options.css";
import Checked from "../../../../assets/svgs/Checked";

export interface OptionProps {
  isSelected: boolean;
  label: string;
  onClick: (x: any) => void;
}
const Option = ({ isSelected, label, onClick }: OptionProps) => {
  return (
    <div className="justify-end">
      <div className={"option"} onClick={onClick} style={{backgroundColor: isSelected ? '#E4E4E7' : '#FFF'}}>
        <p>{label}</p>
        {isSelected ? (
          <div style={{marginLeft: 10}}>
            <Checked />
          </div>
        ) : (
          <div className="radio-unchecked ml-2" />
        )}
      </div>
    </div>
  );
};

export default Option;

