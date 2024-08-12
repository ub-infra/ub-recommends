import React, { useEffect, useState } from "react";
import "./SkinAnalysis.css";
import WebcamCapture from "../WebcamCapture/WebcamCapture";
import SkinAnalysisResult from "../SkinAnalysisResult/SkinAnalysisResult";
import SelectFavouriteProducts from "../SelectFavouriteProducts/SelectFavouriteProducts";

const resultExample = {
  gender: {
    value: "female",
  },
  skin_age: {
    value: "25-30",
  },
  skin_health: {
    Acne: {
      value: 50,
    },
    "Dark circles": {
      value: 50,
    },
    Eyebags: {
      value: 50,
    },
    Firmness: {
      value: 50,
    },
    Moisture: {
      value: 50,
    },
    Oiliness: {
      value: 50,
    },
    Pores: {
      value: 50,
    },
    Radiance: {
      value: 50,
    },
    Redness: {
      value: 50,
    },
    Spots: {
      value: 50,
    },
    Texture: {
      value: 50,
    },
    Wrinkles: {
      value: 50,
    },
  },
  skin_score: {
    value: 68,
  },
  skin_tone: {
    value: "fair",
  },
};

interface SkinAnalysisProps {
  onClick: (x: any) => void;
}

const SkinAnalysis = ({ onClick }: SkinAnalysisProps) => {
  const [frontProfile, setFrontProfile] = useState<string>("");
  const [leftProfile, setLeftProfile] = useState<string>("");
  const [rigthProfile, setRightProfile] = useState<string>("");
  const [skinResults, setSkinResults] = useState<any>({});
  const [productsToSelect, setProductsToSelect] = useState([]);
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(0);

  const handleComplete = (path: string) => {
    index == 0
      ? setFrontProfile(path)
      : index == 1
      ? setLeftProfile(path)
      : setRightProfile(path);
    if (index > 1) {
      const data = {
        front_image: frontProfile,
        left_image: leftProfile,
        right_image: path,
      };
      fetchSkinAnalysis(data);
    } else setIndex(index + 1);
  };

  const fetchSkinAnalysis = (data: any) => {
    const url = `https://app.unsweetenedbeauty.com/ai/skin/analysis`;
    // const url = "http://20.219.31.35:3002/skin/analysis";
    setLoading(true);
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        setIndex(3);
        if (!response.ok) {
          throw new Error("Network response was not ok " + response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Success:THIS I SDATATTA HERE..... ANANALYSIS...", data);
        setSkinResults(data);
        setLoading(false);
        setIndex(3);
      })
      .catch((error) => {
        console.error("Error:", error);
        setLoading(false);
      });
  };

  const fetchProductsToSelect = () => {
    const url = `https://app.unsweetenedbeauty.com/mylo/products`;
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok " + response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        setProductsToSelect(data?.products);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    fetchProductsToSelect();
  }, []);

  return (
    <div>
      <p>Step {step + 1}:</p>

      <div className="row-between">
        <div className="prog-bar-active" />
        <div className={step > 0 ? "prog-bar-active" : "prog-bar"} />
      </div>
      {step < 1 ? (
        <p style={{ marginTop: 10 }}>
          {index == 0
            ? "Front Side"
            : index == 1
            ? "Left Profile"
            : index == 2
            ? "Right Profile"
            : index == 3
            ? "Your face analysis"
            : ""}
        </p>
      ) : (
        <></>
      )}
      {step < 1 && (
        <p style={{ fontSize: 12, color: "grey", fontWeight: 300 }}>
          {index == 3
            ? "Your face analysis is ready. Check out your product matches now."
            : "Get product matches via detailed face analysis."}
        </p>
      )}
      {step > 0 ? (
        <SelectFavouriteProducts
          products={productsToSelect}
          onClick={() => onClick(skinResults)}
        />
      ) : (
        <>
          {loading ? (
            <p>...</p>
          ) : (
            <>
              {index < 3 ? (
                <WebcamCapture
                  onComplete={(path) => handleComplete(path)}
                  profile={index}
                />
              ) : (
                <SkinAnalysisResult
                  skinResults={skinResults}
                  // frontProfile={frontProfile ?? "static/challenge/W/m/DDz0RC9_7s3VD6_wxAw0b.jpeg"}
                  frontProfile={frontProfile}
                  // onClick={onClick}
                  onClick={() => setStep(1)}
                  onClickReset={() => {
                    setFrontProfile("");
                    setLeftProfile("");
                    setRightProfile("");
                    setIndex(0);
                  }}
                />
              )}
            </>
          )}
        </>
      )}
      {/* <div
        style={{ height: 30, width: 100, backgroundColor: "red", margin: 24 }}
        onClick={
          () => setIndex(3)
          // fetchSkinAnalysis({
          //   front_image: "static/challenge/W/m/DDz0RC9_7s3VD6_wxAw0b.jpeg",
          //   left_image: "static/challenge/J/n/7RdpqhTxYOQsJxOgixEck.jpeg",
          //   right_image: "static/challenge/l/H/P901GhGYObZ4Cnm41V9TV.jpeg",
          // })
        }
      ></div> */}
    </div>
  );
};

export default SkinAnalysis;
