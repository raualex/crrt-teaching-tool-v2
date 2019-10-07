import React from "react";
import "./InputContainer.css";
import InputCard from "../../containers/InputCard";

const InputContainer = ({
  type,
  currentInputState,
  handleInputChange,
  dosagesToDisplay,
  radioButtonCategory
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

  return <div className={`InputContainer-${type}`}>{inputCards}</div>;
};

export default InputContainer;
