'use client'
import React from 'react';
import './MobileNumberInput.css'
const MobileNumberInput = () => {
  return (
    <div className="mobile-input-container">
      <div className="input-wrap">
        <select
        className="select-country"
          defaultValue="+91"
        >
          <option value="+91">+91</option>
        </select>
        <div>
        <input
          type="tel"
          className="mobile-input"
          placeholder="Enter mobile number"
          onChange={(e) => console.log(e.target.value)}
          maxLength={10}
        />
        </div>
      </div>
    </div>
  );
};

export default MobileNumberInput;