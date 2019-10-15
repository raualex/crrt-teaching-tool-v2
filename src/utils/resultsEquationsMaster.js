const orderWarningRanges = {
  1: {
    sodium: {
      belowRange: {
        concerning: 135,
        urgent: null,
        lethal: 125
      },
      aboveRange: {
        concerning: 145,
        urgent: null,
        lethal: 170
      }
    },
    potassium: {
      belowRange: {
        concerning: 3.3,
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
        concerning: 7.5,
        urgent: null,
        lethal: null
      },
      aboveRange: {
        concerning: 10,
        urgent: 12,
        lethal: null
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
        concerning: 1,
        urgent: null,
        lethal: null
      },
      aboveRange: {
        concerning: null,
        urgent: null,
        lethal: null
      }
    },
    grossUltraFiltration: {
      belowRange: {
        concerning: null,
        urgent: null,
        lethal: null
      },
      aboveRange: {
        concerning: 1500,
        urgent: null,
        lethal: null
      }
    },
    filtrationFraction: {
      belowRange: {
        concerning: null,
        urgent: null,
        lethal: null
      },
      aboveRange: {
        concerning: 25,
        urgent: 30,
        lethal: null
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
    ph: {
      belowRange: {
        concerning: null,
        urgent: 7.2,
        lethal: 7
      },
      aboveRange: {
        concerning: null,
        urgent: 7.45,
        lethal: 7.5
      }
    }
  },
  2: {
    sodium: {
      belowRange: {
        concerning: 130,
        urgent: null,
        lethal: 125
      },
      aboveRange: {
        concerning: 160,
        urgent: null,
        lethal: 170
      }
    },
    potassium: {
      belowRange: {
        concerning: 3.3,
        urgent: null,
        lethal: 2.5
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
        concerning: 7.5,
        urgent: null,
        lethal: 6.5
      },
      aboveRange: {
        concerning: 10,
        urgent: 12,
        lethal: 14
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
        concerning: 1,
        urgent: null,
        lethal: null
      },
      aboveRange: {
        concerning: null,
        urgent: null,
        lethal: null
      }
    },
    grossUltraFiltration: {
      belowRange: {
        concerning: null,
        urgent: null,
        lethal: null
      },
      aboveRange: {
        concerning: 1500,
        urgent: null,
        lethal: null
      }
    },
    filtrationFraction: {
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
    ph: {
      belowRange: {
        concerning: null,
        urgent: 7.2,
        lethal: 7
      },
      aboveRange: {
        concerning: 7.45,
        urgent: 7.55,
        lethal: 7.65
      }
    }
  }
};

export default orderWarningRanges;
