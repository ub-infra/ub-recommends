import React from "react";
import "./SelectFaceAnalysisOrQuiz.css";

interface SelectFaceAnalysisOrQuizProps {
  onClickQuiz: () => void;
  onClickFaceAnalysis: () => void;
}

const SelectFaceAnalysisOrQuiz = ({onClickQuiz, onClickFaceAnalysis}: SelectFaceAnalysisOrQuizProps) => {
  return (
    <div className="select-container">
      <h5>We’re here to help you find your best matches</h5>
      <p>
        We’ll ask you a series of questions about you so we can find your best
        product matches
      </p>
      <img
        src={
          "https://ubprodstorage.blob.core.windows.net/ubprodcontainer/static/challenge/E/0/XE0rlytLm9NE-_4X3e2ad.jpeg"
        }
        alt="Banner"
      />
      <button onClick={onClickFaceAnalysis}>Start face analysis</button>

      <div className="btn-divider">
        <div className="border-line"></div>
        <p>OR</p>
        <div className="border-line"></div>
      </div>

      <button className="outlined" onClick={onClickQuiz}>Take Quiz instead</button>
    </div>
  );
};

export default SelectFaceAnalysisOrQuiz;
