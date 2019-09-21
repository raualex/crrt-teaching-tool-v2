import { labDataValues } from "../utils/labDataValues";

const excelRound = val => {
  // var coef = Math.pow(10, num);
  // return (Math.round(val * coef))/coef;

  return Number.parseFloat(val).toFixed(2);
};

const calculateLab = (
  initialValue,
  dialysate,
  effluentFlowRate,
  time,
  weight,
  volumeOfDistribution,
  productionRate
) => {
  let newValue =
    initialValue +
    (dialysate - initialValue) *
      (1 - Math.exp((-effluentFlowRate * time) / volumeOfDistribution)) +
    (productionRate / effluentFlowRate) *
      (1 - Math.exp((-effluentFlowRate * time) / volumeOfDistribution));
  newValue = excelRound(newValue, 2);
  return newValue;
};

export const compileLabData = (
  labData,
  timeBetweenOrders,
  usualWeight,
  currentOrder
) => {
  const currentLabDataResultsKeys = Object.keys(labData);
  const primaryLabDataKeys = Object.keys(labDataValues);

  const newLabData = currentLabDataResultsKeys.reduce(
    (updatedLabResults, labKey) => {
      if (!updatedLabResults[labKey]) {
        updatedLabResults[labKey] = [];
      }

      let initialValue;
      let initialBicarbonateValue;

      if (!labData[labKey].length) {
        initialValue = currentOrder.dosages[labKey];
      } else {
        updatedLabResults[labKey] = labData[labKey];
        const lastLabDataIndex = labData[labKey].length - 1;
        initialValue = labData[labKey][lastLabDataIndex];
      }

      if (primaryLabDataKeys.includes(labKey)) {
        const {
          dialysate,
          effluentFlowRate,
          volumeOfDistribution,
          productionRate
        } = labDataValues[labKey];

        for (let i = 1; i <= timeBetweenOrders; i++) {
          const labResult = calculateLab(
            initialValue,
            dialysate,
            effluentFlowRate,
            timeBetweenOrders,
            usualWeight,
            volumeOfDistribution,
            productionRate
          );

          updatedLabResults[labKey].push(parseFloat(labResult));

          const lastUpdatedLabResultsIndex =
            updatedLabResults[labKey].length - 1;
          initialValue = updatedLabResults[labKey][lastUpdatedLabResultsIndex];
        }
      } else if (labKey === "ph") {
        if (!updatedLabResults.pc02) {
          updatedLabResults.pc02 = [];
        }
        if (!labData.bicarbonate.length) {
          initialBicarbonateValue = currentOrder.dosages.bicarbonate;
        } else {
          updatedLabResults.bicarbonate = labData[labKey];
          const lastUpdatedBicarbonateIndex =
            updatedLabResults.bicarbonate.length - 1;
          initialBicarbonateValue =
            updatedLabResults.bicarbonate[lastUpdatedBicarbonateIndex];
        }

        for (let i = 1; i <= timeBetweenOrders; i++) {
          const phResults = calculatePH(initialBicarbonateValue);
          updatedLabResults.ph.push(phResults.ph);
          updatedLabResults.pc02.push(phResults.pc02);

          const lastUpdatedBicarbonateIndex =
            updatedLabResults.bicarbonate.length - 1;
          initialBicarbonateValue =
            updatedLabResults.bicarbonate[lastUpdatedBicarbonateIndex];
        }
      }
      return updatedLabResults;
    },
    {}
  );

  return newLabData;
};

const calculatePH = bicarbonate => {
  const pc02 = parseFloat(excelRound(1.5 * bicarbonate + 8));
  const ph = parseFloat(
    excelRound(6.1 + Math.log(bicarbonate / (0.03 * pc02)) / Math.log(10))
  );
  return {
    ph,
    pc02
  };
};

//once done, need bicarbonate and pc02

//from crrt 1
// const calculatePH = (bicarbonate) => {
//   const PCO2 = getCurrentLab("PC02");
//   const pH = 6.1 + Math.log(bicarbonate/(0.03*PCO2)) / Math.log(10);
//   console.log("calculatePH : pH", pH);
//   return excelRound(pH, 2);
// }

// const getCurrentLab = (lab) => {
//   let currentLabSetIndex;

//   if (this.props.timeStamp === 0) {
//     currentLabSetIndex = 1;
//   } else {
//     currentLabSetIndex = (_currentTime/8) + 1;
//   }

//   return parseFloat(_currentCaseStudySheet.labs.elements[currentLabSetIndex][lab]);
// }

const defaultLabDataState = {
  // sodium: [],
  // potassium: [],
  // chloride: [],
  // bicarbonate: [],
  // bun: [],
  // creatinine: [],
  // calcium: [],
  ionizedCalcium: [],
  magnesium: [],
  // phosphorous: [],
  // ph: [],
  filtrationFraction: [],
  calciumFinalPostFilter: [],
  lactate: [],
  albumin: [],
  wbc: [],
  hemoglobin: [],
  hematocrit: [],
  plateletCount: [],
  // pc02: [],
  granularCasts: [],
  renalEpithelialCasts: [],
  bloodCulture: [],
  urineCulture: []
};

//Now need to factor in anticoag, etc., and calculate sodium accordingly
//Points system?

// runLabs() line 1161 - older CRRT version
// runCitrateCalculations

// // NOTE: Because sodium calculations are a bit different than other lab values, we need to recalculate
// // sodium using the calculateSodium() function.
// newLabs["sodium"] = calculateSodium(volumeOfDistribution, effluentFlowRate);
// // NOTE: If we're using sodium phosphate, we need to recalculate the phosphorous results
// if (orders.otherFluidsSodiumPhosphate) {
//   console.log("runLabs : using sodium phosphate");
//   newLabs["phosphorous"] = calculatePhosphourous(volumeOfDistribution, effluentFlowRate);
// }

// preLabChecks(effluentFlowRate);
// postLabChecks() {
//   switch (_currentCaseStudyId) {
//     case 1:
//       checkSodium();
//       checkPotassium();
//       checkChloride();
//       checkBicarbonate();
//       checkCalcium();
//       checkMagnesium();
//       checkPhosphorous();
//       checkGrossUltrafiltration();
//       handleSimulationCompletion();
//       break;

// checkIfUsedCitrate()
// checkBloodFlowRate()
