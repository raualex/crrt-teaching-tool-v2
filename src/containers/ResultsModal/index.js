import React, { Component } from "react";
import "./ResultsModal.css";
import { connect } from "react-redux";
import {
  finalResultsMessages /*, vitalsInitial*/
} from "../../utils/initialSpreadsheetData.js";
// import { setResultsTableVariables } from '../../utils/equationsMaster.js';

export class ResultsModal extends Component {
  printFailureMessage = () => {
    // let { selectedCase } = this.props;
    // let currentWeight = vitalsInitial[selectedCase.id].weight[vitalsInitial[selectedCase.id].weight.length - 1];
    // let currentPH = labData.ph[labData.ph.length - 1];
    // let resultsOverview;
  };

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
        totalSodium +
        totalPotassium +
        totalCalcium +
        totalMagnesium +
        totalPhosphorous
      );
    } else {
      return orders.length * totalPoints.maxPointsPerCycle[pointsCategory];
    }
  };

  goBackToSimulator = () => {
    const { location, history } = this.props;
    location.pathname = "/simulator";
    history.push("/simulator");
  };

  render() {
    let { hourlyTimestamps } = this.props;

    return (
      <div>
        <div className="rm-title-container">
          <h1 className="rm-title">CRRT Simulator Results</h1>
        </div>
        <div className="rm-body-container">
          <div className="rm-back-btn-container">
            <button
              className="rm-back-to-simulator-btn"
              onClick={() => this.goBackToSimulator()}
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
            # earned out of a possible {this.printMaxPoints("doseInRange")}
          </p>
          <p className="rm-body-msg">The average dose delivered was: #</p>
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
            # earned out of a possible{" "}
            {this.printMaxPoints("filtrationFractionInRange")}
          </p>
          <p className="rm-body-msg">
            You used # over the course of the simulation. The average filter
            life was # hours
          </p>
          <p className="rm-body-msg">Your average filtration fraction was #</p>
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
            # earned out of a possible {this.printMaxPoints("electrolytes")}
          </p>
          <p className="rm-body-msg">Final sodium score was #</p>
          <p className="rm-body-msg">Final potassium score was #</p>
          <p className="rm-body-msg">Final calcium score was #</p>
          <p className="rm-body-msg">Final magnesium score was #</p>
          <p className="rm-body-msg">Final phosphorous score was #</p>
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
            # earned out of a possible {this.printMaxPoints("pHInRange")}
          </p>
          <p className="rm-body-msg">Final pH was #</p>
          <p className="rm-body-msg">Lowest pH was #</p>
          <p className="rm-body-msg">Highest pH was #</p>
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
  timeBetweenOrders: state.timeBetweenOrders,
  hourlyTimestamps: state.hourlyTimestamps,
  totalPoints: state.totalPoints
});

export default connect(
  mapStateToProps,
  null
)(ResultsModal);
