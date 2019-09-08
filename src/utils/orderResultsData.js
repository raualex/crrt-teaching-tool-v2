const ordersResults = {
  sodium: {
    belowRange: {
      concerning:
        "The primary team is concerned about the patient’s hyponatremia.",
      urgent: null,
      lethal:
        "The patient developed cerebral edema leading to brain herniation, and passed away. The patient’s severe hyponatremia was thought to be the etiology. Try the scenario again, with closer attention to sodium values."
    },
    aboveRange: {
      concerning:
        "The primary team is concerned about the patient’s hypernatremia.",
      urgent: null,
      lethal: "The patient developed a subarachnoid hemorrhage in the hospital, and was transitioned to comfort care by the family. The patient’s severe hypernatremia was thought to be the main contributor. Try the scenario again, with closer attention to sodium values."
    }
  },
  potassium: {
    belowRange: {
      concerning:
        "The primary team is concerned about the patient’s hypokalemia.",
      urgent: null,
      lethal:
        "The patient developed ventricular fibrillation, and resuscitation efforts were ended after 30 minutes of CPR. The patient’s extreme hypokalemia was thought to be the inciting factor. Try the case again, and make sure there is enough potassium in the replacement or dialysate fluid to maintain normal values."
    },
    aboveRange: {
      concerning: "The primary team is concerned about the patient’s hyperkalemia.",
      urgent: null,
      lethal: "The patient went into PEA arrest, and could not be resuscitated.  Their potassium >7.0 was thought to be the cause.  Try the scenario again, with careful potassium monitoring"
    }
  },
  chloride: {
    belowRange: {
      concerning: null,
      urgent: null,
      lethal: null
    },
    aboveRange: {
      concerning: null,
      urgent: null,
      lethal: null
    }
  },
  bicarbonate: {
    belowRange: {
      concerning: "The team is concerned about the patient’s bicarbonate value.",
      urgent: null,
      lethal: null
    },
    aboveRange: {
      concerning: "The team is concerned about the patient’s elevated bicarbonate.",
      urgent: null,
      lethal: null
    }
  },
  calcium: {
    belowRange: {
      concerning:
        "The primary team is concerned about the patient’s ongoing hypocalcemia.",
      urgent: null,
      lethal:
        "The patient developed ventricular fibrillation, and resuscitation efforts were ended after 30 minutes of CPR. The patient’s extreme hypocalcemia was thought to be the inciting factor. Try the case again, and make sure there is enough calcium in the replacement or dialysate fluid to maintain normal values."
    },
    aboveRange: {
      concerning:
        "The primary team is concerned about the patient’s new hypercalcemia.",
      urgent:
        "The ICU team is very concerned about the patient’s hypercalcemia. They will be calling your attending if it is not addressed immediately.",
      lethal:
        "The patient developed ventricular fibrillation, and resuscitation efforts were ended after 30 minutes of CPR. The patient’s extreme hypercalcemia was thought to be the inciting factor. Try the case again. If using citrate and make sure there is enough calcium in the replacement or dialysate fluid to maintain normal values."
    }
  },
  magnesium: {
    belowRange: {
      concerning:
        "The primary team is concerned about the patient’s hypomagnesemia, and would like you to address it",
      urgent: "",
      lethal:
        "The patient developed Torsades de Pointes, and resuscitation efforts were ended after 30 minutes of CPR. The patient’s extreme hypomagnesemia was thought to be the inciting factor. Try the case again, and make sure there is enough magnesium in the replacement or dialysate fluid to maintain normal values."
    },
    aboveRange: {
      concerning: null,
      urgent: null,
      lethal: null
    }
  },
  phosphorous: {
    belowRange: {
      concerning:
        "The primary team is concerned about the patient’s hypophosphatemia, and would like you to address the problem",
      urgent: null,
      lethal: "The patient developed PEA arrest, and could not be resuscitated.  The patient’s phosphorous <1.0 was thought to be the main reason for cardiac arrest.  Please try again, with careful monitoring of phosphorous values"
    },
    aboveRange: {
      concerning: null,
      urgent: null,
      lethal: null
    }
  },
  grossUltraFiltration: {
    belowRange: {
      concerning: "The team is concerned about the patient’s positive fluid balance.",
      urgent: null,
      lethal: "The patient developed sepsis from ventilator associated pneumonia, and passed away.  Extreme fluid overload predispose to infection and sepsis, and should be avoided.  Please try again with higher rates of ultrafiltration.“"
    },
    aboveRange: {
      concerning:
        "The team is concerned that the rate of ultrafiltration is a bit too brisk for his current condition.",
      urgent: "The patient’s pressor requirements are increasing, and the team is concerned that the high rate of ultrafiltration is causing hemodynamic instability. Please reduce your ultrafiltration rate.",
      lethal: "The patient developed PEA arrest and could not be resuscitated.  The extremely high ultrafiltration was thought to be the main precipitant.  Please try again, with more careful monitoring of ins and outs."
    }
  },
  bloodFlowRate: {
    belowRange: {
      concerning:
        'The patient’s nurse called.  She’s been having many "Low Return Pressure Alarms" over the past 4 hours, and the machine is not running well.',
      urgent: null,
      lethal: null
    },
    aboveRange: {
      concerning: null,
      urgent: null,
      lethal: null
    }
  },
  replacementFluidFlowRate: {
    belowRange: {
      concerning: null,
      urgent: null,
      lethal: null
    },
    aboveRange: {
      concerning: null,
      urgent: null,
      lethal: null
    }
  },
  pH: {
    belowRange: {
      concerning: "The primary team is concerned about the patient’s acidosis.",
      urgent: "The primary team has been urgently paging about the patient’s acidosis, which requires immediate attention ",
      lethal: "The patient went into PEA arrest, and could not be resuscitated.  The patient’s severe acidosis was thought to be a primary contributor."
    },
    aboveRange: {
      concerning: "The primary team is concerned about the patient’s alkalosis.",
      urgent: "The primary team has been urgently paging about the patient’s alkalosis, which requires immediate attention ",
      lethal: "The patient developed prolonged seizure activity and expired.  pH > 7.65 is associated with a mortliaty of >80% in ICU patients.  Try the scenario again, with closer attention to the bicarbonate in the dialysate or replacement fluid."
    }
  }
};

export default ordersResults;
