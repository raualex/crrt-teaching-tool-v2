import { isLoadingReducer, hasErroredReducer } from "./general-reducers.js";
import { ordersReducer } from "./ordersReducers.js";
import { selectedModalReducer } from "./selection-reducers.js";

describe("isLoadingReducer", () => {
  it("should return the loading state", () => {
    let expected = true;
    let mockAction = {
      type: "IS_LOADING",
      isLoading: true
    };
    let result = isLoadingReducer(false, mockAction);

    expect(result).toEqual(expected);
  });
});

describe("hasErroredReducer", () => {
  it("should return the errored state", () => {
    let expected = true;
    let mockAction = {
      type: "HAS_ERRORED",
      hasErrored: true
    };
    let result = hasErroredReducer(false, mockAction);

    expect(result).toEqual(expected);
  });
});

describe("selectedModalReducer", () => {
  it("should return the selected modal", () => {
    let expected = "Vitals";
    let mockAction = {
      type: "SELECTED_MODAL",
      selectedModal: "Vitals"
    };
    let result = selectedModalReducer("", mockAction);

    expect(result).toEqual(expected);
  });
});

describe("ordersReducer", () => {
  it("should return the orders state", () => {
    let mockOrder = {
      modality: "Pre-filter CVVH",
      sodium: 1,
      potassium: 2,
      chloride: 3,
      bicarbonate: 1,
      calcium: 2,
      magnesium: 3,
      phosphorous: 4,
      grossUltraFiltration: 2,
      bloodFlowRate: 1,
      replacementFluidFlowRate: 7,
      saline3Percent: true,
      d5W: false,
      sodiumPhosphate15mmol100ml: true,
      anticoagulation: "Citrate",
      id: 12345
    };

    let expected = [
      {
        modality: "Pre-filter CVVH",
        sodium: 1,
        potassium: 2,
        chloride: 3,
        bicarbonate: 1,
        calcium: 2,
        magnesium: 3,
        phosphorous: 4,
        grossUltraFiltration: 2,
        bloodFlowRate: 1,
        replacementFluidFlowRate: 7,
        saline3Percent: true,
        d5W: false,
        sodiumPhosphate15mmol100ml: true,
        anticoagulation: "Citrate",
        id: 12345
      }
    ];
    let mockAction = {
      type: "SUBMIT_ORDER",
      order: mockOrder
    };
    let result = ordersReducer([], mockAction);
    expect(result).toEqual(expected);
  });
});
