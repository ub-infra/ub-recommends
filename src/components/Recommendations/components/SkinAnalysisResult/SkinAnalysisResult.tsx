import SkinHealthOption from "../SkinAnalysis/SkinHealthOption";
import React from "react";
import "./SkinAnalysisResult.css";
import Camera from "../../../../assets/svgs/Camera";
import Chevron from "../../../../assets/svgs/Chevron";

interface SkinAnalysisResultProps {
  skinResults: any;
  frontProfile: string;
  onClick: () => void;
  onClickReset: () => void;
}
const SkinAnalysisResult = ({
  skinResults,
  frontProfile,
  onClick,
  onClickReset,
}: SkinAnalysisResultProps) => {
  return (
    <div>
      <div style={{ display: "flex", marginTop: 20 }}>
        <img
          src={`https://ubprodstorage.blob.core.windows.net/ubprodcontainer/${frontProfile}`}
          alt=""
          style={{
            width: 156,
            height: 126,
            borderRadius: 6,
            flex: 1,
            objectFit: "contain",
          }}
        />
        <div
          style={{
            backgroundColor: "pink",
            flex: 1,
            marginLeft: 6,
            padding: 10,
            display: "flex",
            flexDirection: "column",
            borderRadius: 6,
          }}
        >
          <div
            style={{
              borderRadius: 6,
              backgroundColor: "#fff",
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <p style={{ fontSize: 16, marginBottom: 0 }}>
              {skinResults?.skin_score?.value}/100
            </p>
            <p style={{ fontSize: 12, marginBottom: 0 }}>Skin score:</p>
          </div>

          <div
            style={{
              borderRadius: 6,
              backgroundColor: "#fff",
              marginTop: 10,
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <p style={{ fontSize: 16, marginBottom: 0 }}>
              {skinResults?.skin_age?.value}
            </p>
            <p style={{ fontSize: 12, marginBottom: 0 }}>Skin age:</p>
          </div>
        </div>
      </div>
      <div className="skinhealth">
        <p>Skin Health:</p>
        <div className="row-wrapped">
          {Object.keys(skinResults?.skin_health)?.map((label) => (
            <SkinHealthOption
              value={skinResults?.skin_health?.[label]?.value}
              label={label}
            />
          ))}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: 20,
          gap: 10,
        }}
      >
        <div
          className="outlinedbtn-retake"
          onClick={onClickReset}
          style={{ backgroundColor: "#fff", border: "1px solid #27272a" }}
        >
          <Camera />
          <p style={{ color: "#27272a" }}>Retake</p>
        </div>
        <div
          className="outlinedbtn-retake"
          style={{ backgroundColor: "#27272A" }}
          onClick={onClick}
        >
          <p style={{ color: "#FFF" }}>Continue</p>
          <Chevron />
        </div>
      </div>
    </div>
  );
};

export default SkinAnalysisResult;
