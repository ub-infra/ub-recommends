import React, { useRef, useCallback, useState, useEffect } from "react";
import Webcam from "react-webcam";
import "./WebcamCapture.css";

interface WebcamProps {
  onComplete: (x: string) => void;
  profile: number;
}

const WebcamCapture = ({ onComplete, profile }: WebcamProps) => {
  const webcamRef = useRef<any>(null);
  const [hasPermission, setHasPermission] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const [capturing, setCapturing] = useState(false);
  const [imgSrc, setImgSrc] = useState<any>(null);
  const [imageFile, setImageFile] = useState<any>(null);
  const [scanning, setScanning] = useState(false);
  const [loading, setLoading] = useState(false);
  const [scanningIndex, setScanningIndex] = useState(0);
  const [path, setPath] = useState<string>("");

  useEffect(() => {
    // const handleGoBack = (path: string) => {
    console.log("here..............", scanningIndex, path);

    if (scanningIndex > 0 && path?.length > 0) {
      console.log("hein.....");
      setImgSrc(null);
      setImageFile(null);
      setScanningIndex(0);
      setPath("");
      setScanning(true);
      onComplete(path);
    }
    //   };
  }, [scanningIndex, path]);

  const startCapture = () => {
    setCapturing(true);
    setCountdown(3);
    const countdownInterval = setInterval(() => {
      setCountdown((prevCountdown) => {
        if (prevCountdown === 1) {
          clearInterval(countdownInterval);
          capture();
          setCapturing(false);
          return 0;
        }
        return prevCountdown - 1;
      });
    }, 1000);
  };

  const capture = useCallback(() => {
    const imgName =
      profile == 0
        ? "frontProfile"
        : profile == 1
        ? "leftProfile"
        : "rightProfile";
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
    const fileName = imgName ? `${imgName}.png` : "profile.png";
    const testImage = base64StringToFile(
      imageSrc.replace(/^[^,]+,/, ""),
      fileName
    );
    onPost(testImage);
    console.log("This right here....", testImage);
    setImageFile(testImage);
    setScanning(true);
    setTimeout(() => {
      setScanning(false);
      setScanningIndex(scanningIndex + 1);
    }, 3000);
  }, [webcamRef]);

  const getImagePathString = (images: string) => {
    const pathString =
      images?.[0] == "[" ? images?.substring(2, images?.length - 2) : images;
    return pathString;
  };

  const onPost = (image: any) => {
    if (loading) return;
    const url = `https://app.unsweetenedbeauty.com/receipt/upload/image`;

    setLoading(true);
    const headers = {
      "Content-Type": "multipart/form-data",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtb2JpbGVOdW1iZXIiOiI5MTk4ODY5NzU5MzciLCJ1c2VySUQiOiJFSUlMNk9RUGtIYTFKODlwMHZBczYiLCJjcmVhdGVkQXQiOjE2NzgxOTYzNDA3NDIsImlhdCI6MTY3ODE5NjM0MH0.ZKYRrNAPs1C6pIQklFUxcIKrsmXp2MWnamhz12uMldk",
    };

    var data = new FormData();
    data.append("file", image);
    fetch(url, {
      method: "POST",
      body: data,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        const path = getImagePathString(data?.path);
        // handleGoBack(path);
        console.log("parth....", path);
        setPath(path);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const base64StringToFile = (base64String: any, fileName: any) => {
    const byteCharacters = atob(base64String);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    const blob = new Blob([byteArray], { type: "image/png" });
    const file = new File([blob], fileName, { type: "image/png" });
    return file;
  };

  const handleUserMedia = useCallback(() => {
    setHasPermission(true);
  }, []);

  const handleUserMediaError = useCallback((error: any) => {
    console.error("Camera permission denied:", error);
    setHasPermission(false);
  }, []);

  const [permissionChecked, setPermissionChecked] = useState(false);

  useEffect(() => {
    // Prompt user for permission when the component mounts
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        setHasPermission(true);
        setPermissionChecked(true);
        stream.getTracks().forEach((track) => track.stop());
      })
      .catch((err) => {
        console.error("Camera permission denied:", err);
        setHasPermission(false);
        setPermissionChecked(true);
      });
  }, []);

  return (
    <div
      style={{
        position: "relative",
        margin: "auto",
        marginTop: 24,
        borderRadius: 30,
        // height: 600,
      }}
    >
      {imgSrc ? (
        <div className="captured-container">
          <img src={imgSrc} alt="Captured" className="captured-image" />
          {scanning && (
            <>
              <div className="center-line"></div>
              <div className="moving-line"></div>
            </>
          )}
        </div>
      ) : (
        <>
          {permissionChecked ? (
            <>
              {hasPermission ? (
                <>
                  <Webcam
                    audio={false}
                    ref={webcamRef}
                    screenshotFormat="image/jpeg"
                    // width="100%"
                    // height="100%"
                    // videoConstraints={{ facingMode: "user" }}
                    // mirrored
                    onUserMedia={handleUserMedia}
                    onUserMediaError={handleUserMediaError}
                    videoConstraints={{
                      width: 380,
                      height: 560,
                      facingMode: "user",
                    }}
                    mirrored
                    style={{ marginLeft: -10 }}
                  />
                  <div className="overlay">
                    <div className="oval">
                      {capturing && countdown > 0 && (
                        <span className="countdown">{countdown}</span>
                      )}
                    </div>
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      bottom: -30,
                      display: "flex",
                      justifyContent: "center",
                      width: "100%",
                    }}
                  >
                    {profile == 0 ? (
                      <iframe
                        src="https://lottie.host/embed/d894ed0e-520f-43fc-8794-d370ffc1c3e5/xwa2Jh0Lcn.json"
                        width={180}
                      ></iframe>
                    ) : profile == 1 ? (
                      <iframe
                        src="https://lottie.host/embed/cd58fd25-a6e7-443b-b1a7-800ac70c9d6a/BTmwYmaEFY.json"
                        width={180}
                      ></iframe>
                    ) : profile == 2 ? (
                      <iframe
                        src="https://lottie.host/embed/a1e388aa-7ccf-4657-8757-de1721e960e7/anAgAAs5r0.json"
                        width={180}
                      ></iframe>
                    ) : (
                      <></>
                    )}
                  </div>
                </>
              ) : (
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <p style={{ textAlign: "center" }}>
                    Camera permission is required to use this feature. please
                    enable camera
                  </p>
                </div>
              )}
            </>
          ) : (
            <>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <p style={{ textAlign: "center" }}>
                  Checking camera permission...
                </p>
              </div>
            </>
          )}
        </>
      )}

      {hasPermission ? (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div
            style={{
              width: 58,
              height: 62,
              borderRadius: 82,
              backgroundColor: "#27272A",
              border: "2px solid #FFF",
              cursor: "pointer",
              position: "absolute",
              bottom: -40,
            }}
            onClick={startCapture}
          ></div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default WebcamCapture;
