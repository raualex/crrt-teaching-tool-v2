const excelRound = (val, num) => {
  // var coef = Math.pow(10, num);
  // return (Math.round(val * coef))/coef;

  return Number.parseFloat(val).toFixed(2)
}

export const calculateLab = (initialValue, dialysate, effluentFlowRate, time, weight, volumeOfDistribution, productionRate) => {
  let newValue = initialValue + (dialysate - initialValue) * (1 - Math.exp(-effluentFlowRate*time/volumeOfDistribution)) + (productionRate/effluentFlowRate)*(1 - Math.exp(-effluentFlowRate*time/volumeOfDistribution));
  newValue = excelRound(newValue, 2);
  return newValue
}

// initialValue, //whatever user types
// dialysate, //hard code these in from excel
// effluentFlowRate, //hard code these in from excel
// time, //hourly time between orders
// weight, //case
// volumeOfDistribution, //hard code these in from excel
// productionRate //hard code these in from excel