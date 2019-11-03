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

  return (
    <div
      className={`InputContainer-${type} ${(d5W === true ||
        saline3Percent === true) &&
        "hidden-input-container"}`}
    >
      {inputCards}
    </div>
  );
};

export default InputContainer;
