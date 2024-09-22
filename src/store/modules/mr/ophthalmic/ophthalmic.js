export default {
  namespaced: true,
  state: {
    ophthalmicObject: {
      patientId: "ecf849ba-399d-11ed-b668-0242ac120002",
      visionTest: {
        overRefraction: {
          near: {
            os: {
              spherical: "",
              cylindrical: "",
              axis: "",
              prism: "",
              dva: "",
              add: "",
              nva: "",
            },
            od: {
              spherical: "",
              cylindrical: "",
              axis: "",
              prism: "",
              dva: "",
              add: "",
              nva: "",
            },
            ou: {
              dva: "",
              nva: "",
            }
          },
          distant: {
            os: {
              spherical: "",
              cylindrical: "",
              axis: "",
              prism: "",
              dva: "",
              add: "",
              nva: "",
            },
            od: {
              spherical: "",
              cylindrical: "",
              axis: "",
              prism: "",
              dva: "",
              add: "",
              nva: "",
            },
            ou: {
              dva: "",
              nva: "",
            },
          },
          note: null,
        },
        refraction: {
          type: {
            selection: null,
            other: "",
          },
          near: {
            os: {
              spherical: "",
              cylindrical: "",
              axis: "",
              prism: "",
              dva: "",
              add: "",
              nva: "",
            },
            od: {
              spherical: "",
              cylindrical: "",
              axis: "",
              prism: "",
              dva: "",
              add: "",
              nva: "",
            },
            ou: {
              dva: "",
              nva: "",
            }
          },
          distant: {
            os: {
              spherical: "",
              cylindrical: "",
              axis: "",
              prism: "",
              dva: "",
              add: "",
              nva: "",
            },
            od: {
              spherical: "",
              cylindrical: "",
              axis: "",
              prism: "",
              dva: "",
              add: "",
              nva: "",
            },
            ou: {
              dva: "",
              nva: "",
            },
          },
          note: null,
        },
        binoculor: {
          phorias: {
            distantVision: {
              h: "",
              v: "",
            },
            nearVision: {
              h: "",
              v: "",
            },
          },
          pursuits: {
            os: {
              selection: null,
              other: "",
            },
            od: {
              selection: null,
              other: "",
            },
          },
          saccades: {
            os: {
              selection: null,
              other: "",
            },
            od: {
              selection: null,
              other: "",
            },
          },
          accomodation: {
            ampOd: "",
            ampOs: "",
            acaRatio: "",
            nra: "",
            pra: "",
          },
          vergenceBi: {
            distantVision: {
              visionBlur: "",
              visionBreak: "",
              visionRecov: "",
            },
            nearVision: {
              visionBlur: "",
              visionBreak: "",
              visionRecov: "",
            },
          },
          vergenceBo: {
            distantVision: {
              visionBreak: "",
              visionBlur: "",
              visionRecov: "",
            },
            nearVision: {
              visionBlur: "",
              visionBreak: "",
              visionRecov: "",
            },
          },
          vergenceBu: {
            distantVision: {
              visionBlur: "",
              visionBreak: "",
              visionRecov: "",
            },
            nearVision: {
              visionBlur: "",
              visionBreak: "",
              visionRecov: "",
            },
          },
          vergenceBd: {
            distantVision: {
              visionBlur: "",
              visionBreak: "",
              visionRecov: "",
            },
            nearVision: {
              visionBlur: "",
              visionBreak: "",
              visionRecov: "",
            },
          },
          note: "",
        },
        vaCc: {
          aide: "",
          scale: "",
          od: {
            dva: "",
            ph: "",
            nva: "",
          },
          os: {
            dva: "",
            ph: "",
            nva: "",
          },
          ou: {
            dva: "",
            nva: "",
          },
          note: "",
        },
        vaSc: {
          scale: "",
          od: {
            dva: "",
            ph: "",
            nva: "",
          },
          os: {
            dva: "",
            ph: "",
            nva: "",
          },
          ou: {
            dva: "",
            nva: "",
          },
          note: "",
        },
        lensometry: {
          lensType: {
            selection: null,
            other: "",
          },
          os: {
            spherical: "",
            cylindrical: "",
            axis: "",
            add: "",
          },
          od: {
            spherical: "",
            cylindrical: "",
            axis: "",
            add: "",
          },
          note: "",
        },
      },
      entranceTesting: {
        pupils: {
          od: {
              sizeInLight: "",
              sizeInDark: "",
              shape:{
                  selection:null,
                  other:""
              },
              reaction: "",
              mGunn: "",
              accom:{
                  selection:null,
                  other:""
              },
              diagnose:{
                  selection:null,
                  other:""
              },
          },
          os: {
              sizeInLight: "",
              sizeInDark: "",
              shape:{
                  selection:null,
                  other:""
              },
              reaction: "",
              mGunn: "",
              accom:{
                  selection:null,
                  other:""
              },
              diagnose:{
                  selection:null,
                  other:""
              },
          },
          note: "",
        },
        dominance: {
          eyes:[],
          note: "",
        },
        eom: {
          extraOcularMotilities: {
            od: {
              selection:null,
              other:""
            },
            os: {
              selection:null,
              other:""
            },
          },
          npc: {
            npcBreak: "",
            npcRecovery: "",
            npcWithEffect: false,
          },
          broadHTest: {
            od: {
              sr: "",
              lr: "",
              ir: "",
              io: "",
              mr: "",
              so: "",
            },
            os: {
              sr: "",
              lr: "",
              ir: "",
              io: "",
              mr: "",
              so: "",
            },
          },
          note: "",
        },
        coverTest: {
          hirschbergTest: {
            os: {
              selection:null,
              other: "",
            },
            od: {
              selection:null,
              other: "",
            },
          },
          brucknerTest: {
            os: {
              selection: null,
              other: "",
            },
            od: {
              selection: null,
              other: "",
            },
          },
          unilateralCoverTest: {
            distantVision: {
              uLateral: "",
              uVertical: "",
              uNoncomitant: false,
            },
            nearVision: {
              uLateral: "",
              uVertical: "",
              uNoncomitant: false,
            },
          },
          alternatingCoverTest: {
            distantVision: {
              lateral: "",
              vertical: "",
              aNoncomitant: false,
            },
            nearVision: {
              lateral: "",
              vertical: "",
              aNoncomitant: false,
            },
          },
          note: "",
        },
        visualField: {
          confrontation: {
            os: {
              selection: null,
              other: "",
            },
            od: {
              selection: null,
              other: "",
            },
          },
          autoPerimetry: {
            instrument: {
              selection: null,
              other: "",
            },
            od: {
              selection: null,
              other: "",
            },
            os: {
              selection:null,
              other: "",
            },
          },
          tangentScreen: {
            scale:{
              selection: null,
              other: "",
            },
            image: "",
          },
          amslerGrid: {
            osImage: "",
            odImage: "",
          },
          note: "",
        },
        colourVision: {
          tests:[],
          d15_image: "",
          note: "",
        },
        stereopsis: {
          stereoFly: {
            selection: null ,
            other: "",
          },
          brewster: {
            selection: null ,
            other: "",
          },
          circles: {
            selection: null ,
            other: "",
          },
          forms: {
            selection: null ,
            other: "",
          },
          animals: {
            selection: null ,
            other: "",
          },
          note: "",
        },
      },
      anteriorExam: {
        tonometry: {
          test: {
            selection: null,
            other: "",
          },
          drug: {
            selection: null,
            other: "",
          },
          time: null,
          os: {
            tension: "",
            pachymetry: null,
            pachCor: "",
            adjTn: "",
          },
          od: {
            tension: "",
            pachymetry: null,
            pachCor: "",
            adjTn: "",
          },
          note: "",
        },
        biomicroscopy: {
          os: {
            lid: "",
            conjunctiva: "",
            cornea: "",
            ac: "",
            viterous: {
                selection: null,
                other: "",
            },
            iris: {
                selection: null,
                other: "",
            },
            eyeColour: {
                selection: null,
              other: "",
            },
            lens: "",
            angle: "",
            tbut: "",
            tvol: "",
            image: "",
          },
          od: {
            lid: "",
            conjunctiva: "",
            cornea: "",
            ac: "",
            viterous: {
                selection:null,
              other: "",
            },
            iris: {
                selection: null,
              other: "",
            },
            eyeColour: {
                selection: null,
              other: "",
            },
            lens: "",
            angle: "",
            tbut: "",
            tvol: "",
            image: "",
          },
          segmentation: {
            odImage: "",
            osImage: "",
          },
          notationOsImage: "",
          note: "",
        },
        gonioscopy: {
          os: {
            box: {
              north: {
                selection: null,
                number: null,
              },
              south: {
                selection:null,
                number: null,
              },
              east: {
                selection: null,
                number: null,
              },
              west: {
                selection: null,
                number: null,
              },
            },
            lens: {
              selection:null,
              other: "",
            },
            iris: {
              selection:null,
              other: "",
            },
            image: "",
          },
          od: {
            box: {
              north: {
                selection: null,
                number: null,
              },
              south: {
                selection:null,
                number: null,
              },
              east: {
                selection: null,
                number: null,
              },
              west: {
                selection: null,
                number: null,
              },
            },
            lens: {
              selection:null,
              other: "",
            },
            iris: {
              selection:null,
              other: "",
            },
            image: "",
          },
          note: "",
        },
      },
      posteriorExam: {
        fundusExam: {
          lens:"",
          ophthalmoscopy: {
            selection: null,
            other: "",
          },
          dilated: false,
          od: {
            pupillaryReflex: {
            selection: null,
              other: "",
            },
            vitreous: {
              selection:null,
              other: "",
            },
            opticDisc: "",
            cdRatio: "",
            vessels: {
              selection:null,
              other: "",
            },
            macula: {
              selection: null,
              other: "",
            },
            fovealReflex: false,
            retina: {
              selection:null,
              other: "",
            },
            posteriorPole: {
              selection:null,
              other: "",
            },
            periphery: {
              selection: null,
              other: "",
            },
            image: "",
          },
          os: {
            pupillaryReflex: {
              selection: null,
                other: "",
              },
            vitreous: {
              selection: null,
              other: "",
            },
            opticDisc: "",
            cdRatio: "",
            vessels: {
              selection: null,
              other: "",
            },
            macula: {
              selection:null,
              other: "",
            },
            fovealReflex: false,
            retina: {
              selection:null,
              other: "",
            },
            posteriorPole: {
              selection: null,
              other: "",
            },
            periphery: {
              selection: null,
              other: "",
            },
            image: "",
          },          
          note: "",
        },
        dilation: {
          drug: {
            selection: null,
            other: "",
          },
          eye: null,
          quantity: "",
          time: "",
          informedPt: false,
          note: "",
        },
      },
      contactLength: {
        fitting: {
          type: {
            os: {
              manufacturer: {
              selection: null,
                other: "",
              },
              brand: {
                selection: null,
                other: "",
              },
              design: {
                selection:null,
                other: "",
              },
              qtyBox: {
                selection:null,
                other: "",
              },
              type: "",
              material: "",
              wearingPeriod: "",
              replacement: "",
              comfort: {
                selection:null,
                other: "",
              },
              vision: {
                selection: null,
                other: "",
              },
              rotation: {
                selection: null,
                other: "",
              },
              movement: {
                selection:null,
                other: "",
              },
              centration: {
                selection: null,
                other: "",
              },
              tear: {
                selection: null,
                other: "",
              },
              sclera: {
                selection: null,
                other: "",
              },
              limbal: {
                selection: null,
                other: "",
              },
              cornea: {
                selection: null,
                other: "",
              },
              lid: {
                selection: null,
                other: "",
              },
            },
            od: {
              manufacturer: {
                selection: null,
                other: "",
              },
              brand: {
                selection: null,
                other: "",
              },
              design: {
                selection: null,
                other: "",
              },
              qtyBox: {
                selection: null,
                other: "",
              },
              type: "",
              material: "",
              wearingPeriod: "",
              replacement: "",
              comfort: {
                selection:null,
                other: "",
              },
              vision: {
                selection: null,
                other: "",
              },
              rotation: {
                selection: null,
                other: "",
              },
              movement: {
                selection: null,
                other: "",
              },
              centration: {
                selection: null,
                other: "",
              },
              tear: {
                selection: null,
                other: "",
              },
              sclera: {
                selection: null,
                other: "",
              },
              limbal: {
                selection:null,
                other: "",
              },
              cornea: {
                selection: null,
                other: "",
              },
              lid: {
                selection:null,
                other: "",
              },
            },
          },
          measurements: {
            near: {
                os: {
                    spherical: "",
                    cylindrical: "",
                    axis: "",
                    prism: "",
                    dva: "",
                    add: "",
                    nva: "",
                    bc: "",
                    dia: "",
                    dn: null
                },
                od: {
                    spherical: "",
                    cylindrical: "",
                    axis: "",
                    prism: "",
                    dva: "",
                    add: "",
                    nva: "", 
                    bc: "",
                    dia: "",
                    dn: null
                },
                ou: {
                    dva: "",
                    nva: "",
                },
                solution:null,
            },
            distant: {
                os: {
                    spherical: "",
                    cylindrical: "",
                    axis: "",
                    prism: "",
                    dva: "",
                    add: "",
                    nva: "",
                    bc: "",
                    dia: "",
                    dn: null
                },
                od: {
                    spherical: "",
                    cylindrical: "",
                    axis: "",
                    prism: "",
                    dva: "",
                    add: "",
                    nva: "", 
                    bc: "",
                    dia: "",
                    dn: null
                },
                ou: {
                    dva: "",
                    nva: "",
                },
                solution:null,
            },
          },
          expirationDate: "",
          image: "",
          note: "",
        },
        keratometry: {
          os: {
            powerH: "",
            powerV: "",
            meridian: "",
          },
          od: {
            powerH: "",
            powerV: "",
            meridian: "",
          },
          note: "",
        },
      },
      finalRx: {
        measurements: {
          near: {
              os: {
                  spherical: "",
                  cylindrical: "",
                  axis: "",
                  prism: "",
                  dva: "",
                  add: "",
                  nva: "",
              },
              od: {
                  spherical: "",
                  cylindrical: "",
                  axis: "",
                  prism: "",
                  dva: "",
                  add: "",
                  nva: "", 
              },
              ou: {
                  dva: "",
                  nva: "",
              },
          },
          distant: {
            os: {
                spherical: "",
                cylindrical: "",
                axis: "",
                prism: "",
                dva: "",
                add: "",
                nva: "",
            },
            od: {
                spherical: "",
                cylindrical: "",
                axis: "",
                prism: "",
                dva: "",
                add: "",
                nva: "", 
            },
            ou: {
                dva: "",
                nva: "",
            },
          },
          note:""
        },
        pd: {
          os: {
              spherical: "",
              cylindrical: "",
          },
          od: {
              spherical: "",
              cylindrical: "",
          },
          note: "",
        },
        recommendation: {
          os: {
              spherical: "",
              cylindrical: "",
              axis: "",
              add: "",
          },
          od: {
              spherical: "",
              cylindrical: "",
              axis: "",
              add: "",
          },
          // lensType: null,
          lensType:{ 
            selection: null,
            other: "",
          },
          note: "",
        },
      },
      medicalRx: [],
      history: {
        medicalCondition: {
          conditions: [],
          other: "",
          note: "",
        },
        ocularMedication: {
          rx: [],
          note: "",
        },
        ocularHistory: {
          conditions: [],
          note: "",
        },
        clHabits: {

          
          habits: [],
          note: "",
        },
      },
      // form: {
      //   records: [],
      //   note: "",
      // },
      chiefComplaint: {
        reasonForVisit: {
          reasons: [],
          lastEyeExam: "",
        },
        chiefComplaint: {
          complaints: [],
          note: "",
        },
      },
    },
  },
  mutations: {
    // chiefComplaint ///////////////////////////
    'Set_Reason_For_Visit': (state, payload) => {
      state.ophthalmicObject.chiefComplaint.reasonForVisit = JSON.parse(
        JSON.stringify(payload)
      );
    },
    'Set_Chief_Complaint': (state, payload) => {
      state.ophthalmicObject.chiefComplaint.chiefComplaint = JSON.parse(
        JSON.stringify(payload)
      );
    },
    // history ///////////////////////////
    'Set_Medical_Condition': (state, payload) => {
      state.ophthalmicObject.history.medicalCondition = JSON.parse(
        JSON.stringify(payload)
      );
    },
    'Set_Ocular_Medication': (state, payload) => {
      state.ophthalmicObject.history.ocularMedication = JSON.parse(
        JSON.stringify(payload)
      );
    },
    'Set_Ocular_History': (state, payload) => {
      state.ophthalmicObject.history.ocularHistory = JSON.parse(
        JSON.stringify(payload)
      );
    },
    'Set_cl_Habits': (state, payload) => {
      state.ophthalmicObject.history.clHabits = JSON.parse(
        JSON.stringify(payload)
      );
    },
    // entranceTesting ///////////////////////////
    'Set_Pupils': (state, payload) => {
      state.ophthalmicObject.entranceTesting.pupils = JSON.parse(
        JSON.stringify(payload)
      );
    },
    'Set_Dominance': (state, payload) => {
      state.ophthalmicObject.entranceTesting.dominance = JSON.parse(
        JSON.stringify(payload)
      );
    },
    'Set_Eom': (state, payload) => {
      state.ophthalmicObject.entranceTesting.eom = JSON.parse(
        JSON.stringify(payload)
      );
    },
    'Set_Cover_Test': (state, payload) => {
      state.ophthalmicObject.entranceTesting.coverTest = JSON.parse(
        JSON.stringify(payload)
      );
    },
    'Set_Cover_Test': (state, payload) => {
      state.ophthalmicObject.entranceTesting.coverTest = JSON.parse(
        JSON.stringify(payload)
      );
    },
    'Set_Visual_Field': (state, payload) => {
      state.ophthalmicObject.entranceTesting.visualField = JSON.parse(
        JSON.stringify(payload)
      );
    },
    'Set_Color_Vision': (state, payload) => {
      state.ophthalmicObject.entranceTesting.colourVision = JSON.parse(
        JSON.stringify(payload)
      );
    },
    'Set_Stereopsis': (state, payload) => {
      state.ophthalmicObject.entranceTesting.stereopsis = JSON.parse(
        JSON.stringify(payload)
      );
    },

    // visionTest ///////////////////////////
    'Set_Over_Refraction': (state, payload) => {
      state.ophthalmicObject.visionTest.overRefraction = JSON.parse(
        JSON.stringify(payload)
      );
    },
    'Set_Refraction': (state, payload) => {
      state.ophthalmicObject.visionTest.refraction = JSON.parse(
        JSON.stringify(payload)
      );
    },
    'Set_Binoculor': (state, payload) => {
      state.ophthalmicObject.visionTest.binoculor = JSON.parse(
        JSON.stringify(payload)
      );
    },
    'Set_VaCc': (state, payload) => {
      state.ophthalmicObject.visionTest.vaCc = JSON.parse(
        JSON.stringify(payload)
      );
    },
    'Set_VaSc': (state, payload) => {
      state.ophthalmicObject.visionTest.vaSc = JSON.parse(
        JSON.stringify(payload)
      );
    },
    'Set_Lensometry': (state, payload) => {
      state.ophthalmicObject.visionTest.lensometry = JSON.parse(
        JSON.stringify(payload)
      );
    },
    // Anterior
    'Set_Tonometry': (state, payload) => {
      state.ophthalmicObject.anteriorExam.tonometry = JSON.parse(
        JSON.stringify(payload)
      );
    },
    'Set_Biomicroscopy': (state, payload) => {
      state.ophthalmicObject.anteriorExam.biomicroscopy = JSON.parse(
        JSON.stringify(payload)
      );
    },
    'Set_Gonioscopy': (state, payload) => {
      state.ophthalmicObject.anteriorExam.gonioscopy = JSON.parse(
        JSON.stringify(payload)
      );
    },
    // posterior
    'Set_Fundus_Exam': (state, payload) => {
      state.ophthalmicObject.posteriorExam.fundusExam = JSON.parse(
        JSON.stringify(payload)
      );
    },
    'Set_Dilation': (state, payload) => {
      state.ophthalmicObject.posteriorExam.dilation = JSON.parse(
        JSON.stringify(payload)
      );
    },
    // contactLength
    'Set_Fitting': (state, payload) => {
      state.ophthalmicObject.contactLength.fitting = JSON.parse(
        JSON.stringify(payload)
      );
    },
    'Set_Keratometry': (state, payload) => {
      state.ophthalmicObject.contactLength.keratometry = JSON.parse(
        JSON.stringify(payload)
      );
    },
    // form
    'Set_Form': (state, payload) => {
      state.ophthalmicObject.form = JSON.parse(
        JSON.stringify(payload)
      );
    },
    // finalRx
    'Set_Measurements': (state, payload) => {
      state.ophthalmicObject.finalRx.measurements = JSON.parse(
        JSON.stringify(payload)
      );
    },
    'Set_Pd': (state, payload) => {
      state.ophthalmicObject.finalRx.pd = JSON.parse(
        JSON.stringify(payload)
        );
      },
      'Set_Recommendation': (state, payload) => {
        state.ophthalmicObject.finalRx.recommendation = JSON.parse(
          JSON.stringify(payload)
        );
      },
    // medicalRx
    'Set_Medical_Rx': (state, payload) => {
      state.ophthalmicObject.medicalRx = JSON.parse(
        JSON.stringify(payload)
      );
    },
    //********************** */ Reset_Ophthalmic *******************//
    'Reset_Ophthalmic': (state) => {
        state.ophthalmicObject = {
        patientId: "ecf849ba-399d-11ed-b668-0242ac120002",
        visionTest: {
          overRefraction: {
            near: {
              os: {
                spherical: "",
                cylindrical: "",
                axis: "",
                prism: "",
                dva: "",
                add: "",
                nva: "",
              },
              od: {
                spherical: "",
                cylindrical: "",
                axis: "",
                prism: "",
                dva: "",
                add: "",
                nva: "",
              },
              ou: {
                dva: "",
                nva: "",
              }
            },
            distant: {
              os: {
                spherical: "",
                cylindrical: "",
                axis: "",
                prism: "",
                dva: "",
                add: "",
                nva: "",
              },
              od: {
                spherical: "",
                cylindrical: "",
                axis: "",
                prism: "",
                dva: "",
                add: "",
                nva: "",
              },
              ou: {
                dva: "",
                nva: "",
              },
            },
            note: null,
          },
          refraction: {
            type: {
              selection: null,
              other: "",
            },
            near: {
              os: {
                spherical: "",
                cylindrical: "",
                axis: "",
                prism: "",
                dva: "",
                add: "",
                nva: "",
              },
              od: {
                spherical: "",
                cylindrical: "",
                axis: "",
                prism: "",
                dva: "",
                add: "",
                nva: "",
              },
              ou: {
                dva: "",
                nva: "",
              }
            },
            distant: {
              os: {
                spherical: "",
                cylindrical: "",
                axis: "",
                prism: "",
                dva: "",
                add: "",
                nva: "",
              },
              od: {
                spherical: "",
                cylindrical: "",
                axis: "",
                prism: "",
                dva: "",
                add: "",
                nva: "",
              },
              ou: {
                dva: "",
                nva: "",
              },
            },
            note: null,
          },
          binoculor: {
            phorias: {
              distantVision: {
                h: "",
                v: "",
              },
              nearVision: {
                h: "",
                v: "",
              },
            },
            pursuits: {
              os: {
                selection: null,
                other: "",
              },
              od: {
                selection: null,
                other: "",
              },
            },
            saccades: {
              os: {
                selection: null,
                other: "",
              },
              od: {
                selection: null,
                other: "",
              },
            },
            accomodation: {
              ampOd: "",
              ampOs: "",
              acaRatio: "",
              nra: "",
              pra: "",
            },
            vergenceBi: {
              distantVision: {
                visionBlur: "",
                visionBreak: "",
                visionRecov: "",
              },
              nearVision: {
                visionBlur: "",
                visionBreak: "",
                visionRecov: "",
              },
            },
            vergenceBo: {
              distantVision: {
                visionBreak: "",
                visionBlur: "",
                visionRecov: "",
              },
              nearVision: {
                visionBlur: "",
                visionBreak: "",
                visionRecov: "",
              },
            },
            vergenceBu: {
              distantVision: {
                visionBlur: "",
                visionBreak: "",
                visionRecov: "",
              },
              nearVision: {
                visionBlur: "",
                visionBreak: "",
                visionRecov: "",
              },
            },
            vergenceBd: {
              distantVision: {
                visionBlur: "",
                visionBreak: "",
                visionRecov: "",
              },
              nearVision: {
                visionBlur: "",
                visionBreak: "",
                visionRecov: "",
              },
            },
            note: "",
          },
          vaCc: {
            aide: "",
            scale: "",
            od: {
              dva: "",
              ph: "",
              nva: "",
            },
            os: {
              dva: "",
              ph: "",
              nva: "",
            },
            ou: {
              dva: "",
              nva: "",
            },
            note: "",
          },
          vaSc: {
            scale: "",
            od: {
              dva: "",
              ph: "",
              nva: "",
            },
            os: {
              dva: "",
              ph: "",
              nva: "",
            },
            ou: {
              dva: "",
              nva: "",
            },
            note: "",
          },
          lensometry: {
            lensType: {
              selection: null,
              other: "",
            },
            os: {
              spherical: "",
              cylindrical: "",
              axis: "",
              add: "",
            },
            od: {
              spherical: "",
              cylindrical: "",
              axis: "",
              add: "",
            },
            note: "",
          },
        },
        entranceTesting: {
          pupils: {
            od: {
                sizeInLight: "",
                sizeInDark: "",
                shape:{
                    selection:null,
                    other:""
                },
                reaction: "",
                mGunn: "",
                accom:{
                    selection:null,
                    other:""
                },
                diagnose:{
                    selection:null,
                    other:""
                },
            },
            os: {
                sizeInLight: "",
                sizeInDark: "",
                shape:{
                    selection:null,
                    other:""
                },
                reaction: "",
                mGunn: "",
                accom:{
                    selection:null,
                    other:""
                },
                diagnose:{
                    selection:null,
                    other:""
                },
            },
            note: "",
          },
          dominance: {
            eyes:[],
            note: "",
          },
          eom: {
            extraOcularMotilities: {
              od: {
                selection:null,
                other:""
              },
              os: {
                selection:null,
                other:""
              },
            },
            npc: {
              npcBreak: "",
              npcRecovery: "",
              npcWithEffect: false,
            },
            broadHTest: {
              od: {
                sr: "",
                lr: "",
                ir: "",
                io: "",
                mr: "",
                so: "",
              },
              os: {
                sr: "",
                lr: "",
                ir: "",
                io: "",
                mr: "",
                so: "",
              },
            },
            note: "",
          },
          coverTest: {
            hirschbergTest: {
              os: {
                selection:null,
                other: "",
              },
              od: {
                selection:null,
                other: "",
              },
            },
            brucknerTest: {
              os: {
                selection: null,
                other: "",
              },
              od: {
                selection: null,
                other: "",
              },
            },
            unilateralCoverTest: {
              distantVision: {
                uLateral: "",
                uVertical: "",
                uNoncomitant: false,
              },
              nearVision: {
                uLateral: "",
                uVertical: "",
                uNoncomitant: false,
              },
            },
            alternatingCoverTest: {
              distantVision: {
                lateral: "",
                vertical: "",
                aNoncomitant: false,
              },
              nearVision: {
                lateral: "",
                vertical: "",
                aNoncomitant: false,
              },
            },
            note: "",
          },
          visualField: {
            confrontation: {
              os: {
                selection: null,
                other: "",
              },
              od: {
                selection: null,
                other: "",
              },
            },
            autoPerimetry: {
              instrument: {
                selection: null,
                other: "",
              },
              od: {
                selection: null,
                other: "",
              },
              os: {
                selection:null,
                other: "",
              },
            },
            tangentScreen: {
              scale:{
                selection: null,
                other: "",
              },
              image: "",
            },
            amslerGrid: {
              osImage: "",
              odImage: "",
            },
            note: "",
          },
          colourVision: {
            tests:[],
            d15_image: "",
            note: "",
          },
          stereopsis: {
            stereoFly: {
              selection: null ,
              other: "",
            },
            brewster: {
              selection: null ,
              other: "",
            },
            circles: {
              selection: null ,
              other: "",
            },
            forms: {
              selection: null ,
              other: "",
            },
            animals: {
              selection: null ,
              other: "",
            },
            note: "",
          },
        },
        anteriorExam: {
          tonometry: {
            test: {
              selection: null,
              other: "",
            },
            drug: {
              selection: null,
              other: "",
            },
            time: null,
            os: {
              tension: "",
              pachymetry: null,
              pachCor: "",
              adjTn: "",
            },
            od: {
              tension: "",
              pachymetry: null,
              pachCor: "",
              adjTn: "",
            },
            note: "",
          },
          biomicroscopy: {
            os: {
              lid: "",
              conjunctiva: "",
              cornea: "",
              ac: "",
              viterous: {
                  selection: null,
                  other: "",
              },
              iris: {
                  selection: null,
                  other: "",
              },
              eyeColour: {
                  selection: null,
                other: "",
              },
              lens: "",
              angle: "",
              tbut: "",
              tvol: "",
              image: "",
            },
            od: {
              lid: "",
              conjunctiva: "",
              cornea: "",
              ac: "",
              viterous: {
                  selection:null,
                other: "",
              },
              iris: {
                  selection: null,
                other: "",
              },
              eyeColour: {
                  selection: null,
                other: "",
              },
              lens: "",
              angle: "",
              tbut: "",
              tvol: "",
              image: "",
            },
            segmentation: {
              odImage: "",
              osImage: "",
            },
            notationOsImage: "",
            note: "",
          },
          gonioscopy: {
            os: {
              box: {
                north: {
                  selection: null,
                  number: null,
                },
                south: {
                  selection:null,
                  number: null,
                },
                east: {
                  selection: null,
                  number: null,
                },
                west: {
                  selection: null,
                  number: null,
                },
              },
              lens: {
                selection:null,
                other: "",
              },
              iris: {
                selection:null,
                other: "",
              },
              image: "",
            },
            od: {
              box: {
                north: {
                  selection: null,
                  number: null,
                },
                south: {
                  selection:null,
                  number: null,
                },
                east: {
                  selection: null,
                  number: null,
                },
                west: {
                  selection: null,
                  number: null,
                },
              },
              lens: {
                selection:null,
                other: "",
              },
              iris: {
                selection:null,
                other: "",
              },
              image: "",
            },
            note: "",
          },
        },
        posteriorExam: {
          fundusExam: {
            lens:"",
            ophthalmoscopy: {
              selection: null,
              other: "",
            },
            dilated: false,
            od: {
              pupillaryReflex: {
              selection: null,
                other: "",
              },
              vitreous: {
                selection:null,
                other: "",
              },
              opticDisc: "",
              cdRatio: "",
              vessels: {
                selection:null,
                other: "",
              },
              macula: {
                selection: null,
                other: "",
              },
              fovealReflex: false,
              retina: {
                selection:null,
                other: "",
              },
              posteriorPole: {
                selection:null,
                other: "",
              },
              periphery: {
                selection: null,
                other: "",
              },
              image: "",
            },
            os: {
              pupillaryReflex: {
                selection: null,
                  other: "",
                },
              vitreous: {
                selection: null,
                other: "",
              },
              opticDisc: "",
              cdRatio: "",
              vessels: {
                selection: null,
                other: "",
              },
              macula: {
                selection:null,
                other: "",
              },
              fovealReflex: false,
              retina: {
                selection:null,
                other: "",
              },
              posteriorPole: {
                selection: null,
                other: "",
              },
              periphery: {
                selection: null,
                other: "",
              },
              image: "",
            },          
            note: "",
          },
          dilation: {
            drug: {
              selection: null,
              other: "",
            },
            eye: null,
            quantity: "",
            time: "",
            informedPt: false,
            note: "",
          },
        },
        contactLength: {
          fitting: {
            type: {
              os: {
                manufacturer: {
                selection: null,
                  other: "",
                },
                brand: {
                  selection: null,
                  other: "",
                },
                design: {
                  selection:null,
                  other: "",
                },
                qtyBox: {
                  selection:null,
                  other: "",
                },
                type: "",
                material: "",
                wearingPeriod: "",
                replacement: "",
                comfort: {
                  selection:null,
                  other: "",
                },
                vision: {
                  selection: null,
                  other: "",
                },
                rotation: {
                  selection: null,
                  other: "",
                },
                movement: {
                  selection:null,
                  other: "",
                },
                centration: {
                  selection: null,
                  other: "",
                },
                tear: {
                  selection: null,
                  other: "",
                },
                sclera: {
                  selection: null,
                  other: "",
                },
                limbal: {
                  selection: null,
                  other: "",
                },
                cornea: {
                  selection: null,
                  other: "",
                },
                lid: {
                  selection: null,
                  other: "",
                },
              },
              od: {
                manufacturer: {
                  selection: null,
                  other: "",
                },
                brand: {
                  selection: null,
                  other: "",
                },
                design: {
                  selection: null,
                  other: "",
                },
                qtyBox: {
                  selection: null,
                  other: "",
                },
                type: "",
                material: "",
                wearingPeriod: "",
                replacement: "",
                comfort: {
                  selection:null,
                  other: "",
                },
                vision: {
                  selection: null,
                  other: "",
                },
                rotation: {
                  selection: null,
                  other: "",
                },
                movement: {
                  selection: null,
                  other: "",
                },
                centration: {
                  selection: null,
                  other: "",
                },
                tear: {
                  selection: null,
                  other: "",
                },
                sclera: {
                  selection: null,
                  other: "",
                },
                limbal: {
                  selection:null,
                  other: "",
                },
                cornea: {
                  selection: null,
                  other: "",
                },
                lid: {
                  selection:null,
                  other: "",
                },
              },
            },
            measurements: {
              near: {
                  os: {
                      spherical: "",
                      cylindrical: "",
                      axis: "",
                      prism: "",
                      dva: "",
                      add: "",
                      nva: "",
                      bc: "",
                      dia: "",
                      dn: null
                  },
                  od: {
                      spherical: "",
                      cylindrical: "",
                      axis: "",
                      prism: "",
                      dva: "",
                      add: "",
                      nva: "", 
                      bc: "",
                      dia: "",
                      dn: null
                  },
                  ou: {
                      dva: "",
                      nva: "",
                  },
                  solution:null,
              },
              distant: {
                  os: {
                      spherical: "",
                      cylindrical: "",
                      axis: "",
                      prism: "",
                      dva: "",
                      add: "",
                      nva: "",
                      bc: "",
                      dia: "",
                      dn: null
                  },
                  od: {
                      spherical: "",
                      cylindrical: "",
                      axis: "",
                      prism: "",
                      dva: "",
                      add: "",
                      nva: "", 
                      bc: "",
                      dia: "",
                      dn: null
                  },
                  ou: {
                      dva: "",
                      nva: "",
                  },
                  solution:null,
              },
            },
            expirationDate: "",
            image: "",
            note: "",
          },
          keratometry: {
            os: {
              powerH: "",
              powerV: "",
              meridian: "",
            },
            od: {
              powerH: "",
              powerV: "",
              meridian: "",
            },
            note: "",
          },
        },
        finalRx: {
          measurements: {
            near: {
                os: {
                    spherical: "",
                    cylindrical: "",
                    axis: "",
                    prism: "",
                    dva: "",
                    add: "",
                    nva: "",
                },
                od: {
                    spherical: "",
                    cylindrical: "",
                    axis: "",
                    prism: "",
                    dva: "",
                    add: "",
                    nva: "", 
                },
                ou: {
                    dva: "",
                    nva: "",
                },
            },
            distant: {
              os: {
                  spherical: "",
                  cylindrical: "",
                  axis: "",
                  prism: "",
                  dva: "",
                  add: "",
                  nva: "",
              },
              od: {
                  spherical: "",
                  cylindrical: "",
                  axis: "",
                  prism: "",
                  dva: "",
                  add: "",
                  nva: "", 
              },
              ou: {
                  dva: "",
                  nva: "",
              },
            },
            note:""
          },
          pd: {
            os: {
                spherical: "",
                cylindrical: "",
            },
            od: {
                spherical: "",
                cylindrical: "",
            },
            note: "",
          },
          recommendation: {
            os: {
                spherical: "",
                cylindrical: "",
                axis: "",
                add: "",
            },
            od: {
                spherical: "",
                cylindrical: "",
                axis: "",
                add: "",
            },
            lensType:{ 
              selection: null,
              other: "",
            },
            note: "",
          },
        },
        medicalRx: [],
        history: {
          medicalCondition: {
            conditions: [],
            other: "",
            note: "",
          },
          ocularMedication: {
            rx: [],
            note: "",
          },
          ocularHistory: {
            conditions: [],
            note: "",
          },
          clHabits: {
  
            
            habits: [],
            note: "",
          },
        },
        chiefComplaint: {
          reasonForVisit: {
            reasons: [],
            lastEyeExam: "",
          },
          chiefComplaint: {
            complaints: [],
            note: "",
          },
        },
      };
    },
    
  },
  actions: {
    // chiefComplaint ///////////////////////////
    setReasonForVisit(context,payload) {
      context.commit("Set_Reason_For_Visit",payload);
    },
    setChiefComplaint(context,payload) {
      context.commit("Set_Chief_Complaint",payload);
    },
    // history ///////////////////////////
    setMedicalCondition(context,payload) {
      context.commit("Set_Medical_Condition",payload);
    },
    setOcularMedication(context,payload) {
      context.commit("Set_Ocular_Medication",payload);
    },
    setOcularHistory(context,payload) {
      context.commit("Set_Ocular_History",payload);
    },
    setClHabits(context,payload) {
      context.commit("Set_cl_Habits",payload);
    },
    // entranceTesting
    setPupils(context,payload) {
      context.commit("Set_Pupils",payload);
    },
    setDominance(context,payload) {
      context.commit("Set_Dominance",payload);
    },
    setEom(context,payload) {
      context.commit("Set_Eom",payload);
    },
    setCoverTest(context,payload) {
      context.commit("Set_Cover_Test",payload);
    },
    setVisualField(context,payload) {
      context.commit("Set_Visual_Field",payload);
    },
    setColorVision(context,payload) {
      context.commit("Set_Color_Vision",payload);
    },
    setStereopsis(context,payload) {
      context.commit("Set_Stereopsis",payload);
    },
    // visionTest ///////////////////////////
    setOverRefraction(context,payload) {
      context.commit("Set_Over_Refraction",payload);
    },
    setRefraction(context,payload) {
      context.commit("Set_Refraction",payload);
    },
    setBinoculor(context,payload) {
      context.commit("Set_Binoculor",payload);
    },
    setVaCc(context,payload) {
      context.commit("Set_VaCc",payload);
    },
    setVaSc(context,payload) {
      context.commit("Set_VaSc",payload);
    },
    setLensometry(context,payload) {
      context.commit("Set_Lensometry",payload);
    },
    // Anterior
    setTonometry(context,payload) {
      context.commit("Set_Tonometry",payload);
    },
    setBiomicroscopy(context,payload) {
      context.commit("Set_Biomicroscopy",payload);
    },
    setGonioscopy(context,payload) {
      context.commit("Set_Gonioscopy",payload);
    },
    // posterior
    setFundusExam(context,payload) {
      context.commit("Set_Fundus_Exam",payload);
    },
    setDilation(context,payload) {
      context.commit("Set_Dilation",payload);
    },
    // contactLength
    setFitting(context,payload) {
      context.commit("Set_Fitting",payload);
    },
    setKeratometry(context,payload) {
      context.commit("Set_Keratometry",payload);
    },
    // form
    setForm(context,payload) {
        context.commit("Set_Form",payload);
    },
    //// finalRx
    setMeasurements(context,payload){
      context.commit("Set_Measurements",payload);
    },
    setPd(context,payload){
      context.commit("Set_Pd",payload);
    },
    setRecommendation(context,payload){
      context.commit("Set_Recommendation",payload);
    },
    //medicalRx
    setMedicalRx(context,payload){
      context.commit("Set_Medical_Rx",payload);
    },
    resetOphthalmic(context){
      context.commit("Reset_Ophthalmic");
    },
  },
  getters: {
    getOphthalmicObject(state) {
      return state.ophthalmicObject;
    },
    ////////////////////////////////////////
    getReasonForVisit(state) {
      return state.ophthalmicObject.chiefComplaint.reasonForVisit;
    },
    getChiefComplaint(state) {
      return state.ophthalmicObject.chiefComplaint.chiefComplaint;
    },
    /////////////////////////////////////////
    getOcularHistory(state) {
      return state.ophthalmicObject.history.ocularHistory;
    },
    getOcularMedication(state) {
      return state.ophthalmicObject.history.ocularMedication;
    },
    getClHabits(state) {
      return state.ophthalmicObject.history.clHabits;
    },
   getMedicalCondition(state) {
      return state.ophthalmicObject.history.medicalCondition;
    },
    getDominance(state) {
      return state.ophthalmicObject.entranceTesting.dominance;
    },
    getColorVision(state) {
      return state.ophthalmicObject.entranceTesting.colourVision;
    },
    getStereopsis(state) {
      return state.ophthalmicObject.entranceTesting.stereopsis;
    },
    getVisualField(state) {
      return state.ophthalmicObject.entranceTesting.visualField;
    },
    getCoverTest(state) {
      return state.ophthalmicObject.entranceTesting.coverTest;
    },
    getEom(state) {
      return state.ophthalmicObject.entranceTesting.eom;
    },
    getPupils(state) {
      return state.ophthalmicObject.entranceTesting.pupils;
    },
    getLensometry(state) {
      return state.ophthalmicObject.visionTest.lensometry;
    },
   
    getVaSc(state) {
      return state.ophthalmicObject.visionTest.vaSc;
    },
   
    getVaCc(state) {
      return state.ophthalmicObject.visionTest.vaCc;
    },
    /////////////////////////
    getBinoculor(state) {
      return state.ophthalmicObject.visionTest.binoculor;
    },
    ////////////////////////////
    getRefraction(state) {
      return state.ophthalmicObject.visionTest.refraction;
    },
    getOverRefraction(state) {
      return state.ophthalmicObject.visionTest.overRefraction;
    },
    getGonioscopy(state) {
      return state.ophthalmicObject.anteriorExam.gonioscopy;
    },
    getTonometry(state) {
      return state.ophthalmicObject.anteriorExam.tonometry;
    },
    getBiomicroscopy(state) {
      return state.ophthalmicObject.anteriorExam.biomicroscopy;
    },
    getDilation(state) {
      return state.ophthalmicObject.posteriorExam.dilation;
    },
    getFundusExam(state) {
      return state.ophthalmicObject.posteriorExam.fundusExam;
    },
    getFitting(state) {
      return state.ophthalmicObject.contactLength.fitting;
    },
    getKeratometry(state) {
      return state.ophthalmicObject.contactLength.keratometry;
    },
    getMeasurements(state) {
      return state.ophthalmicObject.finalRx.measurements;
    },
    getRecommendation(state) {
      return state.ophthalmicObject.finalRx.recommendation;
    },
    getPd(state) {
      return state.ophthalmicObject.finalRx.pd;
    },
   /////////////////////MedicalRx////////////////
   getMedicalRx(state) {
      return state.ophthalmicObject.medicalRx;
    },
   
  },
};
