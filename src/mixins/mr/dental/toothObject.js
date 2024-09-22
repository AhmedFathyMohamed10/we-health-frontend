//tooth function set the init value of the  tooth
function tooth() {
  return {
    //dent is the shape of the tooth
    dent: {
      root1: true,
      root2: true,
      crown1: true,
      crown2: true,
      crown3: true,
    },
    isActive: false,
    extraction: false,
    filling_caries_class_i: false,
    filling_caries_class_iv_mesial: false,
    filling_caries_class_iv_distal: false,
    filling_caries_class_v: false,
    filling_caries_class_iii_distal: false,
    filling_caries_class_iii_mesial: false,
    crown: {
      fullVeneer: false,
      laminateVeneer: false,
      occlusalVeneer: false,
      postCrown: false,
      endoCrown: false,
      bridge: false,
      denture: false,
      onlay: false,
    },
    bone: false,
    fraction: {
      root: false,
      crown: false,
    },
    removeImplant: false,
    endo: {
      endo1: false,
      endo2: false,
      endo3: false,
    },
    pulp: {
      pulp1: false,
      pulp2: false,
      pulp3: false,
    },
    post: {
      post1: false,
      post2: false,
      post3: false,
    },
    gingivitis: {
      left: false,
      right: false,
    },
    periodontal: {
      left: false,
      right: false,
    },
    perio: {
      left: false,
      right: false,
    },
    implant: false,
    endo_crown: {
      crown1: false,
      crown2: false,
      crown3: false,
    },
    periapical: {
      periapical1: false,
      periapical2: false,
      periapical3: false,
    },
    // veneer: {
    //   veneer1: false,
    //   veneer2: false,
    // },
    removable: false,
    alignement: {
      //postive x
      mesialShift: 0,
      //negative x
      distalShift: 0,
      //postive y
      intrusion: 0,
      //negative Y
      extrusion: 0,
      //postive roation
      distalTilting: 0,
      //negative rotation
      mesialTilting: 0,
    },

    images: {
      xray: { image: null, imageDate: null },

      image: { image: null, imageDate: null },
    },


  };
}

function toothObject() {
  return {
    one: tooth(),
    two: tooth(),
    three: tooth(),
    four: tooth(),
    five: tooth(),
    six: tooth(),
    seven: tooth(),
    eight: tooth(),
    nine: tooth(),
    ten: tooth(),
    eleven: tooth(),
    twelve: tooth(),
    thirteen: tooth(),
    fourteen: tooth(),
    fifteen: tooth(),
    sixteen: tooth(),
    seventeen: tooth(),
    eighteen: tooth(),
    nineteen: tooth(),
    twenty: tooth(),
    twentyOne: tooth(),
    twentyTwo: tooth(),
    twentyThree: tooth(),
    twentyFour: tooth(),
    twentyFive: tooth(),
    twentySix: tooth(),
    twentySeven: tooth(),
    twentyEight: tooth(),
    twentyNine: tooth(),
    thirty: tooth(),
    thirtyOne: tooth(),
    thirtyTwo: tooth(),
    orthodontic: {
      stable: {
        metal: {
          upper: false,
          lower: false,
        },
        ceramic: {
          upper: false,
          lower: false,
        },
        internal: false,
        transparent: {
          upper: false,
          lower: false,
        },
      },
      mobile: { 
        transparent: {
          upper: false,
          lower: false,
        },
        wire: {
          upper: false,
          lower: false,
        },
      },
    },
    images: {
      panoramicXray: { image: null, imageDate: null },
      panoramicImage: { image: null, imageDate: null },
    },
  };
}

function childTooth() {
  return {
    A: tooth(),
    B: tooth(),
    C: tooth(),
    D: tooth(),
    E: tooth(),
    F: tooth(),
    G: tooth(),
    H: tooth(),
    I: tooth(),
    J: tooth(),
    T: tooth(),
    S: tooth(),
    R: tooth(),
    Q: tooth(),
    P: tooth(),
    O: tooth(),
    N: tooth(),
    M: tooth(),
    L: tooth(),
    K: tooth(),
    orthodontic: {
      stable: {
        metal: {
          upper: false,
          lower: false,
        },
        ceramic: {
          upper: false,
          lower: false,
        },
        internal: false,
        transparent: {
          upper: false,
          lower: false,
        },
      },
      mobile: {
        transparent: {
          upper: false,
          lower: false,
        },
        wire: {
          upper: false,
          lower: false,
        },
      },
    },
    images: {
      panoramicXray: null,
      panoramicImage: null,
    },
  };
}

module.exports = {
  childToothObject: childTooth,
  adultToothObject: toothObject,
  singleAdultTooth: tooth,
};
