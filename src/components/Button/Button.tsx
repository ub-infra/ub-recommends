import React from "react";

export interface ButtonProps {
  label: string;
}

const Button = (props: ButtonProps) => {
  return <button style={{backgroundColor: 'red', height: 100, borderColor: 'blue', borderWidth: 3}}>{props.label}</button>;
};

export default Button;