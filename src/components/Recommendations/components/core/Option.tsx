import React from "react";
// import Checked from "../../../../assets/svgs/OptionChecked.svg";
import "./Options.css";

export interface OptionProps {
  isSelected: boolean;
  label: string;
  onClick: (x: any) => void;
}
const Option = ({ isSelected, label, onClick }: OptionProps) => {
  return (
    <div className="justify-end">
      <div
        className={"option"}
        style={{ marginBottom: 6 }}
        onClick={onClick}
      >
        <p>{label}</p>
        {isSelected ? (
          <div style={{marginLeft: 10}}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_8091_52)">
                <path
                  d="M9.99996 1.66667C5.41663 1.66667 1.66663 5.41667 1.66663 10C1.66663 14.5833 5.41663 18.3333 9.99996 18.3333C14.5833 18.3333 18.3333 14.5833 18.3333 10C18.3333 5.41667 14.5833 1.66667 9.99996 1.66667ZM9.0404 13.4596C8.64988 13.8501 8.01671 13.8501 7.62619 13.4596L4.75454 10.5879C4.42984 10.2632 4.42984 9.73679 4.75454 9.4121C5.07891 9.08772 5.60471 9.08736 5.92953 9.41128L7.62619 11.1032C8.01687 11.4928 8.64927 11.4924 9.03941 11.1022L14.0666 6.07501C14.3931 5.74858 14.9226 5.74951 15.2479 6.0771C15.5715 6.40305 15.5706 6.92937 15.2458 7.25418L9.0404 13.4596Z"
                  fill="#27272A"
                />
              </g>
              <rect
                x="0.25"
                y="0.25"
                width="19.5"
                height="19.5"
                rx="9.75"
                stroke="#27272A"
                stroke-width="0.5"
              />
              <defs>
                <clipPath id="clip0_8091_52">
                  <rect width="20" height="20" rx="10" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        ) : (
          <div className="radio-unchecked ml-2" />
        )}
      </div>
    </div>
  );
};

export default Option;
