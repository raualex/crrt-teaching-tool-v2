import React, { Component } from "react";
import "./ResultsModal.css";
import { connect } from "react-redux";
import {
  finalResultsMessages /*, vitalsInitial*/
} from "../../utils/initialSpreadsheetData.js";
// import { setResultsTableVariables } from '../../utils/equationsMaster.js';
import { 
  returnHistoricalDose,
  returnNumFiltersUsed
} from "../../utils/equationsMaster.js";
const uuidv4 = require("uuid/v4");

export class ResultsModal extends Component {
  printFailureMessage = () => {
    // let { selectedCase } = this.props;
    // let currentWeight = vitalsInitial[selectedCase.id].weight[vitalsInitial[selectedCase.id].weight.length - 1];
    // let currentPH = labData.ph[labData.ph.length - 1];
    // let resultsOverview;
  };

  printTotalPoints = pointsCategory => {
    let { totalPoints } = this.props;

    if (pointsCategory === "electrolytes") {
      let total = this.sumTotalPoints(totalPoints.sodiumInRange) +
        this.sumTotalPoints(totalPoints.potassiumInRange) +
        this.sumTotalPoints(totalPoints.calciumInRange) +
        this.sumTotalPoints(totalPoints.magnesiumInRange) +
        this.sumTotalPoints(totalPoints.phosphorousInRange)

        return <span>{total}</span>
    } else {
      if (totalPoints[pointsCategory]) {
        let total = this.sumTotalPoints(totalPoints[pointsCategory])
        return <span>{total}</span>
      } else {
        return <span>0</span>
      }
    }
  }

  sumTotalPoints = (pointsArr) => {
    return pointsArr.reduce((acc, num) => {
      acc += num
      return acc
    },0)
  }

  printMaxPoints = pointsCategory => {
    let { orders, totalPoints } = this.props;
    if (pointsCategory === "electrolytes") {
      let totalSodium =
        orders.length * totalPoints.maxPointsPerCycle["sodiumInRange"];
      let totalPotassium =
        orders.length * totalPoints.maxPointsPerCycle["potassiumInRange"];
      let totalCalcium =
        orders.length * totalPoints.maxPointsPerCycle["calciumInRange"];
      let totalMagnesium =
        orders.length * totalPoints.maxPointsPerCycle["magnesiumInRange"];
      let totalPhosphorous =
        orders.length * totalPoints.maxPointsPerCycle["phosphorousInRange"];

      return (
        <span key={uuidv4()}>
          {totalSodium +
          totalPotassium +
          totalCalcium +
          totalMagnesium +
          totalPhosphorous}
        </span>
      );
    } else {
      return <span key={uuidv4()}>{orders.length * totalPoints.maxPointsPerCycle[pointsCategory]}</span>;
    }
  };

  printAvgDose = () => {
    let historicalDose = returnHistoricalDose()
    let doseSum = historicalDose.reduce((acc, dose) => {
      acc += dose
      return acc
    },0)

    return <span>{Math.round((doseSum/historicalDose.length) * 100)/100}</span>
  }

  printAvgFiltrationFraction = () => {
    let { labData } = this.props
    let historicalFiltrationFraction = labData.filtrationFraction.reduce((acc, fractionNum) => {
      acc += fractionNum
      return acc
    },0)

    return <span>{Math.round((historicalFiltrationFraction/labData.filtrationFraction.length) * 100)/100}</span>
  }

  goBackToSimulator = () => {
    const { location, history } = this.props;
    location.pathname = "/simulator";
    history.push("/simulator");
  };

  render() {
    let { 
      hourlyTimestamps,
      labData
    } = this.props;

    return (
      <div>
        <div className="rm-title-container">
          <h1 className="rm-title">CRRT Simulator Results</h1>
        </div>
        <div className="rm-body-container">
          <div className="rm-back-btn-container">
            <button
              className="rm-back-to-simulator-btn"
              onClick={this.goBackToSimulator}
            >
              Back to Simulator
            </button>
          </div>
          <h3 className="rm-body-section-title">Overall Result</h3>
          <p className="rm-body-msg">
            {hourlyTimestamps.length >= 90
              ? finalResultsMessages.successMsg
              : "Failure Message"}
          </p>
          <h3 className="rm-body-section-title">
            Dose
            <a
              href="/textbook#dosing"
              className="textbook-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="far fa-question-circle"></i>
            </a>
          </h3>
          <p className="rm-body-msg">
            {this.printTotalPoints("doseInRange")} earned out of a possible {this.printMaxPoints("doseInRange")}
          </p>
          <p className="rm-body-msg">The average dose delivered was: {this.printAvgDose()}</p>
          <p className="rm-body-msg">
            Kidney Disease: Improving Global Outcomes/KDIGO recommends an
            average dose of 20 – 25 mL/kg/hr. Other experts recommend
            maintaining a "dosing window" of 20-40 mL/kg/hr. See the Dosing
            section in the written material for more information.
          </p>
          <h3 className="rm-body-section-title">
            Filter Life
            <a
              href="/textbook#non-pharmacologic-approach-to-clotting"
              className="textbook-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="far fa-question-circle"></i>
            </a>
          </h3>
          <p className="rm-body-msg">
            {this.printTotalPoints("filtrationFractionInRange")} earned out of a possible {this.printMaxPoints("filtrationFractionInRange")}
          </p>
          <p className="rm-body-msg">
            You used {returnNumFiltersUsed()} over the course of the simulation. The average filter
            life was {(hourlyTimestamps.length - 2)/returnNumFiltersUsed()} hours
          </p>
          <p className="rm-body-msg">Your average filtration fraction was {this.printAvgFiltrationFraction()}</p>
          <p className="rm-body-msg">
            Filtration Fraction measures how much the plasma entering the filter
            is concentrated by ultrafiltration. It should be kept below 25% to
            reduce clotting. See the Non-pharmacologic approach to clotting for
            more information.
          </p>
          <h3 className="rm-body-section-title">
            Electrolytes
            <a
              href="/textbook#electrolytes"
              className="textbook-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="far fa-question-circle"></i>
            </a>
          </h3>
          <p className="rm-body-msg">
          {this.printTotalPoints("electrolytes")} earned out of a possible {this.printMaxPoints("electrolytes")}
          </p>
          <p className="rm-body-msg">Final sodium score was {this.printTotalPoints("sodiumInRange")}</p>
          <p className="rm-body-msg">Final potassium score was {this.printTotalPoints("potassiumInRange")}</p>
          <p className="rm-body-msg">Final calcium score was {this.printTotalPoints("calciumInRange")}</p>
          <p className="rm-body-msg">Final magnesium score was {this.printTotalPoints("magnesiumInRange")}</p>
          <p className="rm-body-msg">Final phosphorous score was {this.printTotalPoints("phosphorousInRange")}</p>
          <p className="rm-body-msg">
            One of the goals of CRRT is to normalize electrolyte values. See
            Electrolytes for an in-depth discussion about how to do this in
            CRRT.
          </p>
          <h3 className="rm-body-section-title">
            Acid/Base
            <a
              href="/textbook#acid-base"
              className="textbook-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="far fa-question-circle"></i>
            </a>
          </h3>
          <p className="rm-body-msg">
          {this.printTotalPoints("pHInRange")} earned out of a possible {this.printMaxPoints("pHInRange")}
          </p>
          <p className="rm-body-msg">Final pH was {labData.ph[labData.ph.length - 1]}</p>
          <p className="rm-body-msg">Lowest pH was {Math.min(...labData.ph)}</p>
          <p className="rm-body-msg">Highest pH was {Math.max(...labData.ph)}</p>
          <p className="rm-body-msg">
            The goal in CRRT is to correct acidosis, and then to maintain the
            patient within a normal pH range. See Acid-Base for more
            information.
          </p>
          <h3 className="rm-body-section-title">Volume</h3>
          <p className="rm-body-msg"># earned out of a possible 200</p>
          <p className="rm-body-msg">
            The patient's cumulative change in volume was # -- Initial weight:
            #, Final weight: #
          </p>
          <p className="rm-body-msg">
            The patient started the case at #% overload
          </p>
          <p className="rm-body-msg">
            At 48 hours, the patient was #% overloaded
          </p>
          <p className="rm-body-msg">
            At 72 hours, the patient was #% overloaded
          </p>
        </div>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  selectedCase: state.selectedCase,
  orders: state.orders,
  labData: state.labData,
  timeBetweenOrders: state.timeBetweenOrders,
  hourlyTimestamps: state.hourlyTimestamps,
  totalPoints: state.totalPoints
});

export default connect(
  mapStateToProps,
  null
)(ResultsModal);
