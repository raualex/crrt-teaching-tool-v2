const ordersResults = {
  sodium: {
    belowRange: {
      concerning: 'The primary team is concerned about the patient’s hyponatremia.',
      urgent: '',
      lethal: 'The patient developed cerebral edema leading to brain herniation, and passed away. The sodium concentration <130 mmol/L was thought to be the etiology. Try the scenario again, without using D5W.'
    },
    aboveRange: {
      concerning: 'The primary team is concerned about the patient’s hypernatremia.',
      urgent: 'The patient developed a subarachnoid hemorrhage in the hospital, and was transitioned to comfort care by the family. The sodium concentration >170 mmol/L was thought to be the main culprit. Try the scenario again, with less 3% saline',
      lethal: ''
    }
  },
  potassium: {
    belowRange: {
      concerning: 'The primary team is concerned about the patient’s hypokalemia.',
      urgent: '',
      lethal: 'The patient developed ventricular fibrillation, and resuscitation efforts were ended after 30 minutes of CPR. The patient’s extreme hypokalemia was thought to be the inciting factor. Try the case again, and make sure there is enough potassium in the replacement or dialysate fluid to maintain normal values.'
    },
    aboveRange: {
      concerning: '',
      urgent: '',
      lethal: ''
    }
  },
  chloride: {
    belowRange: {
      concerning: '',
      urgent: '',
      lethal: ''
    },
    aboveRange: {
      concerning: '',
      urgent: '',
      lethal: ''
    }
  },
  bicarbonate: {
    belowRange: {
      concerning: '',
      urgent: '',
      lethal: ''
    },
    aboveRange: {
      concerning: '',
      urgent: '',
      lethal: ''
    }
  },
  calcium: {
    belowRange: {
      concerning: 'The primary team is concerned about the patient’s ongoing hypocalcemia.',
      urgent: '',
      lethal: 'The patient developed ventricular fibrillation, and resuscitation efforts were ended after 30 minutes of CPR. The patient’s extreme hypocalcemia was thought to be the inciting factor. Try the case again, and make sure there is enough calcium in the replacement or dialysate fluid to maintain normal values.'
    },
    aboveRange: {
      concerning: 'The primary team is concerned about the patient’s new hypercalcemia.',
      urgent: 'The ICU team is very concerned about the patient’s hypercalcemia. They will be calling your attending if it is not addressed immediately.',
      lethal: 'The patient developed ventricular fibrillation, and resuscitation efforts were ended after 30 minutes of CPR. The patient’s extreme hypercalcemia was thought to be the inciting factor. Try the case again. If using citrate and make sure there is enough calcium in the replacement or dialysate fluid to maintain normal values.'
    }
  },
  magnesium: {
    belowRange: {
      concerning: 'The primary team is concerned about the patient’s hypomagnesemia, and would like you to address it',
      urgent: '',
      lethal: 'The patient developed Torsades de Pointes, and resuscitation efforts were ended after 30 minutes of CPR. The patient’s extreme hypomagnesemia was thought to be the inciting factor. Try the case again, and make sure there is enough magnesium in the replacement or dialysate fluid to maintain normal values.'
    },
    aboveRange: {
      concerning: '',
      urgent: '',
      lethal: ''
    }
  },
  phosphorous: {
    belowRange: {
      concerning: 'The primary team is concerned about the patient’s hypophosphatemia, and would like you to address the problem',
      urgent: '',
      lethal: ''
    },
    aboveRange: {
      concerning: '',
      urgent: '',
      lethal: ''
    }
  },
  grossUltraFiltration: {
    belowRange: {
      concerning: '',
      urgent: '',
      lethal: ''
    },
    aboveRange: {
      concerning: 'The patient’s pressor requirements are increasing, and the team is concerned that the high rate of ultrafiltration is causing hemodynamic instability. Please reduce your ultrafiltration rate',
      urgent: '',
      lethal: ''
    }
  },
  bloodFlowRate: {
    belowRange: {
      concerning: 'The patient’s nurse called.  She’s been having many \"Low Return Pressure Alarms\" over the past 4 hours, and the machine is not running well.',
      urgent: '',
      lethal: ''
    },
    aboveRange: {
      concerning: 'The patient’s nurse called to inform you of frequent \"Access Pressure Extremely Low\" alarms, and had to decrease BFR to 300.',
      urgent: '',
      lethal: ''
    }
  },
  replacementFluidFlowRate: {
    belowRange: {
      concerning: '',
      urgent: '',
      lethal: ''
    },
    aboveRange: {
      concerning: '',
      urgent: '',
      lethal: ''
    }
  }
}

export default ordersResults;