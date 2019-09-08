export const selectedModalReducer = (state = "", action) => {
  switch (action.type) {
    case "SELECTED_MODAL":
      return action.selectedModal;
    default:
      return state;
  }
};
