import {
  labsInitial,
  inputOutputInitial,
  vitalsInitial,
  productionRatesInitial,
  medicationsInitial,
  // accessPressureInitial,
  labsCase1
} from "./initialSpreadsheetData.js";
// import { mockOrderForMigrationFunctions } from "./mockOrders.js";

var _points = {
  bloodFlowRateInRange: [],
  sodiumInRange: [],
  potassiumInRange: [],
  pHInRange: [],
  calciumInRange: [],
  magnesiumInRange: [],
  phosphorousInRange: [],
  grossUltrafiltrationInRange: [],
  filtrationFractionInRange: [],
  doseInRange: [],
  maxPointsPerCycle: {
    bloodFlowRateInRange: 5,
    sodiumInRange: 5,
    potassiumInRange: 5,
    pHInRange: 10,
    calciumInRange: 5,
    magnesiumInRange: 5,
    phosphorousInRange: 10,
    grossUltrafiltrationInRange: 0,
    filtrationFractionInRange: 5,
    doseInRange: 20
  }
};

var netInputOutputCounter = 0;
var timesNetInputOutputCounterHitEight = 0;
// NOTE:
// _runTestMode and _runTestLabsNum can be used for testing
// to autofill data, automatically run labs, etc.
// var _runTestMode = true;
// NOTE: 16 labs is a full case for case #1
// var _runTestLabsNum = 0;

var _numFiltersUsed = 1;
// var _currentCycleClotNumber = 0;
// var _messages = [];
var _newMessages = [];
// var _caseStudies;
var _currentOrders;
var _currentCaseStudyId;
var _currentCaseStudy;
var _currentCaseStudySheet = {};
var _currentDose;
var _currentTime = 10;
// var newTime = 0;
let _usedCitrate = false;
let _usedCitrateFirst = false;
var _historicalDose = [];
var _historicalOverload = [];
var _caseOver = false;
// var _dynamicLabs = [
//   "sodium",
//   "potassium",
//   "chloride",
//   "bicarbonate",
//   "bun",
//   "creatinine",
//   "calcium",
//   "ionizedCalcium",
//   "magnesium",
//   "phosphorous",
//   "ph",
//   "filtrationFraction",
//   "calciumFinalPostFilter"
// ];
let _staticLabs = [
  "lactate",
  "albumin",
  "wbc",
  "hemoglobin",
  "hematocrit",
  "plateletCount",
  "pc02",
  "granularCasts",
  "renalEpithelialCasts",
  "bloodCulture",
  "urineCulture"
];
// var _allLabs = _dynamicLabs.concat(_staticLabs);
// var _labs = [
//   "sodium",
//   "potassium",
//   "chloride",
//   "bicarbonate",
//   "bun",
//   "creatinine",
//   "calcium",
//   "ionizedCalcium",
//   "magnesium",
//   "phosphorous",
//   "calciumFinalPostFilter",
//   "filtrationFraction",
//   "ph"
// ];
// var _vitals = [
//   "bloodPressure",
//   "respiratoryRate",
//   "temperature",
//   "heartRate",
//   "weight"
// ];
// var _physicalExam = [
//   "general",
//   "ENT",
//   "heart",
//   "lungs",
//   "abdomen",
//   "extremities",
//   "psych"
// ];
// NOTE: Our starting time will be 10am
// var _startingTime = moment(0, "HH");
// var _headerTime = 10;

//AEla lab-header-day-time branch start
// var _headerTime24Hour = 10;
// var _headerTimeAmPm = "AM";
// var _headerDay = 1;

// var _hourlyHeaderTime = 10;
// var _hourlyHeaderTime24Hour = 10;
// var _hourlyHeaderTimeAmPm = "AM";
// var _hourlyHeaderDay = 1;
//AEla lab-header-day-time branch end
//ARau orders counter start
// let _ordersCounter = 0;
//ARau orders counter end

// var _ordersSodium = "";
// var _ordersPotassium = "";
// var _ordersChloride = "";
// var _ordersBicarbonate = "";
// var _ordersCalcium = "";
// var _ordersMagnesium = "";
// var _ordersPhosphorous = "";
// var _ordersGrossUltrafiltration = "";
// var _ordersBloodFlowRate = "";
// var _ordersReplacementFluidFlowRate = "";
// var _ordersCitrateFlowRate = "";
// var _ordersCaClInfusionRate = "";

// NOTE:
// We are storing each of our lab values in an array. This allows
// us to keep track of historical values. Since new values will
// always be pushed onto the front of the array, current value will
// be indexed at array.length - 1
var _historicalLabs = {
  sodium: [],
  potassium: [],
  chloride: [],
  bicarbonate: [],
  bun: [],
  creatinine: [],
  calcium: [],
  ionizedCalcium: [],
  magnesium: [],
  phosphorous: [],
  calciumFinalPostFilter: [],
  filtrationFraction: [],
  ph: [],
  lactate: [],
  albumin: [],
  wbc: [],
  hemoglobin: [],
  hematocrit: [],
  plateletCount: [],
  pc02: [],
  granularCasts: [],
  renalEpithelialCasts: [],
  bloodCulture: [],
  urineCulture: []
};

var _historicalInputOutput = {
  totalInput: [],
  ultrafiltration: [],
  totalOutput: [],
  netInputOutput: [],
  cumulativeInputOutput: [],
  citrate: [],
  calciumChloride: []
};

// var _dynamicLabs = [
//   "sodium",
//   "potassium",
//   "chloride",
//   "bicarbonate",
//   "bun",
//   "creatinine",
//   "calcium",
//   "ionizedCalcium",
//   "magnesium",
//   "phosphorous",
//   "ph",
//   "filtrationFraction"
// ];
var _dynamicComponents = [
  "sodium",
  "potassium",
  "chloride",
  "bicarbonate",
  "bun",
  "creatinine",
  "calcium",
  "phosphorous",
  "magnesium"
];
console.log(_dynamicComponents);
_staticLabs = [
  "lactate",
  "albumin",
  "wbc",
  "hemoglobin",
  "hematocrit",
  "plateletCount",
  "pc02",
  "granularCasts",
  "renalEpithelialCasts",
  "bloodCulture",
  "urineCulture"
];
var _historicalVitals = {
  bloodPressure: [],
  respiratoryRate: [],
  temperature: [],
  heartRate: [],
  weight: []
};

// function _caseStudy(startingData) {
//   this.startingData = startingData;
// }

// _caseStudies = {
//   1: new _caseStudy({
//     sodiumProductionRate: 0,
//     potassiumProductionRate: 4.3,
//     chlorideProductionRate: 0,
//     bicarbonateProductionRate: -20,
//     BUNProductionRate: 40,
//     creatinineProductionRate: 3,
//     calciumProductionRate: 0,
//     filtrationFractionStarting: 0,
//     gender: "female",
//     usualWeight: 86.8,
//     historyOfPresentIllness: {
//       overview: [
//         "A 72 year old lady with a history of HTN, COPD, and DM is brought to the Emergency Department by ambulance after being found unresponsive by family members.",
//         "Upon arrival she is found to be in acute hypoxemic respiratory failure requiring emergent intubation.",
//         "Initial vital signs are temperature 39.1 C, HR 128, BP 78/53, RR 30.",
//         "A chest x-ray shows a left lower lobe infiltrate.",
//         "The patient is started on norepinephrine.",
//         "Creatinine is 2.7, up from 0.86 one month earlier.",
//         "Her urine output in the first 4 hours is 44 cc’s of urine.",
//         "The decision is made to start the patient on continuous renal replacement therapy. A 15 cm Mahurkar in the right internal jugular vein."
//       ],
//       pastMedicalHistory: [
//         "Hypertension",
//         "Insulin-dependent Diabetes Mellitus Type 2",
//         "COPD",
//         "CKD 3 (baseline creatinine 1.4 - 1.6)"
//       ],
//       pastSurgicalHistory: ["Abdominal hernia repair"],
//       socialHistory: [
//         "Current smoker, 1/2 pack per day. Has been smoking since age 17.",
//         "No alcohol or other drug use.",
//         "Retired from work in retail."
//       ],
//       familyHistory: ["No family history of renal disease."]
//     },
//     vitalSigns: {
//       bloodPressureStarting: "78/53",
//       respiratoryRateStarting: 30,
//       temperatureStarting: 39.1,
//       heartRateStarting: 128,
//       weightStarting: 102
//     },
//     medications: [],
//     imaging: [
//       "1500: Chest X-ray",
//       "The chest x-ray shows a left lower lobe consolidation consistent with infection. The remainder of the lungs are clear."
//     ],
//     physicalExam: {
//       general: "Appears acutely ill",
//       ENT: "Intubated",
//       heart: "Tachycardic, no murmurs, rubs, or gallops",
//       lungs: "Decreased breath sounds in the left lower lobe",
//       abdomen: "Non-distended",
//       extremities: "No edema",
//       psych: "Intubated and sedated"
//     }
//   }),
//   2: new _caseStudy({
//     sodiumProductionRate: 0,
//     potassiumProductionRate: 4.3,
//     chlorideProductionRate: 0,
//     bicarbonateProductionRate: -20,
//     BUNProductionRate: 40,
//     creatinineProductionRate: 3,
//     calciumProductionRate: 0,
//     filtrationFractionStarting: 0,
//     gender: "female",
//     usualWeight: 86.8,
//     historyOfPresentIllness: {
//       overview: [
//         "Jackie Smith is a 51 year old lady with a history of alcohol abuse, chronic pancreatitis, major depressive disorder, and recurrent c. diff colitis who was brought to the Emergency Department by ambulance after being found unresponsive by family members.",
//         "Empty bottles of Percocet and Tylenol were found nearby.  Initial labs reveal an AST of 12,000 and an INR of 4.1.",
//         "Upon arrival she is unresponsive and not protecting her airway.  She undergoes emergent intubation.",
//         "Initial vital signs are HR 130, BP 83/37, RR 28.  She is started on norepinephrine and vasopressin.",
//         "She does not make any urine while in the emergency department, and intial creatinine is 3.1, up from 0.46 one month earlier.",
//         "The decision is made to start the patient on continuous renal replacement therapy.  A 15 cm Mahurkar catheter is placed in the right internal jugular vein."
//       ],
//       pastMedicalHistory: [
//         "Hypertension",
//         "Alcohol abuse",
//         "Chronic pancreatitis",
//         "Pulmonary embolism",
//         "Diffuse chronic pain",
//         "Major Depressive Disorder"
//       ],
//       pastSurgicalHistory: ["Back surgery", "Hysterectomy"],
//       socialHistory: ["Never smoker", "Heavy alcohol use, ongoing"],
//       familyHistory: [
//         "No family history of renal disease on mom's side.",
//         "Dad's history is unknown"
//       ]
//     },
//     vitalSigns: {
//       bloodPressureStarting: "78/53",
//       respiratoryRateStarting: 30,
//       temperatureStarting: 39.1,
//       heartRateStarting: 128,
//       weightStarting: 102
//     },
//     medications: [
//       "Diazepam 5 mg four times daily as needed",
//       "Fluoxetine 40 mg Daily",
//       "Gabapentin 300 mg TID",
//       "Percocet 1-2 tablets q6hrs prn",
//       "Zolpidem 10 mg qPM prn for insomnia"
//     ],
//     imaging: [
//       "13:42 – CT Brain w/o contrast",
//       "1) No acute intracranial abnormalities.",
//       "2) Mild diffuse cerebral volume loss.  These findings do not totally exclude mild cerebral edema, as the baseline of the patient is not known.",
//       "",
//       "15:01 – XR Chest Single View",
//       "1) Limited portable chest x-ray demonstrates no focal consolidation, pneumothorax or pleural effusion.",
//       "2) Distal side-port of the esophagogastric tube is not clearly below the gastroesophageal junction.  Recommend advancing 5 cm.",
//       "",
//       "19:12 – US Abdomen Complete",
//       "1) Hepatomegaly with increased parenchymal echogenicity and coarsened echotexture suggesting chronic liver disease.",
//       "2) Patent hepatic vasculature in the appropriate direction of flow, without evidence of thrombus.",
//       "3) Status post cholecystectomy, prominence of the extrahepatic biliary tree likely related to postcholecystectomy status in the absence of elevated bilirubin."
//     ],
//     physicalExam: {
//       general: "Appears acutely ill",
//       ENT: "Intubated",
//       heart: "Tachycardic, no murmurs, rubs, or gallops",
//       lungs: "Clear to auscultation",
//       abdomen: "Distended, non-edematous",
//       extremities: "No edema",
//       psych: "Intubated and sedated"
//     }
//   })
// };

// function initialize(caseId) {
//   console.log("CRRTApp : initialize()");
//   removeAllHighlights();
//   if (!caseId) {
//     initializeCaseStudyID();
//   } else {
//     initializeCaseStudyID(caseId);
//   }
//   var d1 = $.Deferred();
//   initializeSpreadsheet(d1);
//   $.when(d1).done(function() {
//     initializeCaseStudy();
//     setPageVariables();
//     initializeOrderForm();

//     $body = $("body");
//     $body.removeClass("loading");

//     if (_runTestMode) {
//       setTestFormInputs();
//       if (_runTestLabsNum !== 0) {
//         for (var i = 0; i < _runTestLabsNum; i++) {
//           runLabs();
//         }
//       }
//       setTestFormInputs();
//     }
//   });
// }

// function setAnticoagulationFormElements(anticoagulationValue) {
//   switch (anticoagulationValue) {
//     case "citrate":
//       showCitrateFormOptions();
//       break;
//     case "heparin":
//       showHeparinFormOptions();
//       break;
//     case "none":
//       showNoAnticoagulationFormOptions();
//       break;
//     default:
//       showNoAnticoagulationFormOptions();
//   }
// }

// function setPageVariables() {
// setCRRTDisplay();
// }

// // function setCRRTDisplay() {
// //   if (_currentTime !== 0) {
// //     $("#noOrders").hide();
// //     $("#CRRTDisplay").show();
// //     $(".therapyFluid").text(_currentOrders.Qr);
// //     $(".accessPressure").text(getCurrentAccessPressure("accessPressure"));
// //     $(".dose").text(_currentDose);
// //     $(".ultrafiltrationRate").text(_currentOrders.grossUF);
// //     $(".venousPressure").text(getCurrentAccessPressure("venousPressure"));
// //     $(".filtrationFraction").text(_currentOrders.filtrationFraction);
// //     $(".bloodFlowRate").text(_currentOrders.BFR);
// //     $(".effluentPressure").text(getCurrentAccessPressure("effluentPressure"));
// //   }
// // }

// // $("#restart-case-btn").on("click", resetCase);

// // function resetCase() {
// //   clearFormInputVariables();
// //   for (var i = 1; i <= _ordersCounter; i++) {
// //     $("#testing").remove();
// //   }
// //   $("#ordersButton").show();
// //   _caseOver = false;
// //   initialize(_currentCaseStudyId);
// // }

// // AEla resetCase functions end

// // function setPageTime() {
// //   $(".currentTime").text(currentTimeToTimestamp(false));
// //   $(".currentTimeWithElapsed").text(currentTimeToTimestamp(true));
// // }

// // function setPageCaseStudyId() {
// //   $("#currentCaseStudyId").text(_currentCaseStudyId);
// // }

// // function setPageHistoryOfPresentIllness() {
// //   $("#historyOfPresentIllness #overview").html(
// //     arrayToHTMLList(
// //       _currentCaseStudy.startingData["historyOfPresentIllness"]["overview"]
// //     )
// //   );
// //   $("#historyOfPresentIllness #pastMedicalHistory").html(
// //     arrayToHTMLList(
// //       _currentCaseStudy.startingData["historyOfPresentIllness"][
// //         "pastMedicalHistory"
// //       ]
// //     )
// //   );
// //   $("#historyOfPresentIllness #pastSurgicalHistory").html(
// //     arrayToHTMLList(
// //       _currentCaseStudy.startingData["historyOfPresentIllness"][
// //         "pastSurgicalHistory"
// //       ]
// //     )
// //   );
// //   $("#historyOfPresentIllness #socialHistory").html(
// //     arrayToHTMLList(
// //       _currentCaseStudy.startingData["historyOfPresentIllness"][
// //         "socialHistory"
// //       ]
// //     )
// //   );
// //   $("#historyOfPresentIllness #familyHistory").html(
// //     arrayToHTMLList(
// //       _currentCaseStudy.startingData["historyOfPresentIllness"][
// //         "familyHistory"
// //       ]
// //     )
// //   );
// // }

// // function setPageImaging() {
// //   $("#imaging").html(
// //     arrayToHTMLList(_currentCaseStudy.startingData["imaging"])
// //   );
// // }

// // function setPagePhysicalExam() {
// //   for (var i = 0; i < _physicalExam.length; i++) {
// //     $("#physicalExam #" + _physicalExam[i]).html(
// //       _currentCaseStudy.startingData["physicalExam"][_physicalExam[i]]
// //     );
// //   }
// // }

// function initializeCaseStudyID(caseId) {
//   // _currentCaseStudyId = getParameterByName("caseId");
//   if (caseId) {
//     _currentCaseStudyId = caseId;
//   }

//   if (!_currentCaseStudyId) {
//     _currentCaseStudyId = promptForID();
//   }

//   function promptForID() {
//     var validIDs = [1, 2];
//     var id = parseInt(
//       prompt("Enter case study ID (Valid cases: " + validIDs.toString() + ")")
//     );
//     if (validIDs.includes(id)) {
//       console.log("valid IDs contains: ", id);
//       return id;
//     } else {
//       console.log("valid IDs does not contain: ", id);
//       promptForID();
//     }
//   }
// }

// function initializeCaseStudy() {
//   console.log("CRRTApp : initializeCaseStudy()");
//   _currentCaseStudy = _caseStudies[_currentCaseStudyId];
//   _currentCaseStudy = _currentCaseStudy;
//   _currentTime = 0;
//   for (var i = 0; i < _allLabs.length; i++) {
//     if (_currentCaseStudySheet.labs.elements[0][_allLabs[i]]) {
//       _historicalLabs[_allLabs[i]].push(
//         _currentCaseStudySheet.labs.elements[0][_allLabs[i]]
//       );
//     }
//     if (_currentCaseStudySheet.labs.elements[1][_allLabs[i]]) {
//       _historicalLabs[_allLabs[i]].push(
//         _currentCaseStudySheet.labs.elements[1][_allLabs[i]]
//       );
//     }
//   }
//   for (var i = 0; i < _vitals.length; i++) {
//     _historicalVitals[_vitals[i]].push(
//       _currentCaseStudySheet.vitals.elements[0][_vitals[i]]
//     );
//   }
//   // Set initial pH
//   var pH = excelRound(
//     calculatePH(
//       _historicalLabs["bicarbonate"][_historicalLabs["bicarbonate"].length - 1]
//     ),
//     2
//   );
//   _historicalLabs["pH"][0] = pH;

//   // Set initial overload
//   setVolumeOverload();

//   console.log("_currentCaseStudyId : ", _currentCaseStudyId);
//   console.log("_currentCaseStudy : ", _currentCaseStudy);
// }

// export function initializeSpreadsheet(/*promise*/) {
// var publicSpreadsheetUrl =
//   "https://docs.google.com/spreadsheets/d/1KAn-DDLp-R1Msdju4w8fqhgPSd9n5ShfCIzJ7DFtkJQ/pubhtml";

// Tabletop.init({
//   key: publicSpreadsheetUrl,
//   callback: showInfo,
//   simpleSheet: false
// });

export function showInfo(data) {
  // _currentCaseStudySheet = data;
  // _currentCaseStudySheet.inputOutput =
  //   _currentCaseStudySheet["inputOutputCase" + _currentCaseStudyId];
  // _currentCaseStudySheet.vitals =
  //   _currentCaseStudySheet["vitalsCase" + _currentCaseStudyId];
  _currentCaseStudySheet.labs = data;
  // _currentCaseStudySheet["labsCase" + _currentCaseStudyId*/];
  // _currentCaseStudySheet.productionRates =
  //   _currentCaseStudySheet["productionRatesCase" + _currentCaseStudyId];
  // _currentCaseStudySheet.accessPressures =
  //   _currentCaseStudySheet["accessPressuresCase" + _currentCaseStudyId];
  // _currentCaseStudySheet.medications =
  //   _currentCaseStudySheet["medicationsCase" + _currentCaseStudyId];
  console.log(_currentCaseStudySheet);
  //_currentCaseStudySheet.vitals = _currentCaseStudySheet.vitalsCase1;
  //_currentCaseStudySheet.labs = _currentCaseStudySheet.labsCase1;
  //_currentCaseStudySheet.productionRates = _currentCaseStudySheet.productionRatesCase1;
  //_currentCaseStudySheet.accessPressures = _currentCaseStudySheet.accessPressuresCase1;
  //_currentCaseStudySheet.medications = _currentCaseStudySheet.medicationsCase1;
  // promise.resolve();

  // console.log(data);
}
// }

// function calculatePH(bicarbonate) {
//   var PCO2 = getCurrentLab("PC02");
//   console.log("Heeeeeeeeee PCO2: ", PCO2);
//   var pH = 6.1 + Math.log(bicarbonate / (0.03 * PCO2)) / Math.log(10);
//   console.log("calculatePH : pH", pH);
//   return excelRound(pH, 2);
// }

const getCurrentLab = (lab, caseId, currentTime, timeBetweenOrders) => {
  var currentLabSetIndex;
  if (currentTime === 0) {
    currentLabSetIndex = 1;
  } else {
    currentLabSetIndex = Math.floor(currentTime / timeBetweenOrders) + 1;
  }

  return parseFloat(labsInitial[caseId][lab][currentLabSetIndex]);
};

// function getCurrentAccessPressure(pressure) {
//   currentLabSetIndex = _currentTime / 8;
//   return parseFloat(
//     _currentCaseStudySheet.accessPressures.elements[currentLabSetIndex][
//       pressure
//     ]
//   );
// }

export function runLabs(
  orders,
  time,
  timeBetweenOrders,
  selectedCase,
  labData
) {
  // _ordersCounter++;
  let newLabs = {};
  // let dialysate = {};
  // var order = getOrder(orders, time, timeBetweenOrders, selectedCase);
  let currentOrder = orders[orders.length - 1];
  currentOrder.filtrationFraction = calculateFiltrationFraction(
    currentOrder,
    selectedCase.id,
    time.currentTime,
    timeBetweenOrders
  );
  console.log("CURRENT ORDER: ", currentOrder);

  let didClot = false;
  _currentOrders = currentOrder;
  let startingWeight =
    vitalsInitial[selectedCase.id]["weight"][
      vitalsInitial[selectedCase.id]["weight"].length - 1
    ];
  newLabs["ionizedCalcium"] =
    labsInitial[selectedCase.id]["calcium"][
      labsInitial[selectedCase.id]["calcium"].length - 1
    ] / timeBetweenOrders;
  newLabs["filtrationFraction"] = currentOrder.filtrationFraction;

  let initialEffluentFlowRate = calculateEffluentFlowRate(currentOrder);
  console.log("initialEffluentFlowRate :", initialEffluentFlowRate);

  switch (selectedCase.id) {
    case 1:
      console.log("case 1 : checkFilterClottingCase1()");
      didClot = checkFilterClottingCase1();
      break;
    case 2:
      console.log("case 2 : checkFilterClottingCase2()");
      didClot = checkFilterClottingCase2(
        currentOrder,
        startingWeight,
        initialEffluentFlowRate,
        newLabs["ionizedCalcium"]
      );
      break;
    default:
      return;
  }

  var adjustedEffluentFlowRate = calculateAdjustedEffluentFlowRate(
    selectedCase.id,
    initialEffluentFlowRate,
    newLabs["filtrationFraction"],
    startingWeight,
    newLabs["ionizedCalcium"],
    didClot,
    currentOrder
  );
  var totalHoursOfFiltration = calculateTotalHoursOfFiltration(
    selectedCase.id,
    currentOrder,
    initialEffluentFlowRate,
    newLabs["filtrationFraction"],
    startingWeight,
    newLabs["ionizedCalcium"],
    didClot
  );

  console.log("adjustedEffluentFlowRate :", adjustedEffluentFlowRate);
  console.log("totalHoursOfFiltration: ", totalHoursOfFiltration);
  var effluentFlowRate = adjustedEffluentFlowRate;

  var volumeOfDistribution = calculateVolumeOfDistribution(
    currentOrder,
    selectedCase
  );
  console.log("volumeOfDistribution: ", volumeOfDistribution);
  var productionRates = productionRatesInitial[selectedCase.id];

  preLabChecks(effluentFlowRate, orders, time, selectedCase);

  let prodRateKeys = Object.keys(productionRates);

  for (var i = 0; i < prodRateKeys.length; i++) {
    console.log(
      "calculateLab(): component: ",
      productionRates[prodRateKeys[i]]
    );
    console.log(
      "calculateLab(): initialValue: ",
      labsInitial[selectedCase.id][prodRateKeys[i]][
        labsInitial[selectedCase.id][prodRateKeys[i]].length - 1
      ]
    );
    console.log(
      "calculateLab(): dialysate: ",
      currentOrder.fluidDialysateValues[prodRateKeys[i]]
    );
    console.log("calculateLab(): effluentFlowRate: ", effluentFlowRate);
    console.log("calculateLab(): time: ", currentOrder["timeToNextLabs"]);
    console.log("calculateLab(): weight: ", startingWeight);
    console.log("calculateLab(): volumeOfDistribution: ", volumeOfDistribution);
    console.log(
      "calculateLab(): productionRate: ",
      productionRates[prodRateKeys[i]]
    );

    // NOTE: Params for calculateLab(): initialValue, dialysate, effluentFlowRate, time, weight, volumeOfDistribution, productionRate

    newLabs[prodRateKeys[i]] = calculateLab(
      parseFloat(
        labsInitial[selectedCase.id][prodRateKeys[i]][
          labsInitial[selectedCase.id][prodRateKeys[i]].length - 1
        ]
      ),
      parseFloat(currentOrder.fluidDialysateValues[prodRateKeys[i]]),
      parseFloat(effluentFlowRate),
      parseFloat(currentOrder["timeToNextLabs"]),
      parseFloat(startingWeight),
      parseFloat(volumeOfDistribution),
      parseFloat(productionRatesInitial[selectedCase.id][prodRateKeys[i]][0])
    );
    console.log("newLabs : ", newLabs);
  }

  // NOTE: Because sodium calculations are a bit different than other lab values, we need to recalculate
  // sodium using the calculateSodium() function.
  newLabs["sodium"] = calculateSodium(
    volumeOfDistribution,
    effluentFlowRate,
    selectedCase,
    startingWeight
  );
  // NOTE: If we're using sodium phosphate, we need to recalculate the phosphorous results
  if (currentOrder.otherFluidsSodiumPhosphate) {
    console.log("runLabs : using sodium phosphate");
    newLabs["phosphorous"] = calculatePhosphourous(
      volumeOfDistribution,
      effluentFlowRate
    );
  }

  if (currentOrder.anticoagulation === "citrate") {
    var citrateResults = runCitrateCalculations(
      currentOrder,
      startingWeight,
      effluentFlowRate,
      newLabs["ionizedCalcium"]
    );
    newLabs["bicarbonate"] = citrateResults["bicarbonate"];
    newLabs["calcium"] = citrateResults["calcium"];
    newLabs["ionizedCalcium"] = citrateResults["ionizedCalcium"];
    newLabs["calciumFinalPostFilter"] =
      citrateResults["calciumFinalPostFilter"];
  }
  newLabs["ph"] = calculatePH(
    newLabs["bicarbonate"],
    selectedCase,
    time.currentTime,
    timeBetweenOrders
  );
  newLabs["time"] = orders[orders.length - 1].timeStamp;

  newLabs = roundLabs(newLabs);

  // saveLabValues(newLabs);
  // // incrementTime(); //This function needs to increment time in Redux
  // copyStaticLabsToHistorical(time, selectedCase);
  console.log(copyStaticLabsToHistorical(time, selectedCase));
  setNewWeight(
    totalHoursOfFiltration,
    currentOrder,
    selectedCase,
    time.currentTime,
    timeBetweenOrders,
    time.currentDay
  );
  // setVolumeOverload();
  console.log(setVolumeOverload());
  // setPageVariables();
  postLabChecks(orders, time, selectedCase);
  // processMessages();
  return newLabs;
}

export function returnInputOutput() {
  return _historicalInputOutput;
}

function roundLabs(newLabs) {
  newLabs["sodium"] = Number.parseFloat(newLabs["sodium"]).toFixed(0);
  newLabs["potassium"] = Number.parseFloat(newLabs["potassium"]).toFixed(1);
  newLabs["chloride"] = Number.parseFloat(newLabs["chloride"]).toFixed(0);
  newLabs["bicarbonate"] = Number.parseFloat(newLabs["bicarbonate"]).toFixed(0);
  newLabs["bun"] = Number.parseFloat(newLabs["bun"]).toFixed(0);
  newLabs["creatinine"] = Number.parseFloat(newLabs["creatinine"]).toFixed(2);
  newLabs["calcium"] = Number.parseFloat(newLabs["calcium"]).toFixed(1);
  newLabs["ionizedCalcium"] = Number.parseFloat(
    newLabs["ionizedCalcium"]
  ).toFixed(2);
  newLabs["magnesium"] = Number.parseFloat(newLabs["magnesium"]).toFixed(1);
  newLabs["phosphorous"] = Number.parseFloat(newLabs["phosphorous"]).toFixed(1);
  return newLabs;
}

function copyStaticLabsToHistorical(time, selectedCase) {
  // var currentLabSet = _currentTime / 8 + 1;

  // for (var i = 0; i < _staticLabs.length; i++) {
  //   if (_currentCaseStudySheet.labs.elements[currentLabSet][_staticLabs[i]]) {
  //     _historicalLabs[_staticLabs[i]].push(
  //       _currentCaseStudySheet.labs.elements[currentLabSet][_staticLabs[i]]
  //     );
  //   }
  // }

  for (var i = 0; i < _staticLabs.length; i++) {
    if (labsInitial[selectedCase.id][_staticLabs[i]]) {
      _historicalLabs[_staticLabs[i]].push(
        labsInitial[selectedCase.id][_staticLabs[i]]
      );
    }
  }
}

function setVolumeOverload() {
  var usualWeight = labsCase1.usualWeight;
  var currentWeight =
    _historicalVitals["weight"][_historicalVitals["weight"].length - 1];
  var overload = excelRound(
    ((currentWeight - usualWeight) / usualWeight) * 100,
    2
  );
  _historicalOverload.push(overload);
}

function calculateSodium(
  volumeOfDistribution,
  effluentFlowRate,
  selectedCase,
  startingWeight
) {
  console.log(
    "calculateSodium params: " + volumeOfDistribution,
    effluentFlowRate
  );
  var finalSodium;
  // NOTE: This is where we are accounting for hypo/hypertonic solutions and recalculating our sodium values
  var bolusValue = _currentOrders["otherFluidsBolusValue"];
  var infusionValue = _currentOrders["otherFluidsInfusionValue"];
  var otherFluidsSaline = _currentOrders["otherFluidsSaline"];
  var otherFluidsD5W = _currentOrders["otherFluidsD5W"];
  // var otherFluidsSodiumPhosphate = _currentOrders["otherFluidsSodiumPhosphate"];
  var userDialysateValue = _currentOrders.fluidDialysateValues["sodium"];

  // default initial sodium is the previous historical value.
  var initialSodium = parseFloat(
    labsInitial[selectedCase.id]["sodium"][
      labsInitial[selectedCase.id]["sodium"].length - 1
    ]
  );

  var threePercentSalineConcentration;

  // default dialysate value is the user entered value
  var newDialysate = userDialysateValue;

  if (otherFluidsSaline) {
    threePercentSalineConcentration = 513;
    newDialysate =
      (infusionValue / 1000 / effluentFlowRate) * 373 + userDialysateValue;
  }

  if (otherFluidsD5W) {
    threePercentSalineConcentration = 0;
    newDialysate =
      userDialysateValue -
      (infusionValue / 1000 / effluentFlowRate) * userDialysateValue;
  }

  if ((otherFluidsSaline || otherFluidsD5W) && bolusValue) {
    initialSodium =
      initialSodium +
      ((threePercentSalineConcentration - initialSodium) /
        (volumeOfDistribution + 1)) *
        (bolusValue / 1000);
  }

  finalSodium = calculateLab(
    initialSodium,
    newDialysate,
    effluentFlowRate,
    _currentOrders["timeToNextLabs"],
    startingWeight,
    volumeOfDistribution,
    0
  );

  return finalSodium;
}

function calculatePhosphourous(volumeOfDistribution, effluentFlowRate) {
  var finalPhosphorous;
  var initialPhosphorous = parseFloat(
    _historicalLabs["phosphorous"][_historicalLabs["phosphorous"].length - 1]
  );
  var startingWeight = parseFloat(
    _historicalVitals["weight"][_historicalVitals["weight"].length - 1]
  );
  var initialDialysate = _currentOrders["fluidDialysateValues"]["phosphorous"];
  var newDialysate =
    initialDialysate +
    465 / _currentOrders["timeToNextLabs"] / (effluentFlowRate * 10);
  finalPhosphorous = calculateLab(
    initialPhosphorous,
    newDialysate,
    effluentFlowRate,
    _currentOrders["timeToNextLabs"],
    startingWeight,
    volumeOfDistribution,
    0
  );
  return finalPhosphorous;
}

function calculateTotalHoursOfFiltration(
  currentCaseId,
  order,
  effluentFlowRate,
  currentFiltrationFraction,
  startingWeight,
  ionizedCalcium,
  didClot
) {
  switch (currentCaseId) {
    case 1:
      return calculateTotalHoursOfFiltrationCase1(
        order,
        effluentFlowRate,
        currentFiltrationFraction,
        startingWeight,
        ionizedCalcium
      );
    // break;
    case 2:
      return calculateTotalHoursOfFiltrationCase2(
        order,
        effluentFlowRate,
        currentFiltrationFraction,
        startingWeight,
        ionizedCalcium,
        didClot
      );
    // break;
    default:
      return;
  }
}

function calculateTotalHoursOfFiltrationCase1(
  order,
  effluentFlowRate,
  currentFiltrationFraction,
  startingWeight,
  ionizedCalcium
) {
  // var initialEFR = effluentFlowRate;
  var defaultHoursOfFiltration = 6;
  var hoursOfFiltration = defaultHoursOfFiltration;

  if (
    order["BFR"] <= 150 ||
    (currentFiltrationFraction > 25 &&
      currentFiltrationFraction <= 30 &&
      order.anticoagulation === "none")
  ) {
    hoursOfFiltration = 4;
  }

  if (currentFiltrationFraction > 30 && order.anticoagulation === "none") {
    hoursOfFiltration = 2;
  }
  if (order.anticoagulation === "citrate") {
    var initialCitrateResults = runCitrateCalculations(
      order,
      startingWeight,
      effluentFlowRate,
      ionizedCalcium
    );
    var initialPostFilterIonizedCalcium =
      initialCitrateResults["calciumFinalPostFilter"];
    console.log(
      "calculateAdjustedEffluentFlowRate() : initialPostFilterIonizedCalcium : ",
      initialPostFilterIonizedCalcium
    );
    if (initialPostFilterIonizedCalcium > 0.45) {
      hoursOfFiltration = 4;
    }
  }
  return hoursOfFiltration;
}

function calculateTotalHoursOfFiltrationCase2(
  order,
  effluentFlowRate,
  currentFiltrationFraction,
  startingWeight,
  ionizedCalcium,
  didClot
) {
  // var initialEFR = effluentFlowRate;
  var defaultHoursOfFiltration = 6;
  var hoursOfFiltration = defaultHoursOfFiltration;

  if (order["BFR"] < 150) {
    hoursOfFiltration = 4;
  }

  if (didClot) {
    hoursOfFiltration = 4;
  }

  return hoursOfFiltration;
}

function calculateAdjustedEffluentFlowRate(
  currentCaseId,
  effluentFlowRate,
  currentFiltrationFraction,
  startingWeight,
  ionizedCalcium,
  didClot,
  order
) {
  switch (currentCaseId) {
    case 1:
      console.log(
        "case 1 : calculateAdjustedEffluentFlowRateCase1():",
        calculateAdjustedEffluentFlowRateCase1(
          effluentFlowRate,
          currentFiltrationFraction,
          startingWeight,
          ionizedCalcium,
          order
        )
      );
      return calculateAdjustedEffluentFlowRateCase1(
        effluentFlowRate,
        currentFiltrationFraction,
        startingWeight,
        ionizedCalcium,
        order
      );
    // break;
    case 2:
      console.log("case 2 : calculateAdjustedEffluentFlowRateCase2()");
      return calculateAdjustedEffluentFlowRateCase2(
        effluentFlowRate,
        currentFiltrationFraction,
        startingWeight,
        ionizedCalcium,
        didClot,
        order
      );
    // break;
    default:
      return;
  }
}

function calculateAdjustedEffluentFlowRateCase1(
  effluentFlowRate,
  currentFiltrationFraction,
  startingWeight,
  ionizedCalcium,
  order
) {
  var initialEFR = effluentFlowRate;
  var adjustedEFR;
  var efrAdjustment = 1;
  // NOTE: these adjustments to the effluent flow rate based on BFR and filtration fraction
  // might only be applicable to case #1
  if (
    order["BFR"] <= 150 ||
    (currentFiltrationFraction > 25 &&
      currentFiltrationFraction <= 30 &&
      order.anticoagulation === "none")
  ) {
    efrAdjustment = 1.5;
  }

  if (currentFiltrationFraction > 30 && order.anticoagulation === "none") {
    efrAdjustment = 3;
  }
  if (order.anticoagulation === "citrate") {
    var initialCitrateResults = runCitrateCalculations(
      startingWeight,
      effluentFlowRate,
      ionizedCalcium
    );
    var initialPostFilterIonizedCalcium =
      initialCitrateResults["calciumFinalPostFilter"];
    console.log(
      "calculateAdjustedEffluentFlowRate() : initialPostFilterIonizedCalcium : ",
      initialPostFilterIonizedCalcium
    );
    if (initialPostFilterIonizedCalcium > 0.45) {
      efrAdjustment = 1.5;
    }
  }
  adjustedEFR = initialEFR / efrAdjustment;
  return adjustedEFR;
}

function calculateAdjustedEffluentFlowRateCase2(
  effluentFlowRate,
  currentFiltrationFraction,
  startingWeight,
  ionizedCalcium,
  didClot,
  order
) {
  var initialEFR = effluentFlowRate;
  var adjustedEFR;
  var efrAdjustment = 1;

  if (didClot) {
    efrAdjustment = 1.5;
  }

  if (_currentOrders["BFR"] < 150) {
    efrAdjustment = 1.5;
  }

  adjustedEFR = initialEFR / efrAdjustment;
  return adjustedEFR;
}

// function saveLabValues(newLabs) {
//   for (var i = 0; i < _dynamicLabs.length; i++) {
//     _historicalLabs[_dynamicLabs[i]].push(newLabs[_dynamicLabs[i]]);
//   }
// }

function setNewWeight(
  totalHoursOfFiltration,
  order,
  selectedCase,
  time,
  timeBetweenOrders,
  currentDay
) {
  // var newWeight = excelRound(
  //   calculateNewWeight(_currentOrders, totalHoursOfFiltration),
  //   2
  // );
  var newWeight = excelRound(
    calculateNewWeight(
      order,
      totalHoursOfFiltration,
      selectedCase,
      time,
      timeBetweenOrders,
      currentDay
    ),
    2
  );
  console.log("newWeight : ", newWeight);
  _historicalVitals["weight"].push(newWeight);
}

function runCitrateCalculations(
  order,
  startingWeight,
  effluentFlowRate,
  ionizedCalciumInitial
) {
  var results = {};

  // var citrateFlowRateInMlPerHr = $("#citrateFlowRate").val();
  var citrateFlowRateInMlPerHr = order.citrateFlowRate;
  var citrateFlowRateInLPerHr = citrateFlowRateInMlPerHr / 1000;
  var citrateBloodConcentrationConstant = 112.9;
  var citrateBloodConcentration =
    (citrateFlowRateInLPerHr * citrateBloodConcentrationConstant) /
    ((_currentOrders["BFR"] * 60) / 1000 + citrateFlowRateInLPerHr);
  var dialysateCalcium = _currentOrders["fluidDialysateValues"]["calcium"];
  // var previousIonizedCalcium =
  //   _historicalLabs["ionizedCalcium"][
  //     _historicalLabs["ionizedCalcium"].length - 1
  //   ];
  var citrateInitial = citrateBloodConcentration;
  // NOTE: For now,  caCitInitial will be hard-coded.
  // var caCitInitial = 0;
  var kForCaCit = 1;
  var caCitFinalPreFilter =
    (-1 * (-ionizedCalciumInitial - citrateInitial - kForCaCit) -
      Math.sqrt(
        Math.pow(-ionizedCalciumInitial - citrateInitial - kForCaCit, 2) -
          4 * 1 * (ionizedCalciumInitial * citrateInitial)
      )) /
    (2 * 1);
  var caFinalPreFilter = ionizedCalciumInitial - caCitFinalPreFilter;
  var citratFinalPreFilter = citrateInitial - caCitFinalPreFilter;
  var bicarbonateWithCitrateInitial = 13;
  var caFinalPostFilter =
    caFinalPreFilter *
    (1 -
      (effluentFlowRate / ((_currentOrders.BFR * 60) / 1000)) *
        ((caFinalPreFilter - dialysateCalcium / 2) / caFinalPreFilter));
  var citratFinalPostFilter =
    citratFinalPreFilter *
    (1 - effluentFlowRate / ((_currentOrders.BFR * 60) / 1000));
  var caCitFinalPostFilter =
    caCitFinalPreFilter *
    (1 - effluentFlowRate / ((_currentOrders.BFR * 60) / 1000));
  var citrateMetabolismFactor = getCitrateMetabolismFactor();

  var calciumClInMmolPerL = 54;
  // var calciumClFlowRateInMlPerHr = $("#caclInfusionRate").val();
  var calciumClFlowRateInMlPerHr = order.caClInfusionRate;
  var calciumClFlowRateInLPerHr = calciumClFlowRateInMlPerHr / 1000;
  var ionizedCalciumTotal =
    (caFinalPostFilter * ((_currentOrders.BFR * 60) / 1000) +
      calciumClInMmolPerL * calciumClFlowRateInLPerHr) /
      ((_currentOrders.BFR * 60) / 1000 + calciumClFlowRateInLPerHr) +
    (caCitFinalPostFilter / 2) * citrateMetabolismFactor;

  var ionizedCalciumFinal = calculateLab(
    ionizedCalciumInitial,
    ionizedCalciumTotal,
    effluentFlowRate,
    _currentOrders["timeToNextLabs"],
    startingWeight,
    startingWeight * 0.6,
    0
  );
  var bicarbonateWithCitrateDialysate =
    25 +
    (citratFinalPostFilter + caCitFinalPostFilter) *
      3 *
      citrateMetabolismFactor;
  var bicarbonateWithCitrateFinal = calculateLab(
    bicarbonateWithCitrateInitial,
    bicarbonateWithCitrateDialysate,
    effluentFlowRate,
    _currentOrders["timeToNextLabs"],
    startingWeight,
    startingWeight * 0.6,
    -10
  );
  var calciumTotal =
    ((caFinalPostFilter * ((_currentOrders.BFR * 60) / 1000) +
      calciumClInMmolPerL * calciumClFlowRateInLPerHr) /
      ((_currentOrders.BFR * 60) / 1000 + calciumClFlowRateInLPerHr)) *
      8 +
    caCitFinalPostFilter * 4;

  results["bicarbonate"] = excelRound(bicarbonateWithCitrateFinal, 2);
  results["calcium"] = excelRound(calciumTotal, 2);
  results["ionizedCalcium"] = excelRound(ionizedCalciumFinal, 2);
  results["calciumFinalPostFilter"] = excelRound(caFinalPostFilter, 2);

  return results;
}

function getCitrateMetabolismFactor() {
  var factor;
  if (_currentCaseStudyId === "2") {
    if (_currentTime < 48) {
      factor = 0;
    } else if (_currentTime < 72) {
      factor = 0.5;
    } else {
      factor = 1;
    }
  } else {
    factor = 1;
  }

  console.log("getCitrateMetabolismFactor() : _currentTime :", _currentTime);
  console.log("getCitrateMetabolismFactor() : factor :", factor);

  return factor;
}

console.log(_newMessages);

// function getOrder(orders, time, timeBetweenOrders, selectedCase) {
//   var order = {
//     fluid: $("input[name=fluid]:checked").val(),
//     fluidDialysateValues: {
//       sodium: parseFloat($("#replacement-fluid-sodium-value").val()),
//       potassium: parseFloat($("#replacement-fluid-potassium-value").val()),
//       chloride: parseFloat($("#replacement-fluid-chloride-value").val()),
//       bicarbonate: parseFloat($("#replacement-fluid-bicarbonate-value").val()),
//       calcium: parseFloat($("#replacement-fluid-calcium-value").val()) * 4,
//       magnesium: parseFloat($("#replacement-fluid-magnesium-value").val()),
//       phosphorous: parseFloat($("#replacement-fluid-phosphorous-value").val()),
//       BUN: 0,
//       creatinine: 0
//     },
//     modality: $("input[name=modality]:checked").val(),
//     anticoagulation: $("input[name=anticoagulation]:checked").val(),
//     BFR: parseInt($("#bloodFlowRate").val()),
//     Qr: parseInt($("#fluidFlowRate").val()),
//     Qd: parseInt($("#fluidFlowRate").val()),
//     grossUF: parseInt($("#grossHourlyFluidRemoval").val()),
//     timeToNextLabs: calculateTimeToNextSetOfLabs(),
//     otherFluidsSaline: $("input[name=otherFluidsSaline]:checked").val(),
//     otherFluidsD5W: $("input[name=otherFluidsD5W]:checked").val(),
//     otherFluidsSodiumPhosphate: $(
//       "input[name=otherFluidsSodiumPhosphate]:checked"
//     ).val(),
//     otherFluidsBolusValue: parseFloat(
//       $("input[name=otherFluidsBolusValue]").val()
//     ),
//     otherFluidsInfusionValue: parseFloat(
//       $("input[name=otherFluidsInfusionValue]").val()
//     )
//   };
//   var ff = calculateFiltrationFraction(order, selectedCase.id);
//   order.filtrationFraction = ff;
//   return order;
// }

function calculateNewWeight(
  order,
  totalHoursOfFiltration,
  selectedCase,
  time,
  timeBetweenOrders,
  currentDay
) {
  // NOTE:
  // new weight = old weight + difference between input and output
  // 1L = 1Kg
  // output = ultrafiltration rate = Gross fluid removal = Gross ultrafiltration
  console.log(
    "calculateNewWeight() : totalHoursOfFiltration : ",
    totalHoursOfFiltration
  );

  // var data = {};

  var totalInputInL = 0;
  var bolusValue = order["otherFluidsBolusValue"];
  var infusionValue = order["otherFluidsInfusionValue"];
  // var otherFluidsSaline = order["otherFluidsSaline"];
  // var otherFluidsD5W = order["otherFluidsD5W"];
  // var otherFluidsSodiumPhosphate = order["otherFluidsSodiumPhosphate"];
  // var labFluidsInPastEightHoursInLiters = (parseFloat(_currentCaseStudySheet.inputOutput.elements[_currentTime+1]["previousSixHourTotal"]))/1000;
  var labFluidsInPastEightHoursInLiters =
    parseFloat(
      inputOutputInitial[selectedCase.id].previousSixHourTotal[time + 1]
    ) / 1000;

  totalInputInL += labFluidsInPastEightHoursInLiters;
  console.log(
    "labFluidsInPastEightHoursInLiters :",
    labFluidsInPastEightHoursInLiters
  );
  console.log("totalInputInL :", totalInputInL);

  if (order.anticoagulation === "citrate") {
    var citrateFlowRateInLPerHr = order.citrateFlowRate / 1000;
    var citratePastEightHoursInLiters =
      citrateFlowRateInLPerHr * timeBetweenOrders;
    totalInputInL += citratePastEightHoursInLiters;

    console.log(
      "citratePastEightHoursInLiters : ",
      citratePastEightHoursInLiters
    );
    console.log("totalInputInL :", totalInputInL);

    var calciumClFlowRateInLPerHr = order.caClInfusionRate / 1000;
    var calciumClPastEightHoursInLiters =
      calciumClFlowRateInLPerHr * timeBetweenOrders;
    totalInputInL += calciumClPastEightHoursInLiters;

    console.log(
      "calciumClPastEightHoursInLiters : ",
      calciumClPastEightHoursInLiters
    );
    console.log("totalInputInL :", totalInputInL);
  }

  if (order.otherFluidsSodiumPhosphate) {
    var sodiumPhosphateInLiters = 0.1;
    totalInputInL += sodiumPhosphateInLiters;
    console.log("totalInputInL :", totalInputInL);
  }

  if (bolusValue) {
    var bolusInL = bolusValue / 1000;
    totalInputInL += bolusInL;
    console.log("bolusInL : ", bolusInL);
    console.log("totalInputInL :", totalInputInL);
  }

  if (infusionValue) {
    var infusionInL = infusionValue / 1000;
    var infusionPastEightHours = infusionInL * timeBetweenOrders;
    totalInputInL += infusionPastEightHours;
    console.log("infusionPastEightHours : ", infusionPastEightHours);
    console.log("totalInputInL :", totalInputInL);
  }
  var currentTimeByDay = 24 * (currentDay - 1);
  let startingTime;

  if (timeBetweenOrders <= 8) {
    startingTime = time + currentTimeByDay - timeBetweenOrders;
  } else if (timeBetweenOrders > 8 && timeBetweenOrders <= 16) {
    startingTime = time + currentTimeByDay - (timeBetweenOrders - 8);
  } else {
    startingTime = time + currentTimeByDay - (timeBetweenOrders - 16);
  }

  for (let i = 0; i < timeBetweenOrders; i++) {
    var input = 0;
    // input += parseFloat(_currentCaseStudySheet.inputOutput.elements[startingTime+i+2]["total"]);
    input += parseFloat(
      inputOutputInitial[selectedCase.id].total[startingTime + i + 2]
    );

    if (order.anticoagulation === "citrate") {
      // var citFlowRate = parseFloat($('#citrateFlowRate').val());
      // var caclFlowRate = parseFloat($('#caclInfusionRate').val());
      var citFlowRate = order.citrateFlowRate;
      var caclFlowRate = order.caClInfusionRate;

      if (citFlowRate) {
        input += citFlowRate;
        _historicalInputOutput["citrate"].push(citFlowRate);
      }

      if (caclFlowRate) {
        input += caclFlowRate;
        _historicalInputOutput["calciumChloride"].push(caclFlowRate);
      }
    }

    if (infusionValue) {
      input += infusionValue;
    }

    if (i === 0) {
      if (bolusValue) {
        input += bolusValue;
      }
      if (order.otherFluidsSodiumPhosphate) {
        input += 100;
      }
    }

    _historicalInputOutput["totalInput"].push(input);
  }

  startingTime = time - timeBetweenOrders;
  // var ultrafiltrationStartingTime = time - totalHoursOfFiltration;
  // var differenceBetweenStartingTimeAndHoursOfFiltration =
  //   time - totalHoursOfFiltration;

  // NOTE: Make sure we set the ultrafiltration rate to 0 for the time that
  // the filter is clogged.
  for (let i = 0; i < timeBetweenOrders; i++) {
    if (
      !_historicalInputOutput["ultrafiltration"].length ||
      _historicalInputOutput["ultrafiltration"].length < 4 ||
      _historicalInputOutput["ultrafiltration"][
        _historicalInputOutput["ultrafiltration"].length - 4
      ] !== 0
    ) {
      _historicalInputOutput["ultrafiltration"].push(0);
      // NOTE: For now, totalOutput == ultrafiltration -- however this may not be the case in   the future
      _historicalInputOutput["totalOutput"].push(0);
    } else {
      _historicalInputOutput["ultrafiltration"].push(order["grossUF"]);
      // NOTE: For now, totalOutput == ultrafiltration -- however this may not be the case in   the future
      _historicalInputOutput["totalOutput"].push(order["grossUF"]);
    }
  }
  console.log(
    _historicalInputOutput["ultrafiltration"],
    "_historicalInputOutput[ultrafiltration]"
  );
  console.log(
    _historicalInputOutput["totalOutput"],
    "_historicalInputOutput[totalOutput]"
  );

  for (let i = 0; i < timeBetweenOrders; i++) {
    let input;
    let output;
    if (netInputOutputCounter < 8) {
      netInputOutputCounter++;
    } else {
      netInputOutputCounter = 1;
      timesNetInputOutputCounterHitEight++;
    }

    if (_historicalInputOutput["netInputOutput"].length < 8) {
      input = _historicalInputOutput["totalInput"][i];
      output = _historicalInputOutput["totalOutput"][i];
      _historicalInputOutput["netInputOutput"][i] = input - output;
    } else if (
      (netInputOutputCounter === 1 &&
        _historicalInputOutput["netInputOutput"].length >= 8) ||
      (netInputOutputCounter === 2 &&
        _historicalInputOutput["netInputOutput"].length >= 8) ||
      (netInputOutputCounter === 3 &&
        _historicalInputOutput["netInputOutput"].length >= 8) ||
      (netInputOutputCounter === 4 &&
        _historicalInputOutput["netInputOutput"].length >= 8)
    ) {
      input =
        _historicalInputOutput["totalInput"][
          netInputOutputCounter + timesNetInputOutputCounterHitEight * 8 - 1
        ];
      output =
        _historicalInputOutput["totalOutput"][
          netInputOutputCounter + timesNetInputOutputCounterHitEight * 8 - 1
        ];
      _historicalInputOutput["netInputOutput"].push(input - output);
    } else if (
      (netInputOutputCounter === 5 &&
        _historicalInputOutput["netInputOutput"].length > 8) ||
      (netInputOutputCounter === 6 &&
        _historicalInputOutput["netInputOutput"].length > 8) ||
      (netInputOutputCounter === 7 &&
        _historicalInputOutput["netInputOutput"].length > 8) ||
      (netInputOutputCounter === 8 &&
        _historicalInputOutput["netInputOutput"].length > 8)
    ) {
      input =
        _historicalInputOutput["totalInput"][
          netInputOutputCounter + timesNetInputOutputCounterHitEight * 8 - 1
        ];
      output =
        _historicalInputOutput["totalOutput"][
          netInputOutputCounter + timesNetInputOutputCounterHitEight * 8 - 1
        ];
      _historicalInputOutput["netInputOutput"].push(input - output);
    }

    if (i === 0) {
      _historicalInputOutput["cumulativeInputOutput"][i] =
        _historicalInputOutput["netInputOutput"][i];
    } else {
      _historicalInputOutput["cumulativeInputOutput"].push(
        _historicalInputOutput["netInputOutput"][
          _historicalInputOutput["netInputOutput"].length - 1
        ] +
          _historicalInputOutput["cumulativeInputOutput"][
            _historicalInputOutput["cumulativeInputOutput"].length - 1
          ]
      );
    }
  }

  var grossFiltrationPastEightHoursInLiters =
    (order["grossUF"] / 1000) * totalHoursOfFiltration;
  // var previousWeightInKilos = parseFloat(_historicalVitals['weight'][_historicalVitals['weight'].length-1]);
  var previousWeightInKilos = parseFloat(
    vitalsInitial[selectedCase.id].weight[
      vitalsInitial[selectedCase.id].weight.length - 1
    ]
  );

  var currentWeightInKilos =
    previousWeightInKilos +
    (totalInputInL - grossFiltrationPastEightHoursInLiters);

  console.log("HOPEFULLY INPUT OUTPUT DATA: ", _historicalInputOutput);
  return currentWeightInKilos;
}

function calculateEffluentFlowRate(currentOrder) {
  var efr;
  // var currentFiltrationFraction = currentOrder.filtrationFraction;
  console.log("EFFULENT CURRENT ORDER", currentOrder);
  switch (currentOrder["modality"]) {
    case "Pre-filter CVVH":
      efr =
        ((currentOrder["BFR"] * 60) /
          1000 /
          ((currentOrder["BFR"] * 60) / 1000 + currentOrder["Qr"])) *
        (currentOrder["Qr"] + currentOrder["grossUF"] / 1000);
      break;
    case "Post-filter CVVH":
      efr = currentOrder["Qr"] + currentOrder["grossUF"] / 1000;
      break;
    case "CVVHD":
      efr = currentOrder["Qd"] + currentOrder["grossUF"] / 1000;
      break;
    default:
      return;
  }

  return efr;
}

function calculateVolumeOfDistribution(orders, selectedCase) {
  // return (
  //   _currentCaseStudy.startingData["usualWeight"] *
  //     getVolumeOfDistributionGenderCoefficient() +
  //   calculateEdema(orders)
  // );
  return (
    selectedCase.usualWeight *
      getVolumeOfDistributionGenderCoefficient(selectedCase) +
    calculateEdema(orders, selectedCase)
  );
}

function calculateEdema(orders, selectedCase) {
  // NOTE: edema = current weight - usual weight
  // return (
  //   _historicalVitals["weight"][_historicalVitals["weight"].length - 1] -
  //   _currentCaseStudy.startingData["usualWeight"]
  // );
  return (
    vitalsInitial[selectedCase.id].weight[
      vitalsInitial[selectedCase.id].weight.length - 1
    ] - selectedCase.usualWeight
  );
}

function getVolumeOfDistributionGenderCoefficient(selectedCase) {
  // if (_currentCaseStudy.startingData["gender"] == "male") {
  if (selectedCase.gender === "male") {
    return 0.6;
  } else {
    return 0.5;
  }
}

// // function calculateTimeToNextSetOfLabs() {
// //   // NOTE: Certain things, like clotting, could alter
// //   // this value. For now, we're just setting it to 6 hours.
// //   return 8;
// // }

// // function arrayToHTMLList(array) {
// //   var html = "";
// //   html += "<ul>";
// //   for (var i = 0; i < array.length; i++) {
// //     html += "<li>" + array[i] + "</li>";
// //   }
// //   html += "</ul>";
// //   return html;
// // }

function calculateLab(
  initialValue,
  dialysate,
  effluentFlowRate,
  time,
  weight,
  volumeOfDistribution,
  productionRate
) {
  var newValue =
    initialValue +
    (dialysate - initialValue) *
      (1 - Math.exp((-effluentFlowRate * time) / volumeOfDistribution)) +
    (productionRate / effluentFlowRate) *
      (1 - Math.exp((-effluentFlowRate * time) / volumeOfDistribution));
  newValue = excelRound(newValue, 2);
  return newValue;
}

function preLabChecks(effluentFlowRate, orders, time, selectedCase) {
  console.log("preLabChecks()");
  checkIfUsedCitrate(orders, time);
  checkBloodFlowRate();
  checkDose(effluentFlowRate);
}

function postLabChecks(order, time, selectedCase) {
  const { id } = selectedCase;
  const { currentTime } = time;
  switch (id) {
    case 1:
      checkSodium(id);
      checkPotassium(id);
      checkChloride();
      checkBicarbonate(id);
      checkCalcium(id);
      checkMagnesium(id);
      checkPhosphorous(id);
      checkGrossUltrafiltration(id, currentTime);
      handleSimulationCompletion(id, currentTime);
      break;
    case 2:
      checkSodiumCase2(id);
      checkPotassiumCase2(id);
      checkChloride();
      checkBicarbonateCase2(id);
      checkCalciumCase2(order, id);
      checkMagnesiumCase2(id);
      checkPhosphorous(id);
      checkGrossUltrafiltration(id, currentTime);
      handleSimulationCompletion(id, currentTime);
      break;
    default:
      return;
  }
}

export const getMedications = (timeBetweenOrders, selectedCaseId) => {
  let medications = {
    scheduledMedication: [],
    infusions: []
  };
  for (let i = 0; i < timeBetweenOrders; i++) {
    medications.scheduledMedication.push(
      medicationsInitial[selectedCaseId].scheduledMedication[i]
    );
    medications.infusions.push(medicationsInitial[selectedCaseId].infusions[i]);
  }
  return medications;
};

export const getVitals = (timeBetweenOrders, selectedCaseId) => {
  let vitals = {
    temperature: [],
    heartRate: [],
    respiratoryRate: [],
    bloodPressure: [],
    weight: []
  };
  for (let i = 0; i < timeBetweenOrders; i++) {
    vitals.temperature.push(vitalsInitial[selectedCaseId].temperature[i]);
    vitals.heartRate.push(vitalsInitial[selectedCaseId].heartRate[i]);
    vitals.respiratoryRate.push(
      vitalsInitial[selectedCaseId].respiratoryRate[i]
    );
    vitals.bloodPressure.push(vitalsInitial[selectedCaseId].bloodPressure[i]);
    vitals.weight.push(vitalsInitial[selectedCaseId].weight[i]);
  }
  return vitals;
};

//_currentCaseStudySheet.vitals = _currentCaseStudySheet.vitalsCase1;
//_currentCaseStudySheet.labs = _currentCaseStudySheet.labsCase1;
//_currentCaseStudySheet.productionRates = _currentCaseStudySheet.productionRatesCase1;
//_currentCaseStudySheet.accessPressures = _currentCaseStudySheet.accessPressuresCase1;
//_currentCaseStudySheet.medications = _currentCaseStudySheet.medicationsCase1;
//     promise.resolve();
//     console.log(data);
//   }
// }

function calculatePH(
  bicarbonate,
  selectedCase,
  currentTime,
  timeBetweenOrders
) {
  var PCO2 = getCurrentLab(
    "pc02",
    selectedCase.id,
    currentTime,
    timeBetweenOrders
  );
  var pH = 6.1 + Math.log(bicarbonate / (0.03 * PCO2)) / Math.log(10);
  return excelRound(pH, 2);
}

// function getCurrentLab(lab) {
//   var currentLabSetIndex;
//   console.log("heeeeeee _currentTime: ", _currentTime);
//   if (_currentTime === 0) {
//     currentLabSetIndex = 1;
//   } else {
//     currentLabSetIndex = _currentTime / 8 + 1;
//   }

//     if (currentTime === 8) {
//       _usedCitrateFirst = true;
//     }
//   }
// }

function checkIfUsedCitrate(order, time) {
  if (order.anticoagulation === "citrate") {
    _usedCitrate = true;
    console.log(_usedCitrate);

    if (time.currentTime === 8) {
      _usedCitrateFirst = true;
      console.log(_usedCitrateFirst);
    }
  }
}

function checkBloodFlowRate() {
  var totalPoints = 0;
  var msg;

  if (_currentOrders["BFR"] >= 200 && _currentOrders["BFR"] <= 300) {
    console.log("checkBloodFlowRate() : within bounds ", _currentOrders["BFR"]);
    totalPoints = totalPoints + 5;
  }

  if (_currentOrders["BFR"] <= 150) {
    msg =
      "The patient's nurse called.  She's been having many \"Low Return Pressure Alarms\" over the past 4 hours, and the machine is not running well.";
    _newMessages.push(msg);
    totalPoints = totalPoints - 100;
  }

  if (_currentOrders["BFR"] > 350) {
    msg =
      'The patient\'s nurse called to inform you of frequent "Access Pressure Extremely Low" alarms, and had to decrease BFR to 300.';
    _newMessages.push(msg);
    _currentOrders["BFR"] = 300;
    totalPoints = totalPoints - 50;
  }
  _points.bloodFlowRateInRange.push(totalPoints);
  return;
}

function checkSodium(caseId) {
  var totalPoints = 0;
  // var currentSodium =
  //   _historicalLabs["sodium"][_historicalLabs["sodium"].length - 1];
  var currentSodium =
    labsInitial[caseId].sodium[labsInitial[caseId].sodium.length - 1];
  var msg;
  if (currentSodium >= 135 && currentSodium <= 145) {
    console.log("checkSodium() : within bounds ", currentSodium);
    totalPoints = totalPoints + 5;
  }

  if (currentSodium < 135) {
    msg =
      "The primary team is concerned about the patient's hyponatremia. Please modify the CRRT prescription.";
    _newMessages.push(msg);
    totalPoints = totalPoints - 100;
  }

  if (currentSodium > 145) {
    msg =
      "The primary team is concerned about the patient's hypernatremia. Please modify the CRRT prescription.";
    _newMessages.push(msg);
    totalPoints = totalPoints - 100;
  }

  _points.sodiumInRange.push(totalPoints);
  return;
}

function checkSodiumCase2(caseId) {
  var totalPoints = 0;
  var currentSodium =
    labsInitial[caseId].sodium[labsInitial[caseId].sodium.length - 1];
  var msg;

  // Bonus 150 points if sodium is 154-156 (inclusive) after the first order
  if (_currentTime === 8 && (currentSodium >= 154 && currentSodium <= 156)) {
    totalPoints = totalPoints + 150;
  }

  if (currentSodium >= 150 && currentSodium <= 160) {
    console.log("checkSodium() : within bounds: ", currentSodium);
    totalPoints = totalPoints + 5;
  }

  if (currentSodium < 150) {
    console.log("checkSodium() : concerned below: ", currentSodium);
    msg =
      "The primary team is concerned about the patient's hyponatremia. Please modify the CRRT prescription.";
    _newMessages.push(msg);
    totalPoints = totalPoints - 50;
  }

  if (currentSodium > 160) {
    console.log("checkSodium() : concerned above: ", currentSodium);
    msg =
      "The primary team is concerned about the patient's hypernatremia. Please modify the CRRT prescription.";
    _newMessages.push(msg);
    totalPoints = totalPoints - 50;
  }

  if (currentSodium > 170) {
    console.log("checkSodium() : urgent above: ", currentSodium);
    msg =
      "The patient developed a subarachnoid hemorrhage in the hospital, and was transitioned to comfort care by the family. The sodium concentration >170 mmol/L was thought to be the main culprit. Try the scenario again, with less 3% saline";
    _caseOver = true;
    _newMessages.push(msg);
    totalPoints = totalPoints - 1000;
  }

  if (currentSodium < 130) {
    console.log("checkSodium() : lethal below: ", currentSodium);
    msg =
      "The patient developed cerebral edema leading to brain herniation, and passed away. The sodium concentration <130 mmol/L was thought to be the etiology. Try the scenario again, without using D5W.";
    _caseOver = true;
    _newMessages.push(msg);
    totalPoints = totalPoints - 1000;
  }
  _points.sodiumInRange.push(totalPoints);
  return;
}

function checkPotassium(caseId) {
  var totalPoints = 0;
  var currentPotassium =
    labsInitial[caseId].potassium[labsInitial[caseId].potassium.length - 1];

  if (currentPotassium > 3.3) {
    console.log("checkPotassium() : within bounds ", currentPotassium);
    totalPoints = totalPoints + 5;
  }

  if (currentPotassium < 3.3) {
    var msg =
      "The primary team is concerned about the patient’s hypokalemia.  Please modify the CRRT prescription";
    _newMessages.push(msg);
    totalPoints = totalPoints - 100;
  }

  _points.potassiumInRange.push(totalPoints);
  return;
}

function checkPotassiumCase2(caseId) {
  var totalPoints = 0;
  var currentPotassium =
    labsInitial[caseId].potassium[labsInitial[caseId].potassium.length - 1];
  var msg;

  if (currentPotassium > 3.3) {
    console.log("checkPotassium() : within bounds ", currentPotassium);
    totalPoints = totalPoints + 5;
  }

  if (currentPotassium < 3.3) {
    msg =
      "The primary team is concerned about the patient’s hypokalemia.  Please modify the CRRT prescription";
    _newMessages.push(msg);
    totalPoints = totalPoints - 100;
  }

  if (currentPotassium < 2.5) {
    var d = Math.random();
    if (d < 0.5) {
      _caseOver = true;
      msg =
        "The patient developed ventricular fibrillation, and resuscitation efforts were ended after 30 minutes of CPR. The patient’s extreme hypokalemia was thought to be the inciting factor. Try the case again, and make sure there is enough potassium in the replacement or dialysate fluid to maintain normal values.";
      totalPoints = totalPoints - 1000;
    }
  }

  _points.potassiumInRange.push(totalPoints);
  return;
}

const calculateFiltrationFraction = (
  currentOrder,
  caseId,
  currentTime,
  timeBetweenOrders
) => {
  var ff;
  var hct =
    getCurrentLab("hematocrit", caseId, currentTime, timeBetweenOrders) / 100;
  console.log("calculateFiltrationFraction : hematocrit ", hct);
  console.log("order order ORDER: ", currentOrder);

  switch (currentOrder["modality"]) {
    case "Pre-filter CVVH":
      ff =
        ((currentOrder["Qr"] + currentOrder["grossUF"] / 1000) /
          (((currentOrder["BFR"] * 60) / 1000) * (1 - hct) +
            currentOrder["Qr"])) *
        100;
      break;
    case "Post-filter CVVH":
      ff =
        ((currentOrder["Qr"] + currentOrder["grossUF"] / 1000) /
          (((currentOrder["BFR"] * 60) / 1000) * (1 - hct))) *
        100;
      break;
    case "CVVHD":
      ff =
        (currentOrder["grossUF"] /
          1000 /
          (((currentOrder["BFR"] * 60) / 1000) * (1 - hct))) *
        100;
      break;
    default:
      return;
  }
  return excelRound(ff, 2);
};

// function calculateEffluentFlowRate(orders) {
//   var efr;
//   var currentFiltrationFraction = orders.filtrationFraction;

//   switch (orders["modality"]) {
//     case "pre-filter-cvvh":
//       efr =
//         ((orders["BFR"] * 60) /
//           1000 /
//           ((orders["BFR"] * 60) / 1000 + orders["Qr"])) *
//         (orders["Qr"] + orders["grossUF"] / 1000);
//       break;
//     case "post-filter-cvvh":
//       efr = orders["Qr"] + orders["grossUF"] / 1000;
//       break;
//     case "cvvhd":
//       efr = orders["Qd"] + orders["grossUF"] / 1000;
//       break;
//   }
// }

//   if (currentPotassium < 2.5) {
//     var d = Math.random();
//     if (d < 0.5) {
//       _caseOver = true;
//       var msg =
//         "The patient developed ventricular fibrillation, and resuscitation efforts were ended after 30 minutes of CPR. The patient’s extreme hypokalemia was thought to be the inciting factor. Try the case again, and make sure there is enough potassium in the replacement or dialysate fluid to maintain normal values.";
//       totalPoints = totalPoints - 1000;
//     }
//   }

//   _points.potassiumInRange.push(totalPoints);
//   return;
// }

function checkChloride() {
  // No errors associated with Chloride in Case #1
}

function checkBicarbonate(caseId) {
  checkPH(caseId);
}

function checkBicarbonateCase2(caseId) {
  checkPHCase2(caseId);
}

function checkPH(caseId) {
  var totalPoints = 0;
  // var currentPH = _historicalLabs["pH"][_historicalLabs["pH"].length - 1];
  var currentPH = labsInitial[caseId].ph[labsInitial[caseId].ph.length - 1];
  var msg;

  if (currentPH >= 7.2 && currentPH <= 7.45) {
    console.log("checkPH() : within bounds ", currentPH);
    totalPoints = totalPoints + 10;
  }

  if (currentPH < 7.0) {
    msg = "The patient has died of overwhelming sepsis and acidosis.";
    _newMessages.push(msg);
    totalPoints = totalPoints - 1000;
  }

  if (currentPH < 7.2 && currentPH > 7.0) {
    msg =
      "The primary team called with concerns regarding the patient's ongoing acidosis.  Please modify the CRRT prescription.";
    _newMessages.push(msg);
    totalPoints = totalPoints - 100;
  }

  if (currentPH > 7.45 && currentPH < 7.5) {
    msg =
      "The primary team called with concerns regarding the patient's new alkalosis.  Please modify the CRRT prescription.”";
    _newMessages.push(msg);
    totalPoints = totalPoints - 50;
  }

  if (currentPH > 7.5) {
    msg =
      "The ICU team is very concerned about the patient’s alkalosis.  They will be calling your attending if it is not addressed immediately.";
    _newMessages.push(msg);
    totalPoints = totalPoints - 100;
  }

  _points.pHInRange.push(totalPoints);
  return;
}

function checkPHCase2(caseId) {
  var totalPoints = 0;
  var currentPH = labsInitial[caseId].ph[labsInitial[caseId].ph.length - 1];
  var msg;

  if (currentPH < 7.0) {
    msg = "The patient has died of overwhelming acidosis.";
    _newMessages.push(msg);
    _caseOver = true;
    totalPoints = totalPoints - 1000;
  }

  if (currentPH < 7.2 && currentPH > 7.0) {
    msg =
      "The primary team called with concerns regarding the patient's ongoing acidosis.  Please modify the CRRT prescription.";
    _newMessages.push(msg);
    totalPoints = totalPoints - 100;
  }

  if (currentPH > 7.45 && currentPH < 7.55) {
    msg =
      "The primary team called with concerns regarding the patient's new alkalosis.  Please modify the CRRT prescription.";
    _newMessages.push(msg);
    totalPoints = totalPoints - 50;
  }

  if (currentPH > 7.55 && currentPH < 7.65) {
    msg =
      "The ICU team is very concerned about the patient’s alkalosis.  They will be calling your attending if it is not addressed immediately.";
    _newMessages.push(msg);
    totalPoints = totalPoints - 100;
  }

  if (currentPH > 7.65) {
    msg =
      "The patient developed intractable seizures, and sustained severe brain damage eventually leading to withdrawal of care. The alkalosis to > 7.65 was thought to be the inciting factor.";
    _newMessages.push(msg);
    _caseOver = true;
    totalPoints = totalPoints - 1000;
  }

  _points.pHInRange.push(totalPoints);
  return;
}

function checkCalcium(caseId) {
  // TODO: Doc from Ben says "NOT when using citrate" -- do we not run these checks if we are using citrate?
  // if using citrate - divide by 8
  var totalPoints = 0;
  var currentCalcium =
    labsInitial[caseId].calcium[labsInitial[caseId].calcium.length - 1];
  var msg;

  if (currentCalcium >= 7.5 && currentCalcium <= 10) {
    console.log("checkCalcium() : within bounds ", currentCalcium);
    totalPoints = totalPoints + 5;
  }

  if (currentCalcium < 7.5) {
    msg =
      "The primary team is concerned about the patient's ongoing hypocalcemia. Please modify the prescription.";
    _newMessages.push(msg);
    totalPoints = totalPoints - 1000;
  }

  if (currentCalcium > 10 && currentCalcium <= 12) {
    msg =
      "The primary team is concerned about the patient's new hypercalcemia. Please modify the prescription.";
    _newMessages.push(msg);
    totalPoints = totalPoints - 100;
  }

  if (currentCalcium > 12) {
    msg =
      "The ICU team is very concerned about the patient's hypercalcemia. They will be calling your attending if it is not addressed immediately.";
    _newMessages.push(msg);
    totalPoints = totalPoints - 200;
  }

  _points.calciumInRange.push(totalPoints);
  return;
}

function checkCalciumCase2(order, caseId) {
  var totalPoints = 0;
  var currentCalcium =
    labsInitial[caseId].calcium[labsInitial[caseId].calcium.length - 1];
  var msg;

  if (order.anticoagulation === "citrate") {
    var currentCalciumIonized =
      _historicalLabs["ionizedCalcium"][
        _historicalLabs["ionizedCalcium"].length - 1
      ];
  }

  if (currentCalcium >= 8 && currentCalcium <= 10) {
    console.log("checkCalciumCase2() : within bounds ", currentCalcium);
    totalPoints = totalPoints + 5;
  }

  if (currentCalciumIonized >= 1.0 && currentCalciumIonized <= 1.3) {
    console.log(
      "checkCalciumCase2() : ionized calcium within bounds ",
      currentCalciumIonized
    );
    totalPoints = totalPoints + 5;
  }

  if (currentCalciumIonized >= 1.1 && currentCalciumIonized <= 1.2) {
    console.log(
      "checkCalciumCase2() : ionized calcium within bounds bonus",
      currentCalciumIonized
    );
    totalPoints = totalPoints + 5;
  }

  if (currentCalcium < 6.5) {
    msg =
      "The patient developed ventricular fibrillation, and resuscitation efforts were ended after 30 minutes of CPR. The patient’s extreme hypocalcemia was thought to be the inciting factor. Try the case again, and make sure there is enough calcium in the replacement or dialysate fluid to maintain normal values.";
    _newMessages.push(msg);
    _caseOver = true;
    totalPoints = totalPoints - 1000;
  }

  if (currentCalcium >= 6.5 && currentCalcium < 7.5) {
    msg =
      "The primary team is concerned about the patient's ongoing hypocalcemia.  Please modify the prescription.";
    _newMessages.push(msg);
    totalPoints = totalPoints - 100;
  }

  if (currentCalcium > 10 && currentCalcium <= 12) {
    msg =
      "The primary team is concerned about the patient's new hypercalcemia. Please modify the prescription.";
    _newMessages.push(msg);
    totalPoints = totalPoints - 100;
  }

  if (currentCalcium > 12 && currentCalcium <= 14) {
    msg =
      "The ICU team is very concerned about the patient's hypercalcemia. They will be calling your attending if it is not addressed immediately.";
    _newMessages.push(msg);
    totalPoints = totalPoints - 200;
  }

  if (currentCalcium > 14) {
    msg =
      "The patient developed ventricular fibrillation, and resuscitation efforts were ended after 30 minutes of CPR. The patient’s extreme hypercalcemia was thought to be the inciting factor. Try the case again. If using citrate and make sure there is enough calcium in the replacement or dialysate fluid to maintain normal values.";
    _newMessages.push(msg);
    _caseOver = true;
    totalPoints = totalPoints - 1000;
  }

  _points.calciumInRange.push(totalPoints);
  return;
}

function checkMagnesium(caseId) {
  var totalPoints = 0;
  var currentMagnesium =
    labsInitial[caseId].magnesium[labsInitial[caseId].magnesium.length - 1];

  if (currentMagnesium > 1.4) {
    console.log("checkMagnesium() : within bounds ", currentMagnesium);
    totalPoints = totalPoints + 5;
  }

  if (currentMagnesium < 1.4) {
    var msg =
      "The primary team is concerned about the patient's hypomagnesemia, and would like you to address it";
    _newMessages.push(msg);
    totalPoints = totalPoints - 50;
  }

  _points.magnesiumInRange.push(totalPoints);
  return;
}

function checkMagnesiumCase2(caseId) {
  var totalPoints = 0;
  var currentMagnesium =
    labsInitial[caseId].magnesium[labsInitial[caseId].magnesium.length - 1];
  var msg;

  if (currentMagnesium >= 1.0 && currentMagnesium < 1.4) {
    msg =
      "The primary team is concerned about the patient's hypomagnesemia, and would like you to address it";
    _newMessages.push(msg);
    totalPoints = totalPoints - 50;
  }

  if (currentMagnesium < 1.0) {
    var d = Math.random();
    if (d < 0.2) {
      _caseOver = true;
      msg =
        "The patient developed Torsades de Pointes, and resuscitation efforts were ended after 30 minutes of CPR. The patient’s extreme hypomagnesemia was thought to be the inciting factor. Try the case again, and make sure there is enough magnesium in the replacement or dialysate fluid to maintain normal values.";
      totalPoints = totalPoints - 1000;
    }
  }

  _points.magnesiumInRange.push(totalPoints);
  return;
}

function checkPhosphorous(caseId) {
  // TODO: There will be a scheduled sodium phosphorous replacement option for when the sodium goes low, TBD
  //  - Adding sodium phosphate (15 mmol/dL) will modify the phosphate “[X] Dialysate” as follows:
  //      - (465/t(which will equal 6)) (Effluent Flow Rate *10)
  //      - This should reset after each cycle, so it’s not automatically given every 6 hours
  var totalPoints = 0;
  var currentPhosphorous =
    labsInitial[caseId].phosphorous[labsInitial[caseId].phosphorous.length - 1];

  if (currentPhosphorous > 2.0) {
    console.log(
      "checkPhosphorous() : within bounds (> 2.0)",
      currentPhosphorous
    );
    totalPoints = totalPoints + 10;
  }

  if (currentPhosphorous < 1) {
    console.log("checkPhosphorous() : < 1 ", currentPhosphorous);
    var msg =
      "The primary team is concerned about the patient's hypophosphatemia, and would like you to address the problem";
    _newMessages.push(msg);
    totalPoints = totalPoints - 100;
  }

  _points.phosphorousInRange.push(totalPoints);
  return;
}

function checkGrossUltrafiltration(caseId, currentTime) {
  var totalPoints = 0;
  var fluidInPastEightHoursInLiters =
    parseFloat(
      inputOutputInitial[caseId].previousSixHourTotal[currentTime + 1]
    ) / 1000;
  var totalHoursOfFiltration = 8;
  // NOTE: If BFR is <= 150, grossUF for two hours is 0, therefore, we only have 4 hours of filtration. (This *might* only be for case study #1)
  if (_currentOrders["BFR"] <= 150) {
    totalHoursOfFiltration = 4;
  }
  var grossFiltrationPastEightHoursInLiters =
    (_currentOrders["grossUF"] / 1000) * totalHoursOfFiltration;
  var filtrationRate =
    (grossFiltrationPastEightHoursInLiters - fluidInPastEightHoursInLiters) *
    1000;

  if (filtrationRate > 1500) {
    console.log("checkGrossUltrafiltration() : > 200 ", filtrationRate);
    var msg =
      "The patient's pressor requirements are increasing, and the team is concerned that the high rate of ultrafiltration is causing hemodynamic instability. Please reduce your ultrafiltration rate";
    _newMessages.push(msg);
    totalPoints = totalPoints - 100;
  }

  _points.grossUltrafiltrationInRange.push(totalPoints);
}

function checkFilterClottingCase1() {
  var totalPoints = 0;
  var currentFiltrationFraction = parseFloat(_currentOrders.filtrationFraction);
  var didClot = false;
  var msg;

  if (currentFiltrationFraction < 25) {
    console.log(
      "checkFiltrationFraction() : within bounds ",
      currentFiltrationFraction
    );
    totalPoints = totalPoints + 5;
  }

  if (
    currentFiltrationFraction > 25 &&
    currentFiltrationFraction <= 30 &&
    _currentOrders.anticoagulation === "None"
  ) {
    msg = "The patient’s filter clotted once, and was replaced.";
    _numFiltersUsed = _numFiltersUsed + 1;
    _newMessages.push(msg);
    totalPoints = totalPoints - 50;
    didClot = true;
  }

  if (
    currentFiltrationFraction > 30 &&
    _currentOrders.anticoagulation === "None"
  ) {
    // TODO: effluent is divided by 3, gross UF for 4 hours will be 0 (Not sure what to do if BFR is also modifying effluent rate and UF time)
    msg = "The patient’s filter clotted twice, and was replaced.";
    _numFiltersUsed = _numFiltersUsed + 2;
    _newMessages.push(msg);
    totalPoints = totalPoints - 100;
    didClot = true;
  }

  _points.filtrationFractionInRange.push(totalPoints);
  return didClot;
}
function checkFilterClottingCase2(
  currentOrder,
  startingWeight,
  effluentFlowRate,
  ionizedCalcium
) {
  console.log("effluentFlowRate :", effluentFlowRate);
  var totalPoints = 0;
  var currentFiltrationFraction = _currentOrders.filtrationFraction;
  var didClot = false;

  var initialCitrateResults = runCitrateCalculations(
    currentOrder,
    startingWeight,
    effluentFlowRate,
    ionizedCalcium
  );
  var initialPostFilterIonizedCalcium =
    initialCitrateResults["calciumFinalPostFilter"];
  let d;

  if (_currentOrders.anticoagulation === "none") {
    var msg =
      "The filter clotted once, and was replaced.  The nurse reports that the access does not seem to be pulling well.  She has reversed the lines and positioned the patient appropriately.  The primary team does not feel a new access placement is currently possible given the highly elevated INR.";
    _numFiltersUsed = _numFiltersUsed + 1;
    _newMessages.push(msg);
    // For the first filter, we don't detract points for a clotted filter. For future filters, we subtract 100 points.
    //

    if (_numFiltersUsed !== 1) {
      totalPoints = totalPoints - 100;
    }
    didClot = true;
  }

  if (
    initialPostFilterIonizedCalcium >= 0.3 &&
    initialPostFilterIonizedCalcium <= 0.4
  ) {
    // 10% chance of a clot
    d = Math.random();
    if (d < 0.1) {
      didClot = true;
      totalPoints = totalPoints - 50;
    }
  }

  if (
    initialPostFilterIonizedCalcium > 0.4 &&
    initialPostFilterIonizedCalcium <= 0.5
  ) {
    // 50% chance of a clot
    d = Math.random();
    if (d < 0.5) {
      didClot = true;
      totalPoints = totalPoints - 50;
    }
  }

  if (initialPostFilterIonizedCalcium > 0.5) {
    didClot = true;
    totalPoints = totalPoints - 50;
  }

  if (currentFiltrationFraction < 25) {
    totalPoints = totalPoints + 5;
  }

  _points.filtrationFractionInRange.push(totalPoints);
  return didClot;
}

function checkDose(effluentFlowRate) {
  var dose;
  var newEffluentFlowRate = effluentFlowRate * 1000;
  var totalPoints;
  switch (_currentOrders["modality"]) {
    case "pre-filter-cvvh":
      dose =
        (((_currentOrders["BFR"] * 60) /
          1000 /
          ((_currentOrders["BFR"] * 60) / 1000 + _currentOrders["Qr"])) *
          newEffluentFlowRate) /
        _currentCaseStudy.startingData.usualWeight;
      break;
    case "post-filter-cvvh":
      dose = newEffluentFlowRate / _currentCaseStudy.startingData.usualWeight;
      break;
    case "cvvhd":
      dose = newEffluentFlowRate / _currentCaseStudy.startingData.usualWeight;
      break;
    default:
      return;
  }

  if (dose >= 20 && dose <= 40) {
    totalPoints = 10;
  }

  if (dose >= 20 && dose <= 25) {
    // TODO: Ben didn't delineate how many extra points should be given
    // for dose values between 20 and 25. I set it to ten extra points (for
    // a total of 20), but should check with him.
    totalPoints = 20;
  }

  if (dose < 20 || dose > 40) {
    totalPoints = -50;
  }
  _points.doseInRange.push(totalPoints);
  // NOTE: Set dose so we have access to it in the future
  _currentDose = excelRound(dose, 1);
  console.log(_currentDose);
  _historicalDose.push(dose);

  return dose;
}

function handleSimulationCompletion(caseId, currentTime) {
  // TODO:
  // * check to see if patient has died
  // * check to see if time limit has been reached
  // * handle simulation completion
  //   - show results
  //   - disable orders/etc.
  var currentWeight =
    vitalsInitial[caseId].weight[vitalsInitial[caseId].weight.length - 1];
  var currentPH = labsInitial[caseId].ph[labsInitial[caseId].ph.length - 1];
  var resultsOverview;
  // var caseEndingTime = 90;

  console.log("handleSimulationCompletion : currentTime", currentTime);

  if (currentPH < 7.0) {
    console.log("checkSimulationCompletion() : Patient has expired.");
    resultsOverview =
      "Your patient died of overwhelming acidosis and infection.  Mortality is high in critically ill patients who require dialysis, but your patient would have benefitted from more efficient CRRT.  Try increasing the bicarbonate concentration in the replacement or  dialysate fluid, or using more effective anticoagulation.  Restart the case and see if you can improve the outcome!";
    _caseOver = true;
  } else if (currentTime === 72 && currentWeight > 100) {
    console.log("checkSimulationCompletion() : Patient has expired.");
    resultsOverview =
      "Your patient died after developing positive blood cultures.";
    _caseOver = true;
  } else if (currentTime === 88) {
    console.log("checkSimulationCompletion() : You won!");
    resultsOverview =
      "Your patient survived her episode of sepsis due to pneumonia, complicated by severe AKI requiring CRRT.";
    setResultsTableVariables();
    // $("#resultsTable").show();
    _caseOver = true;
  } else if (currentTime === 90) {
    console.log("checkSimulationCompletion() : Patient has expired.");
    resultsOverview =
      "Your patient developed a secondary infection in the ICU, and subsequently died of overwhelming sepsis.  Mortality is high in critically ill patients who require dialysis, but your patient would have benefitted from more aggressive fluid removal.  Try the case again and see if you can improve the outcome!";
    setResultsTableVariables();
    // $("#resultsTable").show();
    _caseOver = true;
  }

  if (_caseOver) {
    // console.log("case over!");
    // $("#resultsOverview").text(resultsOverview);
    console.log(resultsOverview);
    // $("#resultsModal").modal("show");
    // $("#ordersButton").hide();
    // $("#resultsButton").show();
  }
}

function setResultsTableVariables() {
  // console.log("setResultsTableVariables()");
  // var numRounds = _currentTime / 8;
  // console.log("numRounds :", numRounds);
  // var dosePointsEarned = sum(_points.doseInRange);
  // var dosePointsMaxBonus = 350;
  // var dosePointsPossible =
  //   _points.maxPointsPerCycle["doseInRange"] * numRounds + dosePointsMaxBonus;
  // var doseAverageDelivered = excelRound(average(_historicalDose), 2);
  // var doseBonus = 0;
  // if (doseAverageDelivered >= 20 && doseAverageDelivered <= 40) {
  //   doseBonus += 100;
  // }
  // if (doseAverageDelivered >= 20 && doseAverageDelivered <= 25) {
  //   doseBonus += 250;
  // }
  // var totalDosePoints = dosePointsEarned + doseBonus;
  // var filterPointsEarned = sum(_points.filtrationFractionInRange);
  // var filterPointsMaxBonus = 300;
  // var filterPointsPossible =
  //   _points.maxPointsPerCycle["filtrationFractionInRange"] * numRounds +
  //   filterPointsMaxBonus;
  // var filterNumberUsed = _numFiltersUsed;
  // var filterAverageFilterLife = excelRound(_currentTime / _numFiltersUsed, 2);
  // var filterAverageFiltrationFraction = excelRound(
  //   average(_historicalLabs["filtrationFraction"]),
  //   2
  // );
  // var filterBonus = 0;
  // if (filterNumberUsed === 1) {
  //   filterBonus += 250;
  // }
  // if (filterAverageFiltrationFraction < 25) {
  //   filterBonus += 50;
  // }
  // var totalFilterPoints = filterPointsEarned + filterBonus;
  // var finalSodiumScore = sum(_points.sodiumInRange);
  // var finalPotassiumScore = sum(_points.potassiumInRange);
  // var finalCalciumScore = sum(_points.calciumInRange);
  // var finalMagnesiumScore = sum(_points.magnesiumInRange);
  // var finalPhosphorousScore = sum(_points.phosphorousInRange);
  // var electrolyteBonus = 0;
  // var electrolytePointsMaxBonus = 200;
  // var electrolytePointsEarned =
  //   finalSodiumScore +
  //   finalPotassiumScore +
  //   finalCalciumScore +
  //   finalMagnesiumScore +
  //   finalPhosphorousScore;
  // var electrolytePointsPossible =
  //   _points.maxPointsPerCycle["sodiumInRange"] * 6 +
  //   _points.maxPointsPerCycle["potassiumInRange"] * 6 +
  //   _points.maxPointsPerCycle["calciumInRange"] * 6 +
  //   _points.maxPointsPerCycle["magnesiumInRange"] * 6 +
  //   _points.maxPointsPerCycle["phosphorousInRange"] * 6 +
  //   electrolytePointsMaxBonus;
  // if (electrolytePointsEarned === electrolytePointsPossible) {
  //   electrolyteBonus += 200;
  // }
  // var totalElectrolytePoints = electrolytePointsEarned + electrolyteBonus;
  // var acidBasePointsEarned = sum(_points.pHInRange);
  // var acidBasePointsPossible =
  //   _points.maxPointsPerCycle["pHInRange"] * numRounds;
  // var finalPH = _historicalLabs["pH"][_historicalLabs["pH"].length - 1];
  // var lowestPH = min(_historicalLabs["pH"]);
  // var highestPH = max(_historicalLabs["pH"]);
  // var acidBaseBonus = 0;
  // if (_historicalLabs["pH"].every(pHInRange)) {
  //   acidBaseBonus += 250;
  // }
  // var totalAcidBasePoints = acidBasePointsEarned + acidBaseBonus;
  // if (checkIfUsedCitrate()) {
  //   var citrateBonus = 0;
  //   var citratePointsEarned;
  //   var citratePointsMaxBonus = 150;
  //   var citratePointsPossible = citratePointsMaxBonus;
  //   var citrateAveragePostFilterIonizedCalcium = average(
  //     _historicalLabs["calciumFinalPostFilter"]
  //   );
  //   if (_usedCitrate) {
  //     citrateBonus += 50;
  //   }
  //   if (_usedCitrateFirst) {
  //     citrateBonus += 100;
  //   }
  //   var totalCitratePoints = citrateBonus;
  //   $("#citrateSection").show();
  // }
  // var volumePointsEarned = 0;
  // var volumePointsPossible = 200;
  // var initialWeight = _historicalVitals["weight"][0];
  // var finalWeight =
  //   _historicalVitals["weight"][_historicalVitals["weight"].length - 1];
  // var volumeCumulativeChange = excelRound(
  //   Math.abs(initialWeight - finalWeight),
  //   2
  // );
  // var volumeOverloadInitial = _historicalOverload[0];
  // var volumeOverload48Hours = _historicalOverload[48 / 8];
  // var volumeOverload72Hours = _historicalOverload[72 / 8];
  // if (volumeOverload48Hours < 15) {
  //   volumePointsEarned += 100;
  // }
  // if (volumeOverload72Hours < 10) {
  //   volumePointsEarned += 100;
  // } else {
  //   volumePointsEarned += -1000;
  // }
  // var totalVolumePoints = volumePointsEarned;
  // var totalScore =
  //   totalDosePoints +
  //   totalFilterPoints +
  //   totalElectrolytePoints +
  //   totalAcidBasePoints +
  //   totalCitratePoints +
  //   totalVolumePoints;
  // $("#totalDosePoints").text(totalDosePoints);
  // $("#dosePointsPossible").text(dosePointsPossible);
  // $("#doseAverageDelivered").text(doseAverageDelivered);
  // $("#totalFilterPoints").text(totalFilterPoints);
  // $("#filterPointsPossible").text(filterPointsPossible);
  // $("#filterNumberUsed").text(filterNumberUsed);
  // $("#filterAverageFilterLife").text(filterAverageFilterLife);
  // $("#filterAverageFiltrationFraction").text(filterAverageFiltrationFraction);
  // $("#totalElectrolytePoints").text(totalElectrolytePoints);
  // $("#electrolytePointsPossible").text(electrolytePointsPossible);
  // $("#finalSodiumScore").text(finalSodiumScore);
  // $("#finalPotassiumScore").text(finalPotassiumScore);
  // $("#finalCalciumScore").text(finalCalciumScore);
  // $("#finalMagnesiumScore").text(finalMagnesiumScore);
  // $("#finalPhosphorousScore").text(finalPhosphorousScore);
  // $("#totalAcidBasePoints").text(totalAcidBasePoints);
  // $("#acidBasePointsPossible").text(acidBasePointsPossible);
  // $("#finalPH").text(finalPH);
  // $("#lowestPH").text(lowestPH);
  // $("#highestPH").text(highestPH);
  // $("#totalCitratePoints").text(totalCitratePoints);
  // $("#citratePointsPossible").text(citratePointsPossible);
  // $("#citrateAveragePostFilterIonizedCalcium").text(
  //   citrateAveragePostFilterIonizedCalcium
  // );
  // $("#totalVolumePoints").text(totalVolumePoints);
  // $("#volumePointsPossible").text(volumePointsPossible);
  // $("#volumeCumulativeChange").text(volumeCumulativeChange);
  // $("#volumeOverloadInitial").text(volumeOverloadInitial);
  // $("#volumeOverload48Hours").text(volumeOverload48Hours);
  // $("#volumeOverload72Hours").text(volumeOverload72Hours);
  // $("#volumeInitialWeight").text(initialWeight);
  // $("#volumeFinalWeight").text(finalWeight);
}

// function handleOrderFormChanges() {
//   handleModalityChanges();
//   handleAnticoagulationChanges();
//   handleOtherFluidsChanges();
// }

// function handleModalityChanges() {
//   $(".modality-input").change(function() {
//     if (this.value == "cvvhd") {
//       showCVVHDFormOptions();
//     } else {
//       showCVVHFormOptions();
//     }
//   });
// }

// function handleAnticoagulationChanges() {
//   $(".anticoagulation-input").change(function() {
//     setAnticoagulationFormElements(this.value);
//   });
// }

// function handleOtherFluidsChanges() {
//   $("#other-fluids-saline").change(function() {
//     if (this.checked === true) {
//       $("#other-fluids-values").show();
//       $("#other-fluids-bolus-text").text("Sodium Bolus (mL)");
//       $("#other-fluids-infusion-text").text(
//         "Sodium Continuous Infusion Rate (ml/Hr)"
//       );
//       $("#other-fluids-D5W").prop("checked", false);
//     }
//   });

//   $("#other-fluids-D5W").change(function() {
//     if (this.checked === true) {
//       $("#other-fluids-values").show();
//       $("#other-fluids-bolus-text").text("D5W Bolus (mL)");
//       $("#other-fluids-infusion-text").text(
//         "D5W Continuous Infusion Rate (ml/Hr)"
//       );
//       $("#other-fluids-saline").prop("checked", false);
//     }
//   });

//   $("#other-fluids-sodium-phosphate").change(function() {
//     if (this.checked === true) {
//     }
//   });

//   $(".other-fluids").change(function() {
//     if (
//       $("#other-fluids-saline").is(":checked") === false &&
//       $("#other-fluids-D5W").is(":checked") === false
//     ) {
//       $("#other-fluids-values").hide();
//     }
//   });
// }

// function showCVVHDFormOptions() {
//   $("#fluidLegend").text("Dialysate Fluid");
//   $("#fluidFlowLegend").text("Dialysate Fluid Flow Rate (L/hr)");
// }

// function showCVVHFormOptions() {
//   $("#fluidLegend").text("Replacement Fluid");
//   $("#fluidFlowLegend").text("Replacement Fluid Flow Rate (L/hr)");
// }

// function showCitrateFormOptions() {
//   console.log("showCitrateFormOptions()");
//   $(".citrate").show();
//   $(".heparin").hide();
// }

// function showHeparinFormOptions() {
//   $(".heparin").show();
//   $(".citrate").hide();
// }

// function showNoAnticoagulationFormOptions() {
//   $(".heparin").hide();
//   $(".citrate").hide();
// }

// function processMessages() {
//   var newMessages = _newMessages;
// var messageContainer = $("<ul id='testing'></ul>").addClass("card-text");
// var time = $('<p></p>').addClass('case-time').text(currentTimeToTimestamp(false, 0));
// var time = $("<p></p>")
//   .addClass("case-time")
//   .text(`${_headerTime}:00 ${_headerTimeAmPm} - Day ${_headerDay}`);
// messageContainer.append(time);

// for (var i = 0; i < newMessages.length; i++) {
// var message = $("<li></li>").text(newMessages[i]);
// messageContainer.append(message);
// messageContainer.append("<hr>");
// }

// if (newMessages.length === 0) {
// var message = $("<li></li>").text(
//   "CRRT is running smoothly. There were no reported issues since the previous update."
// );
// messageContainer.append(message);
// messageContainer.append("<hr>");
// }

// if (newMessages.length > 0) {
//   _messages.push(newMessages);
//   _newMessages = [];
// }

// messageContainer.append("<hr>");

// $("#message-box").prepend(messageContainer);
// }

// function currentTimeToTimestamp(showTimeElapsed, additionalOffsetInHours = 0) {
//   var timestamp = moment(_startingTime)
//     .add(_currentTime, "hours")
//     .add(additionalOffsetInHours, "hours")
//     .format("H:mm");
//   var currentDay = Math.floor(_currentTime / 24) + 1;

//   if (showTimeElapsed === true) {
//     timestamp += " (T+" + _currentTime + "hrs)";
//   }

//   timestamp += " Day " + currentDay;

//   return timestamp;
// }

// function pHInRange(element, index, array) {
//   return element >= 7.2 && element <= 7.45;
// }

// function sum(array) {
//   var sum = array.reduce(function(previousValue, currentValue) {
//     return currentValue + previousValue;
//   });
//   return sum;
// }

// function average(array) {
//   return sum(array) / array.length;
// }

// function min(array) {
//   return Math.min.apply(Math, array);
// }

// function max(array) {
//   return Math.max.apply(Math, array);
// }

// function getParameterByName(name, url) {
//   if (!url) url = window.location.href;
//   name = name.replace(/[\[\]]/g, "\\$&");
//   var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
//     results = regex.exec(url);
//   if (!results) return null;
//   if (!results[2]) return "";
//   return decodeURIComponent(results[2].replace(/\+/g, " "));
// }

function excelRound(val, num) {
  // var coef = Math.pow(10, num);
  // return (Math.round(val * coef))/coef;

  return Number.parseFloat(val).toFixed(2);
}

// // String.prototype.capitalize = function() {
// //   return this.charAt(0).toUpperCase() + this.slice(1);
// };
