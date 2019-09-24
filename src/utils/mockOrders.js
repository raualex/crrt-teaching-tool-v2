const mockOrders = [
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
    anticoagulation: "Citrate"
  },
  {
    modality: "Pre-filter CVVH",
    sodium: 4,
    potassium: 2,
    chloride: 5,
    bicarbonate: 6,
    calcium: 7,
    magnesium: 5,
    phosphorous: 7,
    grossUltraFiltration: 2,
    bloodFlowRate: 3,
    replacementFluidFlowRate: 2,
    saline3Percent: false,
    d5W: true,
    sodiumPhosphate15mmol100ml: false,
    anticoagulation: "None"
  }
];

const defaultState = {
  modality: "Pre-filter CVVH",
  sodium: 0,
  potassium: 0,
  chloride: 0,
  bicarbonate: 0,
  calcium: 0,
  magnesium: 0,
  phosphorous: 0,
  grossUltraFiltration: 0,
  bloodFlowRate: 0,
  replacementFluidFlowRate: 0,
  saline3Percent: false,
  d5W: false,
  sodiumPhosphate15mmol100ml: false,
  anticoagulation: "None"
};

const mockReduxOrdersForModal = {
  "Input/Output": [17, 6, 4.2, 22],
  LaboratoryData: [1, 23, 659, 55.4],
  Vitals: [3, 45, 7, 34],
  Medications: [1, 2, 3, 4]
};

const mockOrderForMigrationFunctions = {
  fluidDialysateValues: {
    sodium: 135,
    potassium: 2,
    chloride: 100,
    bicarbonate: 20,
    calcium: 2,
    magnesium: 1,
    phosphorous: 1,
    BUN: 0,
    creatinine: 0
  },
  modality: "Pre-filter CVVH",
  anticoagulation: "citrate",
  BFR: 200,
  Qr: 2,
  Qd: 2,
  grossUF: 500,
  timeToNextLabs: 8,
  otherFluidsSaline: false,
  otherFluidsD5W: true,
  otherFluidsSodiumPhosphate: false,
  otherFluidsBolusValue: 20,
  otherFluidsInfusionValue: 2,
  citrateFlowRate: 10,
  caClInfusionRate: 2
}

const mockCurrentOrdersForMigrationFunctions = {
  
}

export default { mockOrders, defaultState, mockReduxOrdersForModal, mockOrderForMigrationFunctions };
