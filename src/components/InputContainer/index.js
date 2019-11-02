import React from "react";
import "./InputContainer.css";
import InputCard from "../../containers/InputCard";

const InputContainer = ({
  type,
  currentInputState,
  handleInputChange,
  dosagesToDisplay,
  radioButtonCategory,
  d5W,
  saline3Percent
}) => {
  const inputCards = dosagesToDisplay.map(dosage => {
    return (
      <InputCard
        type={type}
        radioButtonCategory={radioButtonCategory}
        currentInput={
          type === "number" ? currentInputState[dosage] : currentInputState
        }
        handleInputChange={handleInputChange}
        dosage={dosage}
        dosageErrors={currentInputState.dosageErrors}
        key={dosage}
        currentInputState={currentInputState}
        dosagesToDisplay={dosagesToDisplay}
      />
    );
  });

  const getOtherFluidsClass = () => {
    if (d5W === true || saline3Percent === true) {
      return "input-container-other-fluids-visible";
    } else {
      return "input-container-other-fluids-invisible";
    }
  };

  return (
    <div
      className={
        d5W === false && saline3Percent === false
          ? `InputContainer-${type} ${getOtherFluidsClass()}`
          : `InputContainer-${type}`
      }
    >
      {inputCards}
    </div>
  );
};

export default InputContainer;
