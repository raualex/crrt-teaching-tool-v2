const warningRangesCase1 = {
  sodium: {
    belowRange: {
      concerning: 130,
      urgent: null,
      lethal: 125
    },
    aboveRange: {
      concerning: 150,
      urgent: null,
      lethal: 170
    }
  },
  potassium: {
    belowRange: {
      concerning: 3.5,
      urgent: null,
      lethal: 2.5
    },
    aboveRange: {
      concerning: 5,
      urgent: null,
      lethal: 7
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
      concerning: 10,
      urgent: null,
      lethal: null
    },
    aboveRange: {
      concerning: 30,
      urgent: null,
      lethal: null
    }
  },
  calcium: {
    belowRange: {
      concerning: 8,
      urgent: null,
      lethal: 7
    },
    aboveRange: {
      concerning: 10,
      urgent: 11,
      lethal: 12
    }
  },
  magnesium: {
    belowRange: {
      concerning: 1.4,
      urgent: null,
      lethal: 1.1
    },
    aboveRange: {
      concerning: null,
      urgent: null,
      lethal: null
    }
  },
  phosphorous: {
    belowRange: {
      concerning: 2,
      urgent: null,
      lethal: 1
    },
    aboveRange: {
      concerning: null,
      urgent: null,
      lethal: null
    }
  },
  grossUltraFiltration: {
    belowRange: {
      concerning: 0,
      urgent: null,
      lethal: 7
    },
    aboveRange: {
      concerning: 0,
      urgent: 0,
      lethal: 0
    }
  },
  bloodFlowRate: {
    belowRange: {
      concerning: 200,
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
      concerning: 7.2,
      urgent: 7.1,
      lethal: 6.8
    },
    aboveRange: {
      concerning: 7.45,
      urgent: 7.55,
      lethal: 7.65
    }
  }
};

export default warningRangesCase1;
