export const submitOrder = order => ({
  type: "SUBMIT_ORDER",
  order
});

export const setTime = ({ currentTime, currentDay }) => ({
  type: "SET_TIME",
  currentTime,
  currentDay
});

export const setTimeBetweenOrders = timeBetweenOrders => ({
  type: "SET_TIME_BETWEEN_ORDERS",
  timeBetweenOrders
});

export const validateTimeBetweenOrders = isValid => ({
  type: "VALIDATE_TIME_BETWEEN_ORDERS",
  timeBetweenOrdersIsValid: isValid
});

export const addResultsMessagesToOrder = (messages, currentOrder) => {

  if (currentOrder) {
    return {
      type: "ADD_RESULTS_MESSAGES_TO_ORDER",
      messages,
      currentOrder
    }
  } else {
    return {
      type: "RESET_RESULTS_MESSAGES_TO_ORDER",
      messages,
      currentOrder
    }
  }
};

export const recordHourlyTimestamp = timeStamps => ({
  type: "RECORD_HOURLY_TIMESTAMP",
  timeStamps
});

export const recordSingleOrderTimestamp = timeStamps => ({
  type: "RECORD_SINGLE_ORDER_TIMESTAMP",
  timeStamps
});

export const setCurrentPoints = points => ({
  type: "SET_CURRENT_POINTS",
  points
});

export const setNewOrdersActiveStatus = (modal, bool) => ({
  type: "SET_NEW_ORDERS_ACTIVE_STATUS",
  modal,
  bool
});
