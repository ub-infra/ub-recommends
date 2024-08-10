import React from "react";
import "./SkinHealthOption.css";

interface SkinHealthOptionProps {
  value: number;
  label: string;
}

const SkinHealthOption = ({ label, value }: SkinHealthOptionProps) => {
  return (
    <div>
      <div className="progress-circle">
        <div className="circle">
          <span>{value}</span>
        </div>
      </div>
      <p className="opt-label">{label}</p>
    </div>
  );
};

export default SkinHealthOption;
