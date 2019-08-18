const ordersResults = {
  'sodium': {
    belowRangeConcerned: 'The primary team is concerned about the patient’s hyponatremia.',
    aboveRangeConcerned: 'The primary team is concerned about the patient’s hypernatremia.',
    belowRangeEmergency: '',
    aboveRangeEmergency: 'The patient developed a subarachnoid hemorrhage in the hospital, and was transitioned to comfort care by the family. The sodium concentration >170 mmol/L was thought to be the main culprit. Try the scenario again, with less 3% saline',
    belowRangeDeath: 'The patient developed cerebral edema leading to brain herniation, and passed away. The sodium concentration <130 mmol/L was thought to be the etiology. Try the scenario again, without using D5W.',
    aboveRangeDeath: ''
  },
  'potassium': {
    belowRangeConcerned: 'The primary team is concerned about the patient’s hypokalemia.',
    aboveRangeConcerned: '',
    belowRangeEmergency: '',
    aboveRangeEmergency: '',
    belowRangeDeath: 'The patient developed ventricular fibrillation, and resuscitation efforts were ended after 30 minutes of CPR. The patient’s extreme hypokalemia was thought to be the inciting factor. Try the case again, and make sure there is enough potassium in the replacement or dialysate fluid to maintain normal values.',
    aboveRangeDeath: ''
  },
  'chloride': {
    belowRangeConcerned: '',
    aboveRangeConcerned: '',
    belowRangeEmergency: '',
    aboveRangeEmergency: '',
    belowRangeDeath: '',
    aboveRangeDeath: ''
  },
  'bicarbonate': {
    belowRangeConcerned: '',
    aboveRangeConcerned: '',
    belowRangeEmergency: '',
    aboveRangeEmergency: '',
    belowRangeDeath: '',
    aboveRangeDeath: ''
  },
  'calcium': {
    belowRangeConcerned: 'The primary team is concerned about the patient’s ongoing hypocalcemia.',
    aboveRangeConcerned: 'The primary team is concerned about the patient’s new hypercalcemia.',
    belowRangeEmergency: '',
    aboveRangeEmergency: 'The ICU team is very concerned about the patient’s hypercalcemia. They will be calling your attending if it is not addressed immediately.',
    belowRangeDeath: 'The patient developed ventricular fibrillation, and resuscitation efforts were ended after 30 minutes of CPR. The patient’s extreme hypocalcemia was thought to be the inciting factor. Try the case again, and make sure there is enough calcium in the replacement or dialysate fluid to maintain normal values.',
    aboveRangeDeath: 'The patient developed ventricular fibrillation, and resuscitation efforts were ended after 30 minutes of CPR. The patient’s extreme hypercalcemia was thought to be the inciting factor. Try the case again. If using citrate and make sure there is enough calcium in the replacement or dialysate fluid to maintain normal values.'
  },
  'magnesium': {
    belowRangeConcerned: 'The primary team is concerned about the patient’s hypomagnesemia, and would like you to address it',
    aboveRangeConcerned: '',
    belowRangeEmergency: '',
    aboveRangeEmergency: '',
    belowRangeDeath: 'The patient developed Torsades de Pointes, and resuscitation efforts were ended after 30 minutes of CPR. The patient’s extreme hypomagnesemia was thought to be the inciting factor. Try the case again, and make sure there is enough magnesium in the replacement or dialysate fluid to maintain normal values.',
    aboveRangeDeath: ''
  },
  'phosphorous': {
    belowRangeConcerned: 'The primary team is concerned about the patient’s hypophosphatemia, and would like you to address the problem',
    aboveRangeConcerned: '',
    belowRangeEmergency: '',
    aboveRangeEmergency: '',
    belowRangeDeath: '',
    aboveRangeDeath: ''
  },
  'grossUltraFiltration': {
    belowRangeConcerned: '',
    aboveRangeConcerned: 'The patient’s pressor requirements are increasing, and the team is concerned that the high rate of ultrafiltration is causing hemodynamic instability. Please reduce your ultrafiltration rate',
    belowRangeEmergency: '',
    aboveRangeEmergency: '',
    belowRangeDeath: '',
    aboveRangeDeath: ''
  },
  'bloodFlowRate': {
    belowRangeConcerned: 'The patient’s nurse called.  She’s been having many \"Low Return Pressure Alarms\" over the past 4 hours, and the machine is not running well.',
    aboveRangeConcerned: 'The patient’s nurse called to inform you of frequent \"Access Pressure Extremely Low\" alarms, and had to decrease BFR to 300.',
    belowRangeEmergency: '',
    aboveRangeEmergency: '',
    belowRangeDeath: '',
    aboveRangeDeath: ''
  },
  'replacementFluidFlowRate': {
    belowRangeConcerned: '',
    aboveRangeConcerned: '',
    belowRangeEmergency: '',
    aboveRangeEmergency: '',
    belowRangeDeath: '',
    aboveRangeDeath: ''
  }
}

export default ordersResults;