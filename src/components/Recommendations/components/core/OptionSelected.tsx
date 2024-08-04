import React from "react";
import './OptionSelected.css'
import EditPen from "../../../../assets/svgs/EditPen";

export interface OptionProps {
  noEdit: boolean;
  label: string;
  onClick: (x: any) => void
}
const OptionSelected = ({ noEdit, label, onClick }: OptionProps) => {

  return (
    <div className="option-wrap">
      <div
        className="option"
        style={{backgroundColor: '#E4E4E7'}}
        onClick={onClick}
      >
        <p>{label}</p>
        {noEdit ? (
          <></>
        ) : (
          // <Image src={EditPen} width={20} className="ml-2" alt="edit" />
          <EditPen />
        )}
      </div>
    </div>
  );
};

export default OptionSelected;
