import React from "react";
import "./LandingPage.css";
import { NavLink } from "react-router-dom";

function LandingPage() {
  return (
    <div className="landing-page">
      <div className="lp-main-container">
        <div className="lp-title-container">
          <h1 className="lp-main-title">CRRT Teaching Tool v.2</h1>
        </div>
        <div className="lp-link-button-container">
          <NavLink className="lp-link-buttons" to="/select_a_case">
            CRRT Simulator
          </NavLink>
          <NavLink className="lp-link-buttons" to="/textbook">
            CRRT Textbook
          </NavLink>
          <NavLink className="lp-link-buttons" to="/calculator">
            CRRT Calculator
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
