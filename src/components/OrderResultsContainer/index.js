import React from "react";
import OrderResultsCard from "../OrderResultsCard";
import "./OrderResultsContainer.css";
const uuidv4 = require("uuid/v4");

const OrderResultsContainer = ({ orderResults }) => {
  let orderResultsCards;
  const defaultMessage = [
    "Welcome to the CRRT education application simulator! Important information about the current case will appear in this box."
  ];

  if (orderResults.length) {
    orderResultsCards = orderResults.map(result => {
      console.log("result!: ", result);
      return <OrderResultsCard key={uuidv4()} {...result} />;
    });
  } else {
    orderResultsCards = (
      <OrderResultsCard
        key={uuidv4()}
        timeStamp={null}
        messages={defaultMessage}
      />
    );
  }

  return (
    <div className="OrderResultsContainer">
      <div className="orders-results-sidebar"></div>
      <div className="orders-results-main-content">{orderResultsCards}</div>
    </div>
  );
};

export default OrderResultsContainer;
