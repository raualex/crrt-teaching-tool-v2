import React, { Component } from 'react';
import './ResultsModal.css';
import { connect } from 'react-redux';

export class ResultsModal extends Component {
  // constructor(props) {
  //   super(props)
  // }

  render() {
    return (
      <div>
        <div className='rm-title-container'>
          <h1 className='rm-title'>CRRT Simulator Results</h1>
        </div>
        <div className='rm-body-container'>
          <h3 className='rm-body-section-title'>Overall Result</h3>
          <p>Your patient has...</p>
          <h3 className='rm-body-section-title'>
            Dose
            <a
            href="https://github.com/raualex/crrt-teaching-tool-v2"
            className="textbook-link"
            >
            <i className="far fa-question-circle"></i>
            </a>
          </h3>
          <p># earned out of a possible #</p>
          <p>The average dose delivered was: #</p>
          <p>Kidney Disease: Improving Global Outcomes/KDIGO recommends an average dose of 20 – 25 mL/kg/hr. Other experts recommend maintaining a "dosing window" of 20-40 mL/kg/hr. See the Dosing section in the written material for more information.</p>
          <h3 className='rm-body-section-title'>
            Filter Life
            <a
            href="https://github.com/raualex/crrt-teaching-tool-v2"
            className="textbook-link"
            >
            <i className="far fa-question-circle"></i>
            </a>
          </h3>
          <p># earned out of a possible #</p>
          <p>You used # over the course of the simulation. The average filter life was # hours</p>
          <p>Your average filtration fraction was #</p>
          <p>Filtration Fraction measures how much the plasma entering the filter is concentrated by ultrafiltration. It should be kept below 25% to reduce clotting. See the Non-pharmacologic approach to clotting for more information.</p>
          <h3 className='rm-body-section-title'>
            Electrolytes
            <a
            href="https://github.com/raualex/crrt-teaching-tool-v2"
            className="textbook-link"
            >
            <i className="far fa-question-circle"></i>
            </a>
          </h3>
          <p># earned out of a possible #</p>
          <p>Final sodium score was #</p>
          <p>Final potassium score was #</p>
          <p>Final calcium score was #</p>
          <p>Final magnesium score was #</p>
          <p>Final phosphorous score was #</p>
          <p>One of the goals of CRRT is to normalize electrolyte values. See Electrolytes for an in-depth discussion about how to do this in CRRT.</p>
          <h3 className='rm-body-section-title'>
            Acid/Base
            <a
            href="https://github.com/raualex/crrt-teaching-tool-v2"
            className="textbook-link"
            >
            <i className="far fa-question-circle"></i>
            </a>
          </h3>
          <p># earned out of a possible #</p>
          <p>Final pH was #</p>
          <p>Lowest pH was #</p>
          <p>Highest pH was #</p>
          <p>The goal in CRRT is to correct acidosis, and then to maintain the patient within a normal pH range. See Acid-Base for more information.</p>
          <h3 className='rm-body-section-title'>
            Volume
            <a
            href="https://github.com/raualex/crrt-teaching-tool-v2"
            className="textbook-link"
            >
            <i className="far fa-question-circle"></i>
            </a>
          </h3>
          <p># earned out of a possible #</p>
          <p>The patient's cumulative change in volume was # -- Initial weight: #, Final weight: #</p>
          <p>The patient started the case at #% overload</p>
          <p>At 48 hours, the patient was #% overloaded</p>
          <p>At 72 hours, the patient was #% overloaded</p>
        </div>
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  hourlyTimestamps: state.hourlyTimestamps
});

export default connect(mapStateToProps, null)(ResultsModal);