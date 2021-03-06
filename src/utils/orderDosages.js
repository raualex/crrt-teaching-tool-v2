const orderDosages = {
  requiredRanges: {
    sodium: {
      min: 130,
      max: 150
    },
    potassium: {
      min: 0,
      max: 4
    },
    chloride: {
      min: 95,
      max: 110
    },
    bicarbonate: {
      min: 20,
      max: 40
    },
    calcium: {
      min: 0,
      max: 3
    },
    magnesium: {
      min: 0,
      max: 2
    },
    phosphorous: {
      min: 0,
      max: 1
    },
    grossUltraFiltration: {
      min: 0,
      max: 2000
    },
    bloodFlowRate: {
      min: 200,
      max: 400
    },
    replacementFluidFlowRate: {
      min: 0,
      max: 8
    }
  },
  errorMessages: {
    sodium:
      "The hospital pharmacy can only compound sodium between 130 and 150.  Use D5W or 3% normal saline if needed",
    potassium:
      "The hospital pharmacy will not compound fluid with a potassium above 4 mg/dL",
    chloride:
      "The hospital pharmacy can only compound chloride between 95 and 110",
    bicarbonate:
      "The hospital pharmacy can only compound bicarbonate between 20 and 40",
    calcium:
      "The hospital pharmacy can only compound calcium between 0 and 3 mEq/L",
    magnesium:
      "The hospital pharmacy can only compound magnesium between 0 and 2 mgd/L",
    phosphorous:
      "The hospital pharmacy cannot compound fluid with > 1mg/dL of phosphorous, due to precipitation of calcium phosphate.",
    grossUltraFiltration:
      "The CRRT machine will not accept ultrafiltration rates above 2,000 mL/hour",
    bloodFlowRate: "THESE MESSAGE IS PROVISIONAL. NEED ACTUAL ONE",
    replacementFluidFlowRate:
      "The CRRT machine cannot deliver fluid above 8 L/hr"
  },
  dosageNames: {
    sodium: "Sodium (mmol/L)",
    potassium: "Potassium (mmol/L)",
    chloride: "Chloride (mmol/L)",
    bicarbonate: "Bicarbonate (mmol/L)",
    calcium: "Calcium (mEq/L)",
    magnesium: "Magnesium (mg/dL)",
    phosphorous: "Phosphorous (mg/dL)",
    grossUltraFiltration: "Gross Ultrafiltration (ml/Hr)",
    bloodFlowRate: "Blood Flow Rate (mL/min)",
    replacementFluidFlowRate: "Fluid Flow Rate (L/hr)",
    otherFluidsBolusValue: "Bolus (mL)",
    otherFluidsInfusionValue: "Continuous Infusion Rate (ml/Hr)",
    citrateFlowRate: "Citrate Flow Rate (mL/hr)",
    caClInfusionRate: "CaCl Infusion Rate (mL/hr)"
  },
  modalityDosages: ["Pre-filter CVVH", "Post-filter CVVH", "CVVHD"],
  anticoagulationDosages: ["None", "Citrate"],
  replacementFluidDosages: [
    "sodium",
    "potassium",
    "chloride",
    "bicarbonate",
    "calcium",
    "magnesium",
    "phosphorous",
    "grossUltraFiltration",
    "bloodFlowRate",
    "replacementFluidFlowRate"
  ],
  otherFluidDosages: ["otherFluidsBolusValue", "otherFluidsInfusionValue"],
  citrateDosages: ["citrateFlowRate", "caClInfusionRate"]
};

export default orderDosages;
