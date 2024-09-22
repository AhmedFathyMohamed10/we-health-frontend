export default {
    namespaced: true,
    state: {
      physiotherapyObject: {
        patientId: "ecf849ba-399d-11ed-b668-0242ac120002",
        chiefComplaint:[],
        history:{},
        entranceTest:{
          physicalExamination:{
            reflexes:[],
            skin:[],
            sensation:[]
          },
          bodyChart:{
            bodyChart:[],
            neurodynamics:[]
          },
          motion:[],
          muscleTest:[],
          muscleTone:[],
          functionalEvaluation:{
            balance: {
                sitting: "",
                standing:"",
                comment:"",
            },
            coordination: {
                upperLimps:{
                    right:"",
                    left:"",
                    comment:""
                },
                lowerLimps:{
                    right:"",
                    left:"",
                    comment:""
                },
            },
            gait:{
                frontal:"",
                sagittal:"",
                safety:{
                    rate:"",
                    comment:""
                },
                cadence:{
                    rate:"",
                    comment:""
                },
                speed:{
                    rate:"",
                    comment:""
                },
                fatigue:{
                    rate:"",
                    comment:""
                },
                remarks:""
            }
          },
          inbody:{
            composition:{
              intracellularWater:null,
              extracellularWater:null,
              protein:null,
              mineral:null,
              bodyFatMass:null
            }
          },
          physicalMeasuring:{
            humerus:{
              right:null,
              left:null,
            },
            thigh:{
              right:null,
              left:null,
            },
            ventricle:{
              right:null,
              left:null,
            },
            chest:null,
            aquarium:null,
            belly:null,
            center:null,
            comment:""
          },
          conclusion:{
            rom:"",
            muscle:"",
            skin:"",
            cardio:"",
            gait:"",
            transfers:"",
            balance:"",
            upper:"",
            lower:"",
          },        
        },
        planning:{
          sessions:[
             { "name": { "value": "New York", "id": 1 },
              "targets": [ { "name": { "value": "New York",  "id": 1 }, 
              "currentValue": "4", "targetValue": "4",
               "procedures": [ { "name": { "value": "New York",  "id": 1 }, 
               "noOfSessions": "4","currentSession":1, 
               "time": "44:44", "place": {"value":"outdoor","id":63},
                "viewDate": "2023-04-05T13:12:48.000Z", 
                "date": "2023-04-05T13:12:48.000Z",
                "comment": "Test Note Test", "status": "remaining" },
                 { "name": { "value": "Paris",  "id": 5 },
                  "noOfSessions": "3","currentSession":1,
                   "time": "33:33", "place":{"value":"Indoor","id":62}, 
                   "viewDate": "2023-04-17T13:13:51.000Z", 
                   "date": "2023-04-17T13:13:51.000Z",
                    "comment": "Test Note Test",
                     "status": "cancelled" } ,
                      { "name": { "value": "Paris", "id": 5 },
                       "noOfSessions": "3","currentSession":1, 
                       "time": "33:33","place":{"value":"Indoor","id":62}, 
                       "viewDate": "2023-04-17T13:13:51.000Z", 
                       "date": "2023-04-17T13:13:51.000Z", 
                       "comment": "Test Note Test", "status": "inProgress" }] } ] } ],
          diet:[],
        },
        procedures:{
          sessions:[],
          diet:[],
        },
      },
    },
    mutations: {
      // chiefComplaint ///////////////////////////
      'Set_Chief_Complaint': (state, payload) => {
        state.physiotherapyObject.chiefComplaint = JSON.parse(JSON.stringify(payload));
      },
      'Reset_Chief_Complaint': (state) => {
        state.physiotherapyObject.chiefComplaint =[];
      },

      // entranceTest ==> physicalExamination ///////////////////////////
      'Set_Reflexes': (state, payload) => {
        state.physiotherapyObject.entranceTest.physicalExamination.reflexes = JSON.parse(JSON.stringify(payload));
      },
      'Reset_Reflexes': (state) => {
        state.physiotherapyObject.entranceTest.physicalExamination.reflexes =[];
      },
      'Set_Sensation': (state, payload) => {
        state.physiotherapyObject.entranceTest.physicalExamination.sensation = JSON.parse(JSON.stringify(payload));
      },
      'Reset_Sensation': (state) => {
        state.physiotherapyObject.entranceTest.physicalExamination.sensation =[];
      },
      'Set_Skin': (state, payload) => {
        state.physiotherapyObject.entranceTest.physicalExamination.skin = JSON.parse(JSON.stringify(payload));
      },
      'Reset_Skin': (state) => {
        state.physiotherapyObject.entranceTest.physicalExamination.skin =[];
      },

      // entranceTest ==> bodyChart ///////////////////////////
      'Set_Body_Chart': (state, payload) => {
        state.physiotherapyObject.entranceTest.bodyChart.bodyChart = JSON.parse(JSON.stringify(payload));
      },
      'Reset_Body_Chart': (state) => {
        state.physiotherapyObject.entranceTest.bodyChart.bodyChart = [];
      },
      'Set_Neurodynamics': (state, payload) => {
        state.physiotherapyObject.entranceTest.bodyChart.neurodynamics = JSON.parse(JSON.stringify(payload));
      },
      'Reset_Neurodynamics': (state) => {
        state.physiotherapyObject.entranceTest.bodyChart.neurodynamics =[];
      },      
      // entranceTest ==> motion ///////////////////////////
      'Set_Motion': (state, payload) => {
        state.physiotherapyObject.entranceTest.motion = JSON.parse(JSON.stringify(payload));
      },
      'Reset_Motion': (state) => {
        state.physiotherapyObject.entranceTest.motion = [];
      },  
      // entranceTest ==> muscleTest ///////////////////////////
      'Set_Muscle_Test': (state, payload) => {
        state.physiotherapyObject.entranceTest.muscleTest = JSON.parse(JSON.stringify(payload));
      },
      'Reset_Muscle_Test': (state) => {
        state.physiotherapyObject.entranceTest.muscleTest = [];
      },  
      // entranceTest ==> muscleTone ///////////////////////////
      'Set_Muscle_Tone': (state, payload) => {
        state.physiotherapyObject.entranceTest.muscleTone = JSON.parse(JSON.stringify(payload));
      },
      'Reset_Muscle_Tone': (state) => {
        state.physiotherapyObject.entranceTest.muscleTone = [];
      },  
      // entranceTest ==> functionalEvaluation ///////////////////////////
      'Set_Functional_Evaluation': (state, payload) => {
        state.physiotherapyObject.entranceTest.functionalEvaluation = JSON.parse(JSON.stringify(payload));
      },
      'Reset_Functional_Evaluation': (state) => {
        const functionalEvaluationDefault = {
          balance: {
              sitting: "",
              standing:"",
              comment:"",
          },
          coordination: {
              upperLimps:{
                  right:"",
                  left:"",
                  comment:""
              },
              lowerLimps:{
                  right:"",
                  left:"",
                  comment:""
              },
          },
          gait:{
              frontal:"",
              sagittal:"",
              safety:{
                  rate:"",
                  comment:""
              },
              cadence:{
                  rate:"",
                  comment:""
              },
              speed:{
                  rate:"",
                  comment:""
              },
              fatigue:{
                  rate:"",
                  comment:""
              },
              remarks:""
          }
        }
        state.physiotherapyObject.entranceTest.functionalEvaluation = functionalEvaluationDefault;
      },  
      // entranceTest ==> physicalMeasuring ///////////////////////////
      'Set_Physical_Measuring': (state, payload) => {
        state.physiotherapyObject.entranceTest.physicalMeasuring = JSON.parse(JSON.stringify(payload));
      },
      'Reset_Physical_Measuring': (state) => {
        const physicalMeasuringDefault= {
            humerus:{
              right:null,
              left:null,
            },
            thigh:{
              right:null,
              left:null,
            },
            ventricle:{
              right:null,
              left:null,
            },
            chest:null,
            aquarium:null,
            belly:null,
            center:null,
            comment:""
        };
        state.physiotherapyObject.entranceTest.physicalMeasuring = physicalMeasuringDefault;
      },  
      // entranceTest ==> conclusion ///////////////////////////
      'Set_Conclusion': (state, payload) => {
        state.physiotherapyObject.entranceTest.conclusion = JSON.parse(JSON.stringify(payload));
      },
      'Reset_Conclusion': (state) => {
        const conclusionDefault={
          rom:"",
          muscle:"",
          skin:"",
          cardio:"",
          gait:"",
          transfers:"",
          balance:"",
          upper:"",
          lower:"",
        };
        state.physiotherapyObject.entranceTest.conclusion = conclusionDefault;
      },  
      // planning ==> sessions ///////////////////////////
      'Set_Sessions': (state, payload) => {
        // Vue.set(state.physiotherapyObject.planning.sessions, payload)
        state.physiotherapyObject.planning.sessions = JSON.parse(JSON.stringify(payload));
      },
      'Reset_Sessions': (state) => {
        state.physiotherapyObject.planning.sessions = [];
      },  
    },
    actions: {
      // chiefComplaint ///////////////////////////
      setChiefComplaint(context,payload) {
        context.commit("Set_Chief_Complaint",payload);
      },
      resetChiefComplaint(context) {
        context.commit("Reset_Chief_Complaint");
      },
      
      // entranceTest ==> physicalExamination ///////////////////////////      
      setReflexes(context,payload) {
        context.commit("Set_Reflexes",payload);
      },
      resetReflexes(context) {
        context.commit("Reset_Reflexes");
      },
      setSensation(context,payload) {
        context.commit("Set_Sensation",payload);
      },
      resetSensation(context) {
        context.commit("Reset_Sensation");
      },
      setSkin(context,payload) {
        context.commit("Set_Skin",payload);
      },
      resetSkin(context) {
        context.commit("Reset_Skin");
      },

      // entranceTest ==> bodyChart ///////////////////////////      
      setBodyChart(context,payload) {
        context.commit("Set_Body_Chart",payload);
      },
      resetBodyChart(context) {
        context.commit("Reset_Body_Chart");
      },
      setNeurodynamics(context,payload) {
        context.commit("Set_Neurodynamics",payload);
      },
      resetNeurodynamics(context) {
        context.commit("Reset_Neurodynamics");
      },

      // entranceTest ==> motion ///////////////////////////      
      setMotion(context,payload) {
        context.commit("Set_Motion",payload);
      },
      resetMotion(context) {
        context.commit("Reset_Motion");
      },
      // entranceTest ==> motion ///////////////////////////      
      setMuscleTest(context,payload) {
        context.commit("Set_Muscle_Test",payload);
      },
      resetMuscleTest(context) {
        context.commit("Reset_Muscle_Test");
      },
      // entranceTest ==> muscleTone ///////////////////////////      
      setMuscleTone(context,payload) {
        context.commit("Set_Muscle_Tone",payload);
      },
      resetMuscleTone(context) {
        context.commit("Reset_Muscle_Tone");
      },
      // entranceTest ==> functionalEvaluation ///////////////////////////      
      setFunctionalEvaluation(context,payload) {
        context.commit("Set_Functional_Evaluation",payload);
      },
      resetFunctionalEvaluation(context) {
        context.commit("Reset_Functional_Evaluation");
      },
      // entranceTest ==> physicalMeasuring ///////////////////////////      
      setPhysicalMeasuring(context,payload) {
        context.commit("Set_Physical_Measuring",payload);
      },
      resetPhysicalMeasuring(context) {
        context.commit("Reset_Physical_Measuring");
      },
      // entranceTest ==> conclusion ///////////////////////////      
      setConclusion(context,payload) {
        context.commit("Set_Conclusion",payload);
      },
      resetConclusion(context) {
        context.commit("Reset_Conclusion");
      },
      // planning ==> sessions ///////////////////////////      
      setSessions(context,payload) {
        context.commit("Set_Sessions",payload);
      },
      resetSessions(context) {
        context.commit("Reset_Sessions");
      },
    },
    getters: {
      //////////////////////// all ////////////////////
      getPhysiotherapyObject(state) {
        return state.physiotherapyObject;
      },
      //////////////////////// chiefComplaint ////////////////////
      getChiefComplaint(state) {
        return state.physiotherapyObject.chiefComplaint;
      },
      //////////////////////// entranceTest ////////////////////
      getReflexes(state) {
        return state.physiotherapyObject.entranceTest.physicalExamination.reflexes;
      },
      getSensation(state) {
        return state.physiotherapyObject.entranceTest.physicalExamination.sensation;
      },
      getSkin(state) {
        return state.physiotherapyObject.entranceTest.physicalExamination.skin;
      },
      getBodyChart(state) {
        return state.physiotherapyObject.entranceTest.bodyChart.bodyChart;
      },
      getNeurodynamics(state) {
        return state.physiotherapyObject.entranceTest.bodyChart.neurodynamics;
      },
      getMotion(state) {
        return state.physiotherapyObject.entranceTest.motion;
      },
      getMuscleTest(state) {
        return state.physiotherapyObject.entranceTest.muscleTest;
      },
      getMuscleTone(state) {
        return state.physiotherapyObject.entranceTest.muscleTone;
      },
      getFunctionalEvaluation(state) {
        return state.physiotherapyObject.entranceTest.functionalEvaluation;
      },
      getInbody(state) {
        return state.physiotherapyObject.entranceTest.inbody;
      },
      getPhysicalMeasuring(state) {
        return state.physiotherapyObject.entranceTest.physicalMeasuring;
      },
      getConclusion(state) {
        return state.physiotherapyObject.entranceTest.conclusion;
      },
      //////////////////////// planning ////////////////////
      getSessions(state) {
        return state.physiotherapyObject.planning.sessions;
      },
    },
  };
  