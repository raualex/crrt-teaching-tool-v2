import React, { Component } from "react";
import { HashLink as Link } from 'react-router-hash-link';
import "./InputCard.css";
import orderDosages from "../../utils/orderDosages.js";

class InputCard extends Component {
  getInputHeader = () => {
    const { dosageNames } = orderDosages;
    const { dosage, currentInputState, dosagesToDisplay } = this.props;
    const { saline3Percent, d5W } = currentInputState;

    if (saline3Percent && dosagesToDisplay.includes("otherFluidsBolusValue")) {
      return `Sodium ${dosageNames[dosage]}`;
    } else if (d5W && dosagesToDisplay.includes("otherFluidsBolusValue")) {
      return `D5W ${dosageNames[dosage]}`;
    } else {
      return dosageNames[dosage];
    }
  };

  render() {
    const {
      type,
      currentInput,
      handleInputChange,
      dosage,
      dosageErrors,
      radioButtonCategory
    } = this.props;
    const { errorMessages /*, dosageNames*/ } = orderDosages;

    return (
      <article className={`input-container-${type} input-container-${dosage}`}>
        {type === "number" && (
          <div className="InputCard-text">
            <div className={`header-info-container-${type}`}>
              <h4 className={`input-text-header input-text-header-${type}`}>
                {this.getInputHeader()}
              </h4>
              <Link
                to={`/#/textbook#${dosage}`}
                className="textbook-link"
                target="_blank"
                rel="noopener noreferrer">
                <i className="far fa-question-circle"></i>
              </Link>
            </div>
            <input
              type="text"
              className="input-number"
              pattern="[0-9]*"
              name={dosage}
              value={isNaN(currentInput) ? "" : currentInput}
              onChange={event => handleInputChange(event)}
            />
            <div
              className={
                "input-error-container" +
                (dosageErrors.includes(dosage) && " error-add-border")
              }
            >
              <p className="input-error-text">
                {dosageErrors.includes(dosage) ? errorMessages[dosage] : ""}
              </p>
            </div>
          </div>
        )}

        {type === "radio" && (
          <div className="modality-radio">
            <label className="modality-radio-label">
              <input
                type="radio"
                className="input-radio"
                name={radioButtonCategory}
                value={dosage}
                checked={
                  currentInput.modality === dosage ||
                  currentInput.anticoagulation === dosage
                }
                onChange={event => handleInputChange(event)}
              />
              {dosage}

              {dosage === "Citrate" && (
                <Link
                  to={`/#/textbook#${dosage}`}
                  className="textbook-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="far fa-question-circle"></i>
                </Link>
              )}
            </label>
          </div>
        )}
      </article>
    );
  }
}

export default InputCard;
