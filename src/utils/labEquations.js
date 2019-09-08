import { labDataValues } from "../utils/labDataValues";

const excelRound = (val, num) => {
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
  const labDataKeys = Object.keys(labDataValues)

  const newLabData = labDataKeys.reduce((updatedLabResults, labKey) => {

    const {
      dialysate,
      effluentFlowRate,
      volumeOfDistribution,
      productionRate
    } = labDataValues[labKey];

    let initialValue

    if(!updatedLabResults[labKey]) {
      updatedLabResults[labKey] = []
    }

    if(!labData[labKey].length) {
      initialValue = currentOrder.dosages[labKey];
    } else {
      updatedLabResults[labKey] = labData[labKey]
      const lastLabDataIndex = labData[labKey].length - 1
      initialValue = labData[labKey][lastLabDataIndex];
    }

    for(let i=1; i<=timeBetweenOrders; i++) {
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
      
      const lastUpdatedLabResultsIndex = updatedLabResults[labKey].length - 1
      initialValue = updatedLabResults[labKey][lastUpdatedLabResultsIndex]
    }
    return updatedLabResults;
  }, {});
  return newLabData
};

//once done, need bicarbonate and pc02