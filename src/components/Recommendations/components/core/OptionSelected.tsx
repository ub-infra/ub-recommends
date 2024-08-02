import React from "react";
// import Image from "next/image";
// import EditPen from "../../../../assets/svgs/EditPen.svg";
import "./OptionSelected.css";

export interface OptionProps {
  noEdit: boolean;
  label: string;
  onClick: (x: any) => void;
}
const OptionSelected = ({ noEdit, label, onClick }: OptionProps) => {
  // const isSelected = true;

  return (
    <div className="option-wrap">
      <div
        className="option"
      >
        <p>{label}</p>
        {noEdit ? (
          <></>
        ) : (
          // <Image src={EditPen} width={20} className="ml-2" alt="edit" />
          <></>
        )}
      </div>
    </div>
  );
};

export default OptionSelected;
