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

export const addResultsMessagesToOrder = (messages, currentOrder) => ({
  type: "ADD_RESULTS_MESSAGES_TO_ORDER",
  messages,
  currentOrder
});
