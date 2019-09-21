export const labs = {
  1: {
    time: [-2, -1],
    labNum: [-2, -1],
    sodium: [145, 145],
    potassium: [3.6, 3.4],
    chloride: [123, 116],
    bicarbonate: [14, 13],
    bun: [44, 48],
    creatinine: [2.27, 3.12],
    calcium: [7.7, 7.6],
    ionizedCalcium: [0.95, 0.97],
    magnesium: [1.7, 1.9],
    phosphorous: [4.4, 6.3],
    filtrationFraction: [null, null],
    calciumFinalPostFilter: [null, null],
    lactate: [3.3, 6.1],
    albumin: [3.1],
    wbc: [29.3, 29.3],
    hemoglobin: [9.4, 9.4],
    hematocrit: [28.5, 28.5],
    plateletCount: [48, 48],
    ph: [7.07, 7.21],
    pc02: [46, 33],
    granularCasts: ["10-20/LPF"],
    renalEpithelialCasts: ["5-10/HPF"],
    bloodCulture: ["No Growth"],
    urineCulture: ["No Growth"]
  },
  2: {
    time: [-2, -1],
    labNum: [-2, -1],
    sodium: [145, 145],
    potassium: [3.6, 3.4],
    chloride: [123, 116],
    bicarbonate: [14, 13],
    bun: [44, 48],
    creatinine: [2.27, 3.12],
    calcium: [7.7, 7.6],
    ionizedCalcium: [0.95, 0.97],
    magnesium: [1.7, 1.9],
    phosphorous: [4.4, 6.3],
    filtrationFraction: [null, null],
    calciumFinalPostFilter: [null, null],
    lactate: [13.4, 9.6],
    albumin: [2.4, 2.2],
    // AlkPhos: [191],
    // AST: [12,920],
    // ALT: [773],
    // Bilirubin: [1.7],
    // INR: [4.3],
    wbc: [6.7, 6.5],
    hemoglobin: [9.3, 8.6],
    hematocrit: [29.3, 24],
    plateletCount: [85, 92],
    pH: [7.07, 7.22],
    PC02: [28, 35],
    granularCasts: ["0-5/HPF"],
    hyalineCasts: ["11-30/HPF"],
    bloodCulture: ["noGrowth"],
    urineCulture: ["noGrowth"]
  }
};

export const inputOutput = {
  1: {
    fentanyl: [5, 5],
    vasopressin: [6, 6],
    cisatracurium: [20, 20],
    midazolam: [5, 5],
    norepinephrine: [350, 350],
    normalSalineBolus: [0, 8000],
    normalSalineCarrier: [40, 40],
    meropenem: [55, 17],
    levofloxacin: [150, 0],
    calciumGluconate: [0, 0],
    albumin: [0, 0],
    vancomycin: [0, 0],
    tubeFeeds: [0, 0],
    total: [631, 8443],
    previousSixHourTotal: []
  },
  2: {
    acetylcysteine: [98, 102],
    fentanyl: [5, 5],
    vasopressin: [6, 6],
    norepinephrine: [75, 60],
    normalSalineBolus: [4000, 0],
    normalSalineCarrier: [40, 40],
    total: [4224, 213],
    previousSixHourTotal: []
  }
};

export const vitals = {
  1: {
    temperature: [36.7],
    heartRate: [91],
    respiratoryRate: [28],
    bloodPressure: ["138/44"],
    weight: [102]
  },
  2: {
    temperature: [36.7],
    heartRate: [91],
    respiratoryRate: [28],
    bloodPressure: ["138/44"],
    weight: [60]
  }
};

export const productionRates = {
  1: {
    sodium: [0],
    potassium: [0],
    chloride: [0],
    bicarbonate: [-20],
    bun: [40],
    creatinine: [2.5],
    calcium: [0],
    phosphorous: [0],
    magnesium: [0]
  },
  2: {
    sodium: [0],
    potassium: [0],
    chloride: [0],
    bicarbonate: [-20],
    bun: [0],
    creatinine: [0],
    calcium: [0],
    phosphorous: [0],
    magnesium: [0]
  }
};

export const medications = {
  1: {
    scheduledMedication: [
      "Atorvastatin 40 mg Daily",
      "Cefepime 2000 mg q8hr",
      "Hydrocortisone sodium sucinate 50 mg QID",
      "Insulin lispro sliding scale",
      "Levofloxacin 500 mg IV BID",
      "Pantoprazole 40 mg IV Daily",
      "Senna 17.2 mg BID",
      "thyroid (ARMOUR) 120 mg Daily",
      "Vancomycin 1250 mg IV BID"
    ],
    infusions: [
      "Cisatracurium (2 mg/mL)",
      "Fentanyl (50 mcg/mL)",
      "Midazolam (1 mg/mL)",
      "Norepinephrine (64 mcg/mL)",
      "Vasopressin (0.4 U/mL)"
    ]
  },
  2: {
    scheduledMedication: [
      "Atorvastatin 40 mg Daily",
      "Cefepime 2000 mg q8hr",
      "Hydrocortisone sodium sucinate 50 mg QID",
      "Insulin lispro sliding scale",
      "Levofloxacin 500 mg IV BID",
      "Pantoprazole 40 mg IV Daily",
      "Senna 17.2 mg BID",
      "thyroid (ARMOUR) 120 mg Daily",
      "Vancomycin 1250 mg IV BID"
    ],
    infusions: [
      "Cisatracurium (2 mg/mL)",
      "Fentanyl (50 mcg/mL)",
      "Midazolam (1 mg/mL)",
      "Norepinephrine (64 mcg/mL)",
      "Vasopressin (0.4 U/mL)"
    ]
  }
};

export const accessPressure = {
  1: {
    accessPressure: [-94, -101],
    venousPressure: [123, 123],
    effluentPressure: [160, 146]
  },
  2: {
    accessPressure: [-114, -114],
    venousPressure: [232, 232],
    effluentPressure: [269, 271]
  }
};
