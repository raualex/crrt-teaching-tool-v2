export const mockOrders = [
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

export const defaultState = {
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

export const mockReduxOrdersForModal = {
  "Input/Output": [17, 6, 4.2, 22],
  LaboratoryData: [1, 23, 659, 55.4],
  Vitals: [3, 45, 7, 34],
  Medications: [1, 2, 3, 4]
};

export const mockOrderForMigrationFunctions = {
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

export const mockLabDataForTests = {
  time: ['Pre-CRRT 1', 'Pre-CRRT 2', "10:00 - Day 1"],
  labNum: [-2, -1],
  sodium: [145, 145, 145],
  potassium: [3.6, 3.4, 3.3],
  chloride: [123, 116, 111],
  bicarbonate: [14, 13, 14],
  bun: [44, 48, 48],
  creatinine: [2.27, 3.12, 3.1],
  calcium: [7.7, 7.6, 7.5],
  ionizedCalcium: [0.95, 0.97, 0.99],
  magnesium: [1.7, 1.9, 1.2],
  phosphorous: [4.4, 6.3, 5],
  filtrationFraction: [null, null, 25.2],
  calciumFinalPostFilter: [null, null, "22/6"],
  lactate: [3.3, 6.1, 6.8],
  albumin: [3.1],
  wbc: [29.3, 29.3, 34.5],
  hemoglobin: [9.4, 9.4, 10.7],
  hematocrit: [28.5, 28.5, 32],
  plateletCount: [48, 48, 41],
  ph: [7.07, 7.21],
  pc02: [46, 33, 27],
  granularCasts: ["10-20/LPF"],
  renalEpithelialCasts: ["5-10/HPF"],
  bloodCulture: ["No Growth"],
  urineCulture: ["No Growth"]
}

// export default { mockOrders, defaultState, mockReduxOrdersForModal, mockOrderForMigrationFunctions };
