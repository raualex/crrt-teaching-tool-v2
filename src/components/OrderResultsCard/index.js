import React from "react";
import "./OrderResultsCard.css";
const uuidv4 = require("uuid/v4");

const OrderResultsCard = ({ timeStamp, messages }) => {
  const messageList = messages.map(message => {
    return (
      <li key={uuidv4()} className="order-results-message">
        {message}
      </li>
    );
  });

  return (
    <div className="OrderResultsCard">
      <h4 className="order-results-header">{timeStamp}</h4>
      <ul className="order-results-message-container">{messageList}</ul>
      <hr className="order-results-break" />
    </div>
  );
};

export default OrderResultsCard;
