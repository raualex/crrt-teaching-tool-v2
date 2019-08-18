const ordersResults = {
  dosages :  {   
    'sodium': {
      min: "The primary team is concerned about the patient's hyponatremia.",
      max: "The primary team is concerned about the patient's hypernatremia."
    },
    'potassium': {
      min: 'The primary team is concerned about the patient’s hypokalemia.',
      max: 'CHECK TO SEE IF THERE SHOULD BE A MAX'
    },
    'chloride': {
      min: 95,
      max: 110
    },
    'bicarbonate': {
      min: 20,
      max: 40
    },
    'calcium': {
      min: 0,
      max: 3
    },
    'magnesium': {
      min: 0,
      max: 2
    },
    'phosphorous': {
      min: 0,
      max: 1
    },
    'grossUltraFiltration': {
      min: 0,
      max: 2000
    },
    'bloodFlowRate': {
      min: 200,
      max: 400
    },
    'replacementFluidFlowRate': {
      min: 0,
      max: 8
    }
  }
}

export default ordersResults;