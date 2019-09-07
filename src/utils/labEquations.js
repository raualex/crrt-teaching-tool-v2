const excelRound = (val, num) => {
  // var coef = Math.pow(10, num);
  // return (Math.round(val * coef))/coef;

  return Number.parseFloat(val).toFixed(2)
}

const calculateLab = (initialValue, dialysate, effluentFlowRate, time, weight, volumeOfDistribution, productionRate) => {
  let newValue = initialValue + (dialysate - initialValue) * (1 - Math.exp(-effluentFlowRate*time/volumeOfDistribution)) + (productionRate/effluentFlowRate)*(1 - Math.exp(-effluentFlowRate*time/volumeOfDistribution));
  newValue = excelRound(newValue, 2);
  return newValue
}

export const compileLabData = () => {
  //call in orders modal - upon orders submission

  //take args: (labData object from Redux, time interval from Redux or orders submission, weight from selectedCase in Redux, entire obje t of values from user order submission)

  //call caculateLab(initialValue...) for each element (sodium, potassium, etc.) and push those values into the correct arrays in the Redux object that came in as an arg

  //cycle through that for each hour set by the time interval "9(i.e.:  time interval = 2, newReduxLabDataObj = { sodium: [ calculateLab results 1, calculateLab results 2], potassium: [calculateLab results 1, calculateLab results 2]"

  //once the final object from the calucaltions is complete, fire reducer/action to replace lab data object in redux with new one

}

//once done, need bicarbonate and pc02



// initialValue, //whatever user types
// dialysate, //hard code these in from excel
// effluentFlowRate, //hard code these in from excel
// time, //hourly time between orders
// weight, //case
// volumeOfDistribution, //hard code these in from excel
// productionRate //hard code these in from excel