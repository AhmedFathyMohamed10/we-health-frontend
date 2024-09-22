import axios from "axios";
import {convertStaticData} from "@/helpers/utilities"

export default {
  namespaced: true,
  state: {
    staticData: {
      chiefComplaint: {
        reasonForVisit: {},
        chiefComplaint: {},
      },
      history: {
        ocularHistory: {},
        ocularMedication: {},
        clHabits: {},
        medicalCondition:{}  
      },
      entranceTesting: {
        dominance: {},
        colorVision: {},
        stereopsis: {},
        visualField: {},
        coverTest: {},
        eom: {},
        Pupils:{}
      },
      visionTest: {
        lensometry: {},
        binocular: {},
        refraction: {},
      },
      anteriorExam: {
        tonometry: {},
        biomicroscopy: {},
        gonioscopy: {},
      },  
      posteriorExam: {
        fundusExam: {},
        dilation: {},
      },
      cl:{
        fitting:{},
        keratometry:{},
      },
      finalRx:{
        measurements:{},
        pd:{},
        drRecommend:{}
      },
      medicalRx:{
        medicalRx:{}
      },
      form:{
        form:{},
      },

    },
    staticDataLoading: false,
    staticDataError: null,
  },
  // get the currant state value
  getters: {
    staticData: (state) => state.staticData,
    staticDataLoading: (state) => state.staticDataLoading,
    staticDataError: (state) => state.staticDataError,
    ///////////////////////////////////////////////////chiefComplaint
    chiefComplaint: (state) => state.staticData.chiefComplaint,
    history: (state) => state.staticData.history,
    entranceTesting: (state) => state.staticData.entranceTesting,
    visionTest: (state) => state.staticData.visionTest,
    anteriorExam: (state) => state.staticData.anteriorExam,
    posteriorExam: (state) => state.staticData.posteriorExam,
    cl: (state) => state.staticData.cl,
    finalRx: (state) => state.staticData.finalRx,
    medicalRx: (state) => state.staticData.medicalRx,
    formData: (state) => state.staticData.form.form,
  },
  // use to perform un mutate or change states
  mutations: {
    setStaticData(state, data) {
      state.staticData = data;
    },
    setStaticDataLoading(state, loading) {
      state.staticDataLoading = loading;
    },
    setStaticDataError(state, error) {
      state.staticDataError = error;
    },
  },
  // use to perform un asynchronous tasks
  actions: {
    async loadStaticData ({ commit }) {
      // const clinic_code = localStorage.getItem('clinic_code')
      commit('setStaticDataLoading', true)
      try {
        const response = await axios.get('get-static-data',{
          params: {
            clinic_name: 'Ophthalmic'
          }
        })
        // console.log(response);
        commit('setStaticData', convertStaticData(response.data))
        // commit('setStaticData', response.data)
        commit('setStaticDataError',false)
        return Promise.resolve(response.data)
      } catch (error) {
        console.log(error);
        commit('setStaticDataError',error)
        return Promise.reject(error)
      }
      finally{
        commit('setStaticDataLoading', false)
      }
    }
  }
};











// staticData: {
//   chiefComplaint: {
//     reasonForVisit: {
//       reason: [
//         {
//           id: 1,
//           translations: {
//             ar: "مزمن",
//             en: "Chronic",
//           },
//         },
//         {
//           id: 2,
//           translations: {
//             ar: "حاد",
//             en: "Acute",
//           },
//         },
//         {
//           id: 3,
//           translations: {
//             ar: "other",
//             en: "other",
//           },
//         },
//         {
//           other: [
//             {
//               id: 1,
//               value: "test1",
//             },
//             {
//               id: 2,
//               value: "test2",
//             },
//           ],
//         },
//       ],
//     },
//     chiefComplaint: {
//       chiefComplaint: [
//         {
//           id: 1,
//           translations: {
//             ar: "مزمن",
//             en: "Chronic",
//           },
//         },
//         {
//           id: 2,
//           translations: {
//             ar: "حاد",
//             en: "Acute",
//           },
//         },
//         {
//           other: [
//             {
//               id: 1,
//               value: "test1",
//             },
//             {
//               id: 2,
//               value: "test2",
//             },
//           ],
//         },
//         {
//           id: 3,
//           translations: {
//             ar: "other",
//             en: "other",
//           },
//         },
//       ],
//       location: [
//         {
//           id: 1,
//           translations: {
//             ar: "مزمن",
//             en: "Chronic",
//           },
//         },
//         {
//           id: 2,
//           translations: {
//             ar: "حاد",
//             en: "Acute",
//           },
//         },
//         {
//           other: [
//             {
//               id: 1,
//               value: "test1",
//             },
//             {
//               id: 2,
//               value: "test2",
//             },
//           ],
//         },
//         {
//           id: 3,
//           translations: {
//             ar: "other",
//             en: "other",
//           },
//         },
//       ],
//       quality: [
//         {
//           id: 1,
//           translations: {
//             ar: "مزمن",
//             en: "Chronic",
//           },
//         },
//         {
//           id: 2,
//           translations: {
//             ar: "حاد",
//             en: "Acute",
//           },
//         },
//         {
//           other: [
//             {
//               id: 1,
//               value: "test1",
//             },
//             {
//               id: 2,
//               value: "test2",
//             },
//           ],
//         },
//         {
//           id: 3,
//           translations: {
//             ar: "other",
//             en: "other",
//           },
//         },
//       ],
//       severity: [
//         {
//           id: 1,
//           translations: {
//             ar: "مزمن",
//             en: "Chronic",
//           },
//         },
//         {
//           id: 2,
//           translations: {
//             ar: "حاد",
//             en: "Acute",
//           },
//         },
//         {
//           other: [
//             {
//               id: 1,
//               value: "test1",
//             },
//             {
//               id: 2,
//               value: "test2",
//             },
//           ],
//         },
//         {
//           id: 3,
//           translations: {
//             ar: "other",
//             en: "other",
//           },
//         },
//       ],
//       timingduration: [
//         {
//           id: 1,
//           translations: {
//             ar: "مزمن",
//             en: "Chronic",
//           },
//         },
//         {
//           id: 2,
//           translations: {
//             ar: "حاد",
//             en: "Acute",
//           },
//         },
//         {
//           other: [
//             {
//               id: 1,
//               value: "test1",
//             },
//             {
//               id: 2,
//               value: "test2",
//             },
//           ],
//         },
//         {
//           id: 3,
//           translations: {
//             ar: "other",
//             en: "other",
//           },
//         },
//       ],
//       duration: [
//         {
//           id: 1,
//           translations: {
//             ar: "مزمن",
//             en: "Chronic",
//           },
//         },
//         {
//           id: 2,
//           translations: {
//             ar: "حاد",
//             en: "Acute",
//           },
//         },
//       ],
//       context: [
//         {
//           id: 1,
//           translations: {
//             ar: "مزمن",
//             en: "Chronic",
//           },
//         },
//         {
//           id: 2,
//           translations: {
//             ar: "حاد",
//             en: "Acute",
//           },
//         },
//         {
//           other: [
//             {
//               id: 1,
//               value: "test1",
//             },
//             {
//               id: 2,
//               value: "test2",
//             },
//           ],
//         },
//         {
//           id: 3,
//           translations: {
//             ar: "other",
//             en: "other",
//           },
//         },
//       ],
//       modifyingFactory: [
//         {
//           id: 1,
//           translations: {
//             ar: "مزمن",
//             en: "Chronic",
//           },
//         },
//         {
//           id: 2,
//           translations: {
//             ar: "حاد",
//             en: "Acute",
//           },
//         },
//         {
//           other: [
//             {
//               id: 1,
//               value: "test1",
//             },
//             {
//               id: 2,
//               value: "test2",
//             },
//           ],
//         },
//         {
//           id: 3,
//           translations: {
//             ar: "other",
//             en: "other",
//           },
//         },
//       ],
//       associationSign: [
//         {
//           id: 1,
//           translations: {
//             ar: "مزمن",
//             en: "Chronic",
//           },
//         },
//         {
//           id: 2,
//           translations: {
//             ar: "حاد",
//             en: "Acute",
//           },
//         },
//         {
//           other: [
//             {
//               id: 1,
//               value: "test1",
//             },
//             {
//               id: 2,
//               value: "test2",
//             },
//           ],
//         },
//         {
//           id: 3,
//           translations: {
//             ar: "other",
//             en: "other",
//           },
//         },
//       ],
//     },
//   },
//   history: {
//     ocularHistory: {
//       eye: [
//         {
//           id: 1,
//           translations: {
//             ar: "مزمن",
//             en: "Chronic",
//           },
//         },
//         {
//           id: 2,
//           translations: {
//             ar: "حاد",
//             en: "Acute",
//           },
//         },
//         {
//             id: 3,
//             translations: {
//               ar: "other",
//               en: "other",
//             },
//           },
//         {
//           other: [
//             {
//               id: 1,
//               value: "test1",
//             },
//             {
//               id: 2,
//               value: "test2",
//             },
//           ],
//         },
//       ],
//       condition: [
//         {
//           id: 1,
//           translations: {
//             ar: "مزمن",
//             en: "Chronic",
//           },
//         },
//         {
//           id: 2,
//           translations: {
//             ar: "حاد",
//             en: "Acute",
//           },
//         },
//         {
//           id: 3,
//           translations: {
//             ar: "other",
//             en: "other",
//           },
//         },
//         {
//           other: [
//             {
//               id: 1,
//               value: "test1",
//             },
//             {
//               id: 2,
//               value: "test2",
//             },
//           ],
//         },
//       ],
//     },
//     ocularMedication: {
//       form: [
//         {
//           id: 1,
//           translations: {
//             ar: "مزمن",
//             en: "Chronic",
//           },
//         },
//         {
//           id: 2,
//           translations: {
//             ar: "حاد",
//             en: "Acute",
//           },
//         },
//         {
//           other: [
//             {
//               id: 1,
//               value: "test1",
//             },
//             {
//               id: 2,
//               value: "test2",
//             },
//           ],
//         },
//       ],
//       strength: [
//         {
//           id: 1,
//           translations: {
//             ar: "مزمن",
//             en: "Chronic",
//           },
//         },
//         {
//           id: 2,
//           translations: {
//             ar: "حاد",
//             en: "Acute",
//           },
//         },
//         {
//           id: 3,
//           translations: {
//             ar: "other",
//             en: "other",
//           },
//         },
//         {
//           other: [
//             {
//               id: 1,
//               value: "test1",
//             },
//             {
//               id: 2,
//               value: "test2",
//             },
//           ],
//         },
//       ],
//       period: [
//         {
//           id: 1,
//           translations: {
//             ar: "مزمن",
//             en: "Chronic",
//           },
//         },
//         {
//           id: 2,
//           translations: {
//             ar: "حاد",
//             en: "Acute",
//           },
//         },
//         {
//           id: 3,
//           translations: {
//             ar: "other",
//             en: "other",
//           },
//         },
//         {
//           other: [
//             {
//               id: 1,
//               value: "test1",
//             },
//             {
//               id: 2,
//               value: "test2",
//             },
//           ],
//         },
//       ],
//     },
//     clHabits: {
//       typeReplacement: [
//         {
//           id: 1,
//           translations: {
//             ar: "مزمن",
//             en: "Chronic",
//           },
//         },
//         {
//           id: 2,
//           translations: {
//             ar: "حاد",
//             en: "Acute",
//           },
//         },
//         {
//           id: 3,
//           translations: {
//             ar: "other",
//             en: "other",
//           },
//         },
//         {
//           other: [
//             {
//               id: 1,
//               value: "test1",
//             },
//             {
//               id: 2,
//               value: "test2",
//             },
//           ],
//         },
//       ],
//       comfort: [
//         {
//           id: 1,
//           translations: {
//             ar: "مزمن",
//             en: "Chronic",
//           },
//         },
//         {
//           id: 2,
//           translations: {
//             ar: "حاد",
//             en: "Acute",
//           },
//         },
//         {
//           id: 3,
//           translations: {
//             ar: "other",
//             en: "other",
//           },
//         },
//         {
//           other: [
//             {
//               id: 1,
//               value: "test1",
//             },
//             {
//               id: 2,
//               value: "test2",
//             },
//           ],
//         },
//       ],
//       wearingHabits: [
//         {
//           id: 1,
//           translations: {
//             ar: "مزمن",
//             en: "Chronic",
//           },
//         },
//         {
//           id: 2,
//           translations: {
//             ar: "حاد",
//             en: "Acute",
//           },
//         },
//         {
//           id: 3,
//           translations: {
//             ar: "other",
//             en: "other",
//           },
//         },
//         {
//           other: [
//             {
//               id: 1,
//               value: "test1",
//             },
//             {
//               id: 2,
//               value: "test2",
//             },
//           ],
//         },
//       ],
//       cleaningHabits: [
//         {
//           id: 1,
//           translations: {
//             ar: "مزمن",
//             en: "Chronic",
//           },
//         },
//         {
//           id: 2,
//           translations: {
//             ar: "حاد",
//             en: "Acute",
//           },
//         },
//         {
//           id: 3,
//           translations: {
//             ar: "other",
//             en: "other",
//           },
//         },
//         {
//           other: [
//             {
//               id: 1,
//               value: "test1",
//             },
//             {
//               id: 2,
//               value: "test2",
//             },
//           ],
//         },
//       ],
//     },
//     medicalCondition: [
//         {
//           id: 1,
//           translations: {
//             ar: "مزمن",
//             en: "Chronic",
//           },
//         },
//         {
//           id: 2,
//           translations: {
//             ar: "حاد",
//             en: "Acute",
//           },
//         },
//         {
//           other: [
//             {
//               id: 1,
//               value: "test1",
//             },
//             {
//               id: 2,
//               value: "test2",
//             },
//           ],
//        }, 
//      ],  
//   },
//   entranceTesting: {
//     dominance: {
//       dominantEye: [
//         {
//           id: 1,
//           translations: {
//             ar: "مزمن",
//             en: "Chronic",
//           },
//         },
//         {
//           id: 2,
//           translations: {
//             ar: "حاد",
//             en: "Acute",
//           },
//         },
//         {
//           other: [
//             {
//               id: 1,
//               value: "test1",
//             },
//             {
//               id: 2,
//               value: "test2",
//             },
//           ],
//         },
//       ],
//       method: [
//         {
//           id: 1,
//           translations: {
//             ar: "مزمن",
//             en: "Chronic",
//           },
//         },
//         {
//           id: 2,
//           translations: {
//             ar: "حاد",
//             en: "Acute",
//           },
//         },
//         {
//           id: 3,
//           translations: {
//             ar: "other",
//             en: "other",
//           },
//         },
//         {
//           other: [
//             {
//               id: 1,
//               value: "test1",
//             },
//             {
//               id: 2,
//               value: "test2",
//             },
//           ],
//         },
//       ],
//     },
//     colourVision: {
//       oD: [
//         {
//           id: 1,
//           translations: {
//             ar: "مزمن",
//             en: "Chronic",
//           },
//         },
//         {
//           id: 2,
//           translations: {
//             ar: "حاد",
//             en: "Acute",
//           },
//         },
//         {
//           other: [
//             {
//               id: 1,
//               value: "test1",
//             },
//             {
//               id: 2,
//               value: "test2",
//             },
//           ],
//         },
//         {
//           id: 3,
//           translations: {
//             ar: "other",
//             en: "other",
//           },
//         },
//       ],
//       test: [
//         {
//           id: 1,
//           translations: {
//             ar: "مزمن",
//             en: "Chronic",
//           },
//         },
//         {
//           id: 2,
//           translations: {
//             ar: "حاد",
//             en: "Acute",
//           },
//         },
//         {
//           id: 3,
//           translations: {
//             ar: "other",
//             en: "other",
//           },
//         },
//         {
//           other: [
//             {
//               id: 1,
//               value: "test1",
//             },
//             {
//               id: 2,
//               value: "test2",
//             },
//           ],
//         },
//       ],
//     },
//     stereopsis: {
//       stereoFly: [
//         {
//           id: 1,
//           translations: {
//             ar: "مزمن",
//             en: "Chronic",
//           },
//         },
//         {
//           id: 2,
//           translations: {
//             ar: "حاد",
//             en: "Acute",
//           },
//         },
//         {
//           id: 3,
//           translations: {
//             ar: "other",
//             en: "other",
//           },
//         },
//         {
//           other: [
//             {
//               id: 1,
//               value: "test1",
//             },
//             {
//               id: 2,
//               value: "test2",
//             },
//           ],
//         },
//       ],
//       brewster: [
//         {
//           id: 1,
//           translations: {
//             ar: "مزمن",
//             en: "Chronic",
//           },
//         },
//         {
//           id: 2,
//           translations: {
//             ar: "حاد",
//             en: "Acute",
//           },
//         },
//         {
//           id: 3,
//           translations: {
//             ar: "other",
//             en: "other",
//           },
//         },
//         {
//           other: [
//             {
//               id: 1,
//               value: "test1",
//             },
//             {
//               id: 2,
//               value: "test2",
//             },
//           ],
//         },
//       ],
//       circles: [
//         {
//           id: 1,
//           translations: {
//             ar: "مزمن",
//             en: "Chronic",
//           },
//         },
//         {
//           id: 2,
//           translations: {
//             ar: "حاد",
//             en: "Acute",
//           },
//         },
//         {
//           id: 3,
//           translations: {
//             ar: "other",
//             en: "other",
//           },
//         },
//         {
//           other: [
//             {
//               id: 1,
//               value: "test1",
//             },
//             {
//               id: 2,
//               value: "test2",
//             },
//           ],
//         },
//       ],
//       forms: [
//         {
//           id: 1,
//           translations: {
//             ar: "مزمن",
//             en: "Chronic",
//           },
//         },
//         {
//           id: 2,
//           translations: {
//             ar: "حاد",
//             en: "Acute",
//           },
//         },
//         {
//           id: 3,
//           translations: {
//             ar: "other",
//             en: "other",
//           },
//         },
//         {
//           other: [
//             {
//               id: 1,
//               value: "test1",
//             },
//             {
//               id: 2,
//               value: "test2",
//             },
//           ],
//         },
//       ],
//       animals: [
//         {
//           id: 1,
//           translations: {
//             ar: "مزمن",
//             en: "Chronic",
//           },
//         },
//         {
//           id: 2,
//           translations: {
//             ar: "حاد",
//             en: "Acute",
//           },
//         },
//         {
//           id: 3,
//           translations: {
//             ar: "other",
//             en: "other",
//           },
//         },
//         {
//           other: [
//             {
//               id: 1,
//               value: "test1",
//             },
//             {
//               id: 2,
//               value: "test2",
//             },
//           ],
//         },
//       ],
//     },
//     visualField: {
//       confrontation: [
//           {
//             id: 1,
//             translations: {
//               ar: "مزمن",
//               en: "Chronic",
//             },
//           },
//           {
//             id: 2,
//             translations: {
//               ar: "حاد",
//               en: "Acute",
//             },
//           },
//           {
//             id: 3,
//             translations: {
//               ar: "other",
//               en: "other",
//             },
//           },
//           {
//             other: [
//               {
//                 id: 1,
//                 value: "test1",
//               },
//               {
//                 id: 2,
//                 value: "test2",
//               },
//             ],
//           },
//       ],
//       autoPerimetry: {
//         instrument: [
//             {
//               id: 1,
//               translations: {
//                 ar: "مزمن",
//                 en: "Chronic",
//               },
//             },
//             {
//               id: 2,
//               translations: {
//                 ar: "حاد",
//                 en: "Acute",
//               },
//             },
//             {
//               id: 3,
//               translations: {
//                 ar: "other",
//                 en: "other",
//               },
//             },
//             {
//               other: [
//                 {
//                   id: 1,
//                   value: "test1",
//                 },
//                 {
//                   id: 2,
//                   value: "test2",
//                 },
//               ],
//             },
//         ],
//         ou:[
//             {
//               id: 1,
//               translations: {
//                 ar: "مزمن",
//                 en: "Chronic",
//               },
//             },
//             {
//               id: 2,
//               translations: {
//                 ar: "حاد",
//                 en: "Acute",
//               },
//             },
//             {
//               id: 3,
//               translations: {
//                 ar: "other",
//                 en: "other",
//               },
//             },
//             {
//               other: [
//                 {
//                   id: 1,
//                   value: "test1",
//                 },
//                 {
//                   id: 2,
//                   value: "test2",
//                 },
//               ],
//             },
//         ],
//       },
//       tangentScreen: {
//         scale: [
//           {
//             id: 1,
//             translations: {
//               ar: "مزمن",
//               en: "Chronic",
//             },
//           },
//           {
//             id: 2,
//             translations: {
//               ar: "حاد",
//               en: "Acute",
//             },
//           },
//           {
//             id: 3,
//             translations: {
//               ar: "other",
//               en: "other",
//             },
//           },
//           {
//             other: [
//               {
//                 id: 1,
//                 value: "test1",
//               },
//               {
//                 id: 2,
//                 value: "test2",
//               },
//             ],
//           },
//       ],
//         image: "",
//       },
//       amslerGrid: {
//         osImage: "",
//         odImage: "",
//       },
//       note: "",
//     },
//     coverTest: {
//       hirschbergTest: [
//         {
//           id: 1,
//           translations: {
//             ar: "مزمن",
//             en: "Chronic",
//           },
//         },
//         {
//           id: 2,
//           translations: {
//             ar: "حاد",
//             en: "Acute",
//           },
//         },
//         {
//           id: 3,
//           translations: {
//             ar: "other",
//             en: "other",
//           },
//         },
//         {
//           other: [
//             {
//               id: 1,
//               value: "test1",
//             },
//             {
//               id: 2,
//               value: "test2",
//             },
//           ],
//         },
//       ],
//       brucknerTest: [
//         {
//           id: 1,
//           translations: {
//             ar: "مزمن",
//             en: "Chronic",
//           },
//         },
//         {
//           id: 2,
//           translations: {
//             ar: "حاد",
//             en: "Acute",
//           },
//         },
//         {
//           id: 3,
//           translations: {
//             ar: "other",
//             en: "other",
//           },
//         },
//         {
//           other: [
//             {
//               id: 1,
//               value: "test1",
//             },
//             {
//               id: 2,
//               value: "test2",
//             },
//           ],
//         },
//       ], 
//     },
//     eom: {
//       extraOcularMotilities: [
//         {
//           id: 1,
//           translations: {
//             ar: "مزمن",
//             en: "Chronic",
//           },
//         },
//         {
//           id: 2,
//           translations: {
//             ar: "حاد",
//             en: "Acute",
//           },
//         },
//         {
//           id: 3,
//           translations: {
//             ar: "other",
//             en: "other",
//           },
//         },
//         {
//           other: [
//             {
//               id: 1,
//               value: "test1",
//             },
//             {
//               id: 2,
//               value: "test2",
//             },
//           ],
//         },
//       ],
//       condition: [
//         {
//           id: 1,
//           translations: {
//             ar: "مزمن",
//             en: "Chronic",
//           },
//         },
//         {
//           id: 2,
//           translations: {
//             ar: "حاد",
//             en: "Acute",
//           },
//         },
//         {
//           id: 3,
//           translations: {
//             ar: "other",
//             en: "other",
//           },
//         },
//         {
//           other: [
//             {
//               id: 1,
//               value: "test1",
//             },
//             {
//               id: 2,
//               value: "test2",
//             },
//           ],
//         },
//       ],
//     },
//     pupils:{
//       shape: [
//         {
//           id: 1,
//           translations: {
//             ar: "مزمن",
//             en: "Chronic",
//           },
//         },
//         {
//           id: 2,
//           translations: {
//             ar: "حاد",
//             en: "Acute",
//           },
//         },
//         {
//           id: 3,
//           translations: {
//             ar: "other",
//             en: "other",
//           },
//         },
//         {
//           other: [
//             {
//               id: 1,
//               value: "test1",
//             },
//             {
//               id: 2,
//               value: "test2",
//             },
//           ],
//         },
//       ],
//       accom: [
//         {
//           id: 1,
//           translations: {
//             ar: "مزمن",
//             en: "Chronic",
//           },
//         },
//         {
//           id: 2,
//           translations: {
//             ar: "حاد",
//             en: "Acute",
//           },
//         },
//         {
//           id: 3,
//           translations: {
//             ar: "other",
//             en: "other",
//           },
//         },
//         {
//           other: [
//             {
//               id: 1,
//               value: "test1",
//             },
//             {
//               id: 2,
//               value: "test2",
//             },
//           ],
//         },
//       ],
//       diagnose: [
//         {
//           id: 1,
//           translations: {
//             ar: "مزمن",
//             en: "Chronic",
//           },
//         },
//         {
//           id: 2,
//           translations: {
//             ar: "حاد",
//             en: "Acute",
//           },
//         },
//         {
//           id: 3,
//           translations: {
//             ar: "other",
//             en: "other",
//           },
//         },
//         {
//           other: [
//             {
//               id: 1,
//               value: "test1",
//             },
//             {
//               id: 2,
//               value: "test2",
//             },
//           ],
//         },
//       ],
//     }
//   },
//   visionTest: {
//     lensometry: {
//       lensType: [
//         {
//           id: 1,
//           translations: {
//             ar: "مزمن",
//             en: "Chronic",
//           },
//         },
//         {
//           id: 2,
//           translations: {
//             ar: "حاد",
//             en: "Acute",
//           },
//         },
//         {
//               id: 3,
//               translations: {
//                 ar: "other",
//                 en: "other",
//               },
//             },
//         {
//           other: [
//             {
//               id: 1,
//               value: "test1",
//             },
//             {
//               id: 2,
//               value: "test2",
//             },
//           ],
//         },
//       ],
     
//     },
//     binoculor: {
//       pursuits: [
//         {
//           id: 1,
//           translations: {
//             ar: "مزمن",
//             en: "Chronic",
//           },
//         },
//         {
//           id: 2,
//           translations: {
//             ar: "حاد",
//             en: "Acute",
//           },
//         },
//         {
//           other: [
//             {
//               id: 1,
//               value: "test1",
//             },
//             {
//               id: 2,
//               value: "test2",
//             },
//           ],
//         },
//         {
//           id: 3,
//           translations: {
//             ar: "other",
//             en: "other",
//           },
//         },
//       ],
//       saccades: [
//         {
//           id: 1,
//           translations: {
//             ar: "مزمن",
//             en: "Chronic",
//           },
//         },
//         {
//           id: 2,
//           translations: {
//             ar: "حاد",
//             en: "Acute",
//           },
//         },
//         {
//           id: 3,
//           translations: {
//             ar: "other",
//             en: "other",
//           },
//         },
//         {
//           other: [
//             {
//               id: 1,
//               value: "test1",
//             },
//             {
//               id: 2,
//               value: "test2",
//             },
//           ],
//         },
//       ],
//       vergence: [
//         {
//           id: 1,
//           translations: {
//             ar: "مزمن",
//             en: "Chronic",
//           },
//         },
//         {
//           id: 2,
//           translations: {
//             ar: "حاد",
//             en: "Acute",
//           },
//         },
//         {
//           id: 3,
//           translations: {
//             ar: "other",
//             en: "other",
//           },
//         },
//         {
//           other: [
//             {
//               id: 1,
//               value: "test1",
//             },
//             {
//               id: 2,
//               value: "test2",
//             },
//           ],
//         },
//       ],
    
    
   
   
//     },
//     refraction: {
//       type: [
//       {
//         id: 1,
//         translations: {
//           ar: "مزمن",
//           en: "Chronic",
//         },
//       },
//       {
//         id: 2,
//         translations: {
//           ar: "حاد",
//           en: "Acute",
//         },
//       },
//       {
//         id: 3,
//         translations: {
//           ar: "other",
//           en: "other",
//         },
//       },
//       {
//         other: [
//           {
//             id: 1,
//             value: "test1",
//           },
//           {
//             id: 2,
//             value: "test2",
//           },
//         ],
//       },
//       ],

//    },
//   },
//   anteriorExam: {
//     tonometry: {
//       test: [
//         {
//           id: 1,
//           translations: {
//             ar: "مزمن",
//             en: "Chronic",
//           },
//         },
//         {
//           id: 2,
//           translations: {
//             ar: "حاد",
//             en: "Acute",
//           },
//         },
//         {
//               id: 3,
//               translations: {
//                 ar: "other",
//                 en: "other",
//               },
//             },
//         {
//           other: [
//             {
//               id: 1,
//               value: "test1",
//             },
//             {
//               id: 2,
//               value: "test2",
//             },
//           ],
//         },
//       ],
//       drug: [
//         {
//           id: 1,
//           translations: {
//             ar: "مزمن",
//             en: "Chronic",
//           },
//         },
//         {
//           id: 2,
//           translations: {
//             ar: "حاد",
//             en: "Acute",
//           },
//         },
//         {
//               id: 3,
//               translations: {
//                 ar: "other",
//                 en: "other",
//               },
//             },
//         {
//           other: [
//             {
//               id: 1,
//               value: "test1",
//             },
//             {
//               id: 2,
//               value: "test2",
//             },
//           ],
//         },
//       ],
     
//     },
//     biomicroscopy: {
//       iris: [
//         {
//           id: 1,
//           translations: {
//             ar: "مزمن",
//             en: "Chronic",
//           },
//         },
//         {
//           id: 2,
//           translations: {
//             ar: "حاد",
//             en: "Acute",
//           },
//         },
//         {
//           id: 3,
//           translations: {
//             ar: "other",
//             en: "other",
//           },
//         },
//         {
//           other: [
//             {
//               id: 1,
//               value: "test1",
//             },
//             {
//               id: 2,
//               value: "test2",
//             },
//           ],
//         },
//       ],
//       viterous: [
//         {
//           id: 1,
//           translations: {
//             ar: "مزمن",
//             en: "Chronic",
//           },
//         },
//         {
//           id: 2,
//           translations: {
//             ar: "حاد",
//             en: "Acute",
//           },
//         },
//         {
//           id: 3,
//           translations: {
//             ar: "other",
//             en: "other",
//           },
//         },
//         {
//           other: [
//             {
//               id: 1,
//               value: "test1",
//             },
//             {
//               id: 2,
//               value: "test2",
//             },
//           ],
//         },
//       ],
//       eyeColour: [
//         {
//           id: 1,
//           translations: {
//             ar: "مزمن",
//             en: "Chronic",
//           },
//         },
//         {
//           id: 2,
//           translations: {
//             ar: "حاد",
//             en: "Acute",
//           },
//         },
//         {
//           id: 3,
//           translations: {
//             ar: "other",
//             en: "other",
//           },
//         },
//         {
//           other: [
//             {
//               id: 1,
//               value: "test1",
//             },
//             {
//               id: 2,
//               value: "test2",
//             },
//           ],
//         },
//       ],
    
//     },
//     gonioscopy: {
//       iris: [
//       {
//         id: 1,
//         translations: {
//           ar: "مزمن",
//           en: "Chronic",
//         },
//       },
//       {
//         id: 2,
//         translations: {
//           ar: "حاد",
//           en: "Acute",
//         },
//       },
//       {
//         id: 3,
//         translations: {
//           ar: "other",
//           en: "other",
//         },
//       },
//       {
//         other: [
//           {
//             id: 1,
//             value: "test1",
//           },
//           {
//             id: 2,
//             value: "test2",
//           },
//         ],
//       },
//       ],
//       lens: [
//         {
//           id: 1,
//           translations: {
//             ar: "مزمن",
//             en: "Chronic",
//           },
//         },
//         {
//           id: 2,
//           translations: {
//             ar: "حاد",
//             en: "Acute",
//           },
//         },
//         {
//           id: 3,
//           translations: {
//             ar: "other",
//             en: "other",
//           },
//         },
//         {
//           other: [
//             {
//               id: 1,
//               value: "test1",
//             },
//             {
//               id: 2,
//               value: "test2",
//             },
//           ],
//         },
//       ],
//       od: [
//       {
//         id: 1,
//         translations: {
//           ar: "مزمن",
//           en: "Chronic",
//         },
//       },
//       {
//         id: 2,
//         translations: {
//           ar: "حاد",
//           en: "Acute",
//         },
//       },
//       {
//         id: 3,
//         translations: {
//           ar: "other",
//           en: "other",
//         },
//       },
//       {
//         other: [
//           {
//             id: 1,
//             value: "test1",
//           },
//           {
//             id: 2,
//             value: "test2",
//           },
//         ],
//       },
//       ],
//    },
//   },  
//   posteriorExam: {
//     fundusExam: {
//       ophthalmoscopy: [
//         {
//           id: 1,
//           translations: {
//             ar: "مزمن",
//             en: "Chronic",
//           },
//         },
//         {
//           id: 2,
//           translations: {
//             ar: "حاد",
//             en: "Acute",
//           },
//         },
//         {
//               id: 3,
//               translations: {
//                 ar: "other",
//                 en: "other",
//               },
//             },
//         {
//           other: [
//             {
//               id: 1,
//               value: "test1",
//             },
//             {
//               id: 2,
//               value: "test2",
//             },
//           ],
//         },
//       ],
//       vitreous: [
//         {
//           id: 1,
//           translations: {
//             ar: "مزمن",
//             en: "Chronic",
//           },
//         },
//         {
//           id: 2,
//           translations: {
//             ar: "حاد",
//             en: "Acute",
//           },
//         },
//         {
//               id: 3,
//               translations: {
//                 ar: "other",
//                 en: "other",
//               },
//             },
//         {
//           other: [
//             {
//               id: 1,
//               value: "test1",
//             },
//             {
//               id: 2,
//               value: "test2",
//             },
//           ],
//         },
//       ],
//       vessels: [
//         {
//           id: 1,
//           translations: {
//             ar: "مزمن",
//             en: "Chronic",
//           },
//         },
//         {
//           id: 2,
//           translations: {
//             ar: "حاد",
//             en: "Acute",
//           },
//         },
//         {
//               id: 3,
//               translations: {
//                 ar: "other",
//                 en: "other",
//               },
//             },
//         {
//           other: [
//             {
//               id: 1,
//               value: "test1",
//             },
//             {
//               id: 2,
//               value: "test2",
//             },
//           ],
//         },
//       ],
//       macula: [
//         {
//           id: 1,
//           translations: {
//             ar: "مزمن",
//             en: "Chronic",
//           },
//         },
//         {
//           id: 2,
//           translations: {
//             ar: "حاد",
//             en: "Acute",
//           },
//         },
//         {
//               id: 3,
//               translations: {
//                 ar: "other",
//                 en: "other",
//               },
//             },
//         {
//           other: [
//             {
//               id: 1,
//               value: "test1",
//             },
//             {
//               id: 2,
//               value: "test2",
//             },
//           ],
//         },
//       ],
//       retina: [
//         {
//           id: 1,
//           translations: {
//             ar: "مزمن",
//             en: "Chronic",
//           },
//         },
//         {
//           id: 2,
//           translations: {
//             ar: "حاد",
//             en: "Acute",
//           },
//         },
//         {
//               id: 3,
//               translations: {
//                 ar: "other",
//                 en: "other",
//               },
//             },
//         {
//           other: [
//             {
//               id: 1,
//               value: "test1",
//             },
//             {
//               id: 2,
//               value: "test2",
//             },
//           ],
//         },
//       ],
//       posteriorPole: [
//         {
//           id: 1,
//           translations: {
//             ar: "مزمن",
//             en: "Chronic",
//           },
//         },
//         {
//           id: 2,
//           translations: {
//             ar: "حاد",
//             en: "Acute",
//           },
//         },
//         {
//               id: 3,
//               translations: {
//                 ar: "other",
//                 en: "other",
//               },
//             },
//         {
//           other: [
//             {
//               id: 1,
//               value: "test1",
//             },
//             {
//               id: 2,
//               value: "test2",
//             },
//           ],
//         },
//       ],
//       periphery: [
//         {
//           id: 1,
//           translations: {
//             ar: "مزمن",
//             en: "Chronic",
//           },
//         },
//         {
//           id: 2,
//           translations: {
//             ar: "حاد",
//             en: "Acute",
//           },
//         },
//         {
//               id: 3,
//               translations: {
//                 ar: "other",
//                 en: "other",
//               },
//             },
//         {
//           other: [
//             {
//               id: 1,
//               value: "test1",
//             },
//             {
//               id: 2,
//               value: "test2",
//             },
//           ],
//         },
//       ],
//       pupillaryReflex: [
//         {
//           id: 1,
//           translations: {
//             ar: "مزمن",
//             en: "Chronic",
//           },
//         },
//         {
//           id: 2,
//           translations: {
//             ar: "حاد",
//             en: "Acute",
//           },
//         },
//         {
//               id: 3,
//               translations: {
//                 ar: "other",
//                 en: "other",
//               },
//             },
//         {
//           other: [
//             {
//               id: 1,
//               value: "test1",
//             },
//             {
//               id: 2,
//               value: "test2",
//             },
//           ],
//         },
//       ],
     
//     },
//     dilation: {
//       drug: [
//         {
//           id: 1,
//           translations: {
//             ar: "مزمن",
//             en: "Chronic",
//           },
//         },
//         {
//           id: 2,
//           translations: {
//             ar: "حاد",
//             en: "Acute",
//           },
//         },
//         {
//           id: 3,
//           translations: {
//             ar: "other",
//             en: "other",
//           },
//         },
//         {
//           other: [
//             {
//               id: 1,
//               value: "test1",
//             },
//             {
//               id: 2,
//               value: "test2",
//             },
//           ],
//         },
//       ],
//       eye: [
//         {
//           id: 1,
//           translations: {
//             ar: "مزمن",
//             en: "Chronic",
//           },
//         },
//         {
//           id: 2,
//           translations: {
//             ar: "حاد",
//             en: "Acute",
//           },
//         },
//         {
//           id: 3,
//           translations: {
//             ar: "other",
//             en: "other",
//           },
//         },
//         {
//           other: [
//             {
//               id: 1,
//               value: "test1",
//             },
//             {
//               id: 2,
//               value: "test2",
//             },
//           ],
//         },
//       ],
    
//     },
    
//   },
//   contactLength:{
//     fitting:{
//       manufacturer:[
//         {
//           id: 1,
//           translations: {
//             ar: "مزمن",
//             en: "Chronic",
//           },
//         },
//         {
//           id: 2,
//           translations: {
//             ar: "حاد",
//             en: "Acute",
//           },
//         },
//         {
//               id: 3,
//               translations: {
//                 ar: "other",
//                 en: "other",
//               },
//             },
//         {
//           other: [
//             {
//               id: 1,
//               value: "test1",
//             },
//             {
//               id: 2,
//               value: "test2",
//             },
        
//           ],
//         }
//       ],
//       brand:[
//         {
//           id: 1,
//           translations: {
//             ar: "مزمن",
//             en: "Chronic",
//           },
//         },
//         {
//           id: 2,
//           translations: {
//             ar: "حاد",
//             en: "Acute",
//           },
//         },
//         {
//               id: 3,
//               translations: {
//                 ar: "other",
//                 en: "other",
//               },
//             },
//         {
//           other: [
//             {
//               id: 1,
//               value: "test1",
//             },
//             {
//               id: 2,
//               value: "test2",
//             },
        
//           ],   
//         }
//       ],
//       design:[
//         {
//           id: 1,
//           translations: {
//             ar: "مزمن",
//             en: "Chronic",
//           },
//         },
//         {
//           id: 2,
//           translations: {
//             ar: "حاد",
//             en: "Acute",
//           },
//         },
//         {
//           id: 3,
//             translations: {
//               ar: "other",
//               en: "other",
//             },
//         },
//         {
//           other: [
//             {
//               id: 1,
//               value: "test1",
//             },
//             {
//               id: 2,
//               value: "test2",
//             },
//           ],
//         }
//       ],
//       qtyBox:[
//         {
//           id: 1,
//           translations: {
//             ar: "مزمن",
//             en: "Chronic",
//           },
//         },
//         {
//           id: 2,
//           translations: {
//             ar: "حاد",
//             en: "Acute",
//           },
//         },
//         {
//           id: 3,
//             translations: {
//               ar: "other",
//               en: "other",
//             },
//           },
//         {
//           other: [
//             {
//               id: 1,
//               value: "test1",
//             },
//             {
//               id: 2,
//               value: "test2",
//             },
//           ],
//         }
//       ],
//       comfort:[
//         {
//           id: 1,
//           translations: {
//             ar: "مزمن",
//             en: "Chronic",
//           },
//         },
//         {
//           id: 2,
//           translations: {
//             ar: "حاد",
//             en: "Acute",
//           },
//         },
//         {
//           id: 3,
//             translations: {
//               ar: "other",
//               en: "other",
//             },
//           },
//         {
//           other: [
//             {
//               id: 1,
//               value: "test1",
//             },
//             {
//               id: 2,
//               value: "test2",
//             },
        
//           ],
//         }
//       ],
//       vision:[
//         {
//           id: 1,
//           translations: {
//             ar: "مزمن",
//             en: "Chronic",
//           },
//         },
//         {
//           id: 2,
//           translations: {
//             ar: "حاد",
//             en: "Acute",
//           },
//         },
//         {
//           id: 3,
//             translations: {
//               ar: "other",
//               en: "other",
//             },
//           },
//         {
//           other: [
//             {
//               id: 1,
//               value: "test1",
//             },
//             {
//               id: 2,
//               value: "test2",
//             },
        
//           ],
//         }
//       ],
//       rotation:[
//         {
//           id: 1,
//           translations: {
//             ar: "مزمن",
//             en: "Chronic",
//           },
//         },
//         {
//           id: 2,
//           translations: {
//             ar: "حاد",
//             en: "Acute",
//           },
//         },
//         {
//           id: 3,
//             translations: {
//               ar: "other",
//               en: "other",
//             },
//           },
//         {
//           other: [
//             {
//               id: 1,
//               value: "test1",
//             },
//             {
//               id: 2,
//               value: "test2",
//             },
        
//           ],
//         }
//       ],
//       movement:[
//         {
//           id: 1,
//           translations: {
//             ar: "مزمن",
//             en: "Chronic",
//           },
//         },
//         {
//           id: 2,
//           translations: {
//             ar: "حاد",
//             en: "Acute",
//           },
//         },
//         {
//           id: 3,
//             translations: {
//               ar: "other",
//               en: "other",
//             },
//           },
//         {
//           other: [
//             {
//               id: 1,
//               value: "test1",
//             },
//             {
//               id: 2,
//               value: "test2",
//             },
        
//           ],
//         }
//       ],
//       centration:[
//         {
//           id: 1,
//           translations: {
//             ar: "مزمن",
//             en: "Chronic",
//           },
//         },
//         {
//           id: 2,
//           translations: {
//             ar: "حاد",
//             en: "Acute",
//           },
//         },
//         {
//           id: 3,
//             translations: {
//               ar: "other",
//               en: "other",
//             },
//           },
//         {
//           other: [
//             {
//               id: 1,
//               value: "test1",
//             },
//             {
//               id: 2,
//               value: "test2",
//             },
        
//           ],
//         }
//       ],
//       tear:[
//         {
//           id: 1,
//           translations: {
//             ar: "مزمن",
//             en: "Chronic",
//           },
//         },
//         {
//           id: 2,
//           translations: {
//             ar: "حاد",
//             en: "Acute",
//           },
//         },
//         {
//           id: 3,
//             translations: {
//               ar: "other",
//               en: "other",
//             },
//           },
//         {
//           other: [
//             {
//               id: 1,
//               value: "test1",
//             },
//             {
//               id: 2,
//               value: "test2",
//             },
        
//           ],
//         }
//       ],
//       ///////////////////////////
//       dn:[
//         {
//           id: 1,
//           translations: {
//             ar: "مزمن",
//             en: "Chronic",
//           },
//         },
//         {
//           id: 2,
//           translations: {
//             ar: "حاد",
//             en: "Acute",
//           },
//         },
//         {
//           id: 3,
//             translations: {
//               ar: "other",
//               en: "other",
//             },
//           },
//         {
//           other: [
//             {
//               id: 1,
//               value: "test1",
//             },
//             {
//               id: 2,
//               value: "test2",
//             },
        
//           ],
//         }
//       ],
//       solution:[
//         {
//           id: 1,
//           translations: {
//             ar: "مزمن",
//             en: "Chronic",
//           },
//         },
//         {
//           id: 2,
//           translations: {
//             ar: "حاد",
//             en: "Acute",
//           },
//         },
//         {
//           id: 3,
//             translations: {
//               ar: "other",
//               en: "other",
//             },
//           },
//         {
//           other: [
//             {
//               id: 1,
//               value: "test1",
//             },
//             {
//               id: 2,
//               value: "test2",
//             },
        
//           ],
//         }
//       ],
//       // measurements:{
//       //   dn:[
//       //     {
//       //       id: 1,
//       //       translations: {
//       //         ar: "مزمن",
//       //         en: "Chronic",
//       //       },
//       //     },
//       //     {
//       //       id: 2,
//       //       translations: {
//       //         ar: "حاد",
//       //         en: "Acute",
//       //       },
//       //     },
//       //     {
//       //       id: 3,
//       //         translations: {
//       //           ar: "other",
//       //           en: "other",
//       //         },
//       //       },
//       //     {
//       //       other: [
//       //         {
//       //           id: 1,
//       //           value: "test1",
//       //         },
//       //         {
//       //           id: 2,
//       //           value: "test2",
//       //         },
          
//       //       ],
//       //     }
//       //   ],
//       // }

      
//     },


//     keratometry:{
//     },
//   },
//   finalRx:{
//     measurements:{},
//     pd:{},
//     recommendation:{
//       lensType:[
//         {
//           id: 1,
//           translations: {
//             ar: "مزمن",
//             en: "Chronic",
//           },
//         },
//         {
//           id: 2,
//           translations: {
//             ar: "حاد",
//             en: "Acute",
//           },
//         },
//         {
//               id: 3,
//               translations: {
//                 ar: "other",
//                 en: "other",
//               },
//             },
//         {
//           other: [
//             {
//               id: 1,
//               value: "test1",
//             },
//             {
//               id: 2,
//               value: "test2",
//             },
        
//           ],
//         }
//       ],
//     }
//   },
//   medicalRx:{
//     eye:[
//       {
//         id: 1,
//         translations: {
//           ar: "مزمن",
//           en: "Chronic",
//         },
//       },
//       {
//         id: 2,
//         translations: {
//           ar: "حاد",
//           en: "Acute",
//         },
//       },
//       {
//             id: 3,
//             translations: {
//               ar: "other",
//               en: "other",
//             },
//           },
//       {
//         other: [
//           {
//             id: 1,
//             value: "test1",
//           },
//           {
//             id: 2,
//             value: "test2",
//           },
      
//         ],   
//       }
//     ],
//   }


 
// },