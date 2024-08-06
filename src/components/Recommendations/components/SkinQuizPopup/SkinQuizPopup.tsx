import React, { useState } from "react";
import Option from "../core/Option";
import "./SkinQuizPopup.css";
import { skinQuestions } from "../../constants/questions";
import OptionSelected from "../core/OptionSelected";
import GoBack from "../../../../assets/svgs/GoBack";
import SkinTypeIdentifier from "../SkinTypeIdentifier/SkinTypeIdentifier";

interface IndexValueItem {
  value: any;
  index: number;
  keyLabel: string;
}
interface ProfileInfoItem {
  gender: string;
  age: number;
  location: string;
  skinType: string;
  skinGoals: any;
  bodyConcern: string;
  hairConcern: any;
  stress: string;
  manicure: string;
}

interface PopupProps {
  onSubmit: (x: any) => void;
}

const SkinQuizPopup = ({ onSubmit }: PopupProps) => {
  const [show, setShow] = useState(false);
  const [profileInfo, setProfileInfo] = useState<ProfileInfoItem>({
    gender: "",
    age: 0,
    location: "",
    skinType: "",
    skinGoals: [],
    bodyConcern: "",
    hairConcern: [],
    stress: "",
    manicure: "",
  });
  const [indexValue, setIndexValue] = useState({});
  const [indexValues, setIndexValues] = useState<IndexValueItem[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [age, setAge] = useState("");
  const [location, setLocation] = useState("");

  const [index, setIndex] = useState(0);
  const questions = skinQuestions;

  const { question, options, desc, key, placeholder, multiple } =
    skinQuestions?.[index];

  const hanldeSetIndexValue = (val: any) => {
    const obj = { value: val, index: index, keyLabel: key };
    const hasValue = indexValues?.filter((x) => x?.keyLabel == key);

    if (hasValue?.length > 0) {
      const updatedArr = indexValues ?? [];
      // console.log(val);
      const newArr = updatedArr?.filter((x) => x?.keyLabel != key);
      newArr.push(obj);
      setIndexValues(newArr);
    } else {
      const updatedArr = indexValues;
      updatedArr.push(obj);
      setIndexValues(updatedArr);
    }
  };

  const onSelect = (val: string) => {
    if (val == "I don’t know" && key == "skinType") {
      setShow(true);
    } else {
      if (key == "skinGoals" || key == "hairConcern") {
        const arr = profileInfo?.[key] ?? [];
        if (arr?.includes(val)) {
          const updatedArr = arr?.filter((x: any) => x !== val);
          setProfileInfo({ ...profileInfo, [key]: updatedArr });
        } else if (arr?.length < 3) {
          arr.push(val);
          setProfileInfo({ ...profileInfo, [key]: arr });
          if (arr?.length == 3) {
            hanldeSetIndexValue(arr);
            setIndex(index + 1);
          }
        }
      } else {
        setProfileInfo({ ...profileInfo, [key]: val });
        // setIndexValue({ ...indexValue, [val]: index });
        hanldeSetIndexValue(val);
        key !== "stress" ? setIndex(index + 1) : console.log("");
      }
    }
  };

  const handleInputChange = (val: any) => {
    if (key === "age") {
      if (!isNaN(val) && val >= 0 && val <= 99) {
        setProfileInfo({ ...profileInfo, [key]: val });
        setAge(val);
        // setIndexValue({...indexValue, [val]: index})
      }
    } else {
      setProfileInfo({ ...profileInfo, [key]: val });
      setLocation(val);
    }
  };

  const hanldePress = () => {
    const keyValue = key == "age" ? age : location;
    // setIndexValue({ ...indexValue, [keyValue]: index });
    hanldeSetIndexValue(keyValue);
    setIndex(index + 1);
  };

  const onClickSubmit = () => {
    // setUserData(profileInfo);
    // router.push("/finding-matches");
    console.log("subm,itting bvaluej....");
    onSubmit(profileInfo);
  };

  const handleClickNext = () => {
    if (key == "hairConcern") {
      const obj = {
        value: profileInfo?.hairConcern,
        index: index,
        keyLabel: key,
      };
      const hasValue = indexValues?.filter((x) => x?.keyLabel == key);

      if (hasValue?.length > 0) {
        const updatedArr = indexValues ?? [];
        const newArr = updatedArr?.filter((x) => x?.keyLabel != key);
        newArr.push(obj);
        setIndexValues(newArr);
        setIndex(index + 1);
      } else {
        const updatedArr = indexValues;
        updatedArr.push(obj);
        setIndexValues(updatedArr);
        setIndex(index + 1);
      }
    } else hanldePress();
  };

  const showBtn = key == "age" || key == "location" || key == "hairConcern";

  type ProfileInfoKey = keyof typeof profileInfo;

  const checkSelected = (opt: string) => {
    if (key == "skinGoals" || key == "hairConcern") {
      return profileInfo?.[key as ProfileInfoKey].includes(opt);
    } else {
      return profileInfo?.[key as ProfileInfoKey] == opt;
    }
  };

  return (
    <div style={{ minHeight: 500 }}>
      <div className="options-row">
        {indexValues?.map((item) => (
          <>
            {item?.keyLabel == "skinGoals" ||
            item?.keyLabel == "hairConcern" ? (
              <>
                {item?.value?.map((goal: string) => (
                  // <OptionSelected
                  //   label={goal}
                  //   onClick={() => setIndex(item?.index)}
                  // />
                  <OptionSelected
                    label={goal}
                    onClick={() => setIndex(item?.index)}
                    noEdit={false}
                  />
                ))}
              </>
            ) : (
              <OptionSelected
                label={item?.value}
                onClick={() => setIndex(item?.index)}
                noEdit={false}
              />
            )}
          </>
        ))}
      </div>
      <p className="quiz-heading">{question}</p>
      <p className="subheading">{desc ?? "Select one"}</p>
      <div style={{ margin: -16, zIndex: 100 }}>
        {show && (
          <SkinTypeIdentifier
            onComplete={(type) => {
              onSelect(type);
              setShow(false);
            }}
            onClose={() => setShow(false)}
          />
        )}
      </div>
      {options?.length ? (
        options?.map((opt: any) => (
          <Option
            label={opt}
            onClick={() => onSelect(opt)}
            isSelected={checkSelected(opt) || false}
          />
        ))
      ) : (
        <input
          type="text"
          className="text-input"
          placeholder={placeholder}
          value={key == "age" ? age : location ?? ""}
          onChange={(e) => handleInputChange(e.target.value)}
        />
      )}
      {/* <SearchBar /> */}
      {/* <LoveHateCard /> */}
      {/* <FindingMatches /> */}
      {errorMessage?.length > 2 && <div style={{display: "flex", justifyContent:'flex-end', marginTop: 10}}>
        <div style={{alignSelf: 'center'}}>
          <Error />
        </div>
        <p style={{color: 'red', fontWeight: 300, fontSize: 12, marginLeft: 6}}>Please select 3 concerns</p>
      </div>}

      {key == "stress" && (
        <button className="submit-btn" onClick={onClickSubmit} type="submit">
          Submit
        </button>
      )}
      <div className="row-end">
        <div
          className="goback"
          onClick={() => (index > 0 ? setIndex(index - 1) : console.log(""))}
        >
          <GoBack />
        </div>
        <div
          style={{ rotate: "180deg" }}
          className="goback"
          onClick={() => (showBtn ? setIndex(index + 1) : console.log(""))}
        >
          <GoBack />
        </div>
      </div>{" "}
    </div>
  );
};

export default SkinQuizPopup;
