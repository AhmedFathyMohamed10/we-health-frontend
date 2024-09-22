import axios from "axios";
const prefix = 'erp/insuranceAgent';
import pulseRate from "./measurements/pulseRate";
import BloodPressure from "./measurements/BloodPressure";
import OxygenLevel from "./measurements/OxygenLevel";
import BMI from "./measurements/BMI";
import Length from "./measurements/Length";
import Weight from "./measurements/Weight";
import Temprature from "./measurements/Temprature";
import Diabetes from "./measurements/Diabetes";
import Tooth from "./measurements/Tooth";
import EyeRefraction from "./measurements/EyeRefraction.js";
import Period from "./measurements/Period.js";
import Smoking from "./measurements/Smoking.js";
import Steps from "./measurements/Steps.js";
import SleepCalculator from "./measurements/SleepCalculator.js";
import Calories from "./measurements/Calories.js";
import GrowthChart from "./measurements/GrowthChart.js";
import Inbody from "./measurements/Inbody.js";
import PainChart from "./measurements/PainChart.js";
export default {
  namespaced: true,
  state: {
    listResponse:{
      data:{
        pulseRate:{
          data:[
            {id:1,beats:60,created_at:"20-6-6",Note:"Normal",rate:'60PPM'},
            {id:2,beats:70,created_at:"21-6-7",Note:"Normal",rate:'60PPM'},
            {id:3,beats:80,created_at:"22-6-8",Note:"Good",rate:'60PPM'},
            {id:4,beats:65,created_at:"23-6-9",Note:"Normal",rate:'60PPM'},
            {id:5,beats:75,created_at:"23-6-10",Note:"Normal",rate:'60PPM'},
            {id:6,beats:85,created_at:"23-6-11",Note:"Good",rate:'60PPM'},
          ],
          count:1,
          // data:[],
          // count:0,
        },
        BloodPressure:{
          data:[
            {id:1, beats:60, systolic:120,created_at:"20-06-06",diastolic:70,Note:"Normal"},
            {id:2, beats:70, systolic:70,created_at:"21-06-07",diastolic:"Normal",Note:"Normal"},
            {id:3, beats:80, systolic:80,created_at:"22-06-08",diastolic:"Good" ,Note:"Good"},
            {id:4, beats:65, systolic:65,created_at:"23-06-09",diastolic:"Normal",Note:"Normal"},
            {id:5, beats:75, systolic:75,created_at:"23-06-10",diastolic:"Normal",Note:"Normal"},
            {id:6, beats:85, systolic:85,created_at:"2023-06-11",diastolic:"Good",Note:"Good"},
          ],
          count:2,
          // data:[],
          // count:0,breathing
        },
        OxygenLevel:{
         
          data:[
            {id:1,beats:60,created_at:"20-06-06",Note:"Normal",spo2:'97%'},
            {id:2,beats:70,created_at:"21-06-07",Note:"Normal",spo2:'97%'},
            {id:3,beats:80,created_at:"22-06-08",Note:"Good",spo2:'97%'},
            {id:4,beats:65,created_at:"23-06-09",Note:"Normal",spo2:'97%'},
            {id:5,beats:75,created_at:"23-06-10",Note:"Normal",spo2:'97%'},
            {id:6,beats:85,created_at:"23-06-11",Note:"Good",spo2:'97%'},
          ],
          count:3,
          // data:[],
          // count:0,
        },
        BMI:{
          data:[
            {id:1,beats:60,created_at:"20-06-06",Note:"Normal",range:20},
            {id:2,beats:70,created_at:"21-06-07",Note:"Normal",range:31},
            {id:3,beats:80,created_at:"22-06-08",Note:"Obesity Class 2",range:31},
            {id:4,beats:65,created_at:"23-06-09",Note:"Obesity",range:31},
            {id:5,beats:75,created_at:"23-06-10",Note:"Normal",range:31},
            {id:6,beats:85,created_at:"23-06-11",Note:"Good",range:31},
          ],
          count:4,
          // data:[],
          // count:0,
        },
        Length:{
          data:[
            {id:1,beats:60,created_at:"20-06-06",Note:"Normal",Length:'175CM'},
            {id:2,beats:70,created_at:"21-06-07",Note:"Normal" ,Length:'175CM'},
            {id:3,beats:80,created_at:"22-06-08",Note:"Good" ,Length:'175CM'},
            {id:4,beats:65,created_at:"23-06-09",Note:"Normal" ,Length:'175CM'},
            {id:5,beats:75,created_at:"23-06-10",Note:"Normal" ,Length:'175CM'},
            {id:6,beats:85,created_at:"23-06-11",Note:"Good" ,Length:'175CM'},
          ],
          count:5,
          // data:[],
          // count:0,
        },
        Weight:{
          data:[
            {id:1,beats:60,created_at:"20-06-06",Note:"Obesity",weight:'115 kg'},
            {id:2,beats:70,created_at:"21-06-07",Note:"Normal",weight:175},
            {id:3,beats:80,created_at:"22-06-08",Note:"Good",weight:175},
            {id:4,beats:65,created_at:"23-06-09",Note:"Normal",weight:175},
            {id:5,beats:75,created_at:"23-06-10",Note:"Normal",weight:175},
            {id:6,beats:85,created_at:"23-06-11",Note:"Good",weight:175},
          ],
          count:6,
          // data:[],
          // count:0,
        },
        Temprature:{
          data:[
            {id:1,beats:60,created_at:"20-06-06",Note:"Normal",degree:'37.5°C'},
            {id:2,beats:70,created_at:"21-06-07",Note:"Normal",degree:'37.5°C'},
            {id:3,beats:80,created_at:"22-06-08",Note:"Good",degree:'37.5°C'},
            {id:4,beats:65,created_at:"23-06-09",Note:"Normal",degree:'37.5°C'},
            {id:5,beats:75,created_at:"23-06-10",Note:"Normal",degree:'37.5°C'},
            {id:6,beats:85,created_at:"23-06-11",Note:"Good",degree:'37.5°C'},
          ],
          count:7,
          // data:[],
          // count:0,
        },
        Diabetes:{
          data:[
            {id:1,beats:60,created_at:"20-06-06",Note:"Normal",diabetes:'60PPM'},
            {id:2,beats:70,created_at:"21-06-07",Note:"Normal",diabetes:'70PPM'},
            {id:3,beats:80,created_at:"22-06-08",Note:"Good",diabetes:'70PPM'},
            {id:4,beats:65,created_at:"23-06-09",Note:"Normal",diabetes:'70PPM'},
            {id:5,beats:75,created_at:"23-06-10",Note:"Normal",diabetes:'70PPM'},
            {id:6,beats:85,created_at:"23-06-11",Note:"Good",diabetes:'70PPM'},
          ],
          count:8,
          // data:[],
          // count:0,
        },
        Tooth:{
          data:[
            {id:1,beats:60,created_at:"20-06-06",Note:"29/5/2021",Next:"EndoCrown"},
            {id:2,beats:70,created_at:"21-06-07",Note:"29/5/2021",Next:"EndoCrown"},
            {id:3,beats:80,created_at:"22-06-08",Note:"29/5/2021",Next:"EndoCrown"},
            {id:4,beats:65,created_at:"23-06-09",Note:"29/5/2021",Next:"EndoCrown"},
            {id:5,beats:75,created_at:"23-06-10",Note:"29/5/2021",Next:"EndoCrown"},
            {id:6,beats:85,created_at:"23-06-11",Note:"29/5/2021",Next:"EndoCrown"},
          ],
          count:9,
          // data:[],
          // count:0,
        },
        EyeRefraction:{
          data:[
            {id:1,beats:60,created_at:"20-06-06",Note:"Normal",date:'12/9/2022'},
            {id:2,beats:70,created_at:"21-06-07",Note:"Normal",date:'12/9/2022'},
            {id:3,beats:80,created_at:"22-06-08",Note:"Good",date:'12/9/2022'},
            {id:4,beats:65,created_at:"23-06-09",Note:"Normal",date:'12/9/2022'},
            {id:5,beats:75,created_at:"23-06-10",Note:"Normal",date:'12/9/2022'},
            {id:6,beats:85,created_at:"23-06-11",Note:"Good",date:'12/9/2022'},
          ],
          count:10,
          // data:[],
          // count:0,
        },
        Period:{
          data:[
            {id:1,beats:60,created_at:"2023-06-06",Note:"Normal",period:'70PPM'},
            {id:2,beats:70,created_at:"2023-06-07",Note:"Normal",period:'70PPM'},
            {id:3,beats:80,created_at:"2023-06-08",Note:"Good",period:'70PPM'},
            {id:4,beats:65,created_at:"2023-06-09",Note:"Normal",period:'70PPM'},
            {id:5,beats:75,created_at:"2023-06-10",Note:"Normal",period:'70PPM'},
            {id:6,beats:85,created_at:"2023-06-11",Note:"Good",period:'70PPM'},
          ],
          count:11,
          // data:[],
          // count:0,
        },
        Smoking:{
          data:[
            {id:1,beats:60,created_at:"20-06-06",Note:"Normal",smoking:'70PPM'},
            {id:2,beats:70,created_at:"21-06-07",Note:"Normal",smoking:'70PPM'},
            {id:3,beats:80,created_at:"22-06-08",Note:"Good",smoking:'70PPM'},
            {id:4,beats:65,created_at:"23-06-09",Note:"Normal",smoking:'70PPM'},
            {id:5,beats:75,created_at:"23-06-10",Note:"Normal",smoking:'70PPM'},
            {id:6,beats:85,created_at:"23-06-11",Note:"Good",smoking:'70PPM'},
          ],
          count:12,
          // data:[],
          // count:0,
        },
        Steps:{
          data:[
            {id:1,beats:60,created_at:"20-06-06",Note:"Normal",steps:'7550/days'},
            {id:2,beats:70,created_at:"21-06-07",Note:"Normal"},
            {id:3,beats:80,created_at:"22-06-08",Note:"Good"},
            {id:4,beats:65,created_at:"23-06-09",Note:"Normal"},
            {id:5,beats:75,created_at:"23-06-10",Note:"Normal"},
            {id:6,beats:85,created_at:"23-06-11",Note:"Good"},
          ],
          count:13,
          // data:[],
          // count:0,
        },
        SleepCalculator:{
          data:[
            {id:1,beats:60,created_at:"20-06-06",Note:"Normal" ,sleep:"70PPM"},
            {id:2,beats:70,created_at:"21-06-07",Note:"Normal",sleep:"70PPM"},
            {id:3,beats:80,created_at:"22-06-08",Note:"Good",sleep:"70PPM"},
            {id:4,beats:65,created_at:"23-06-09",Note:"Normal"},
            {id:5,beats:75,created_at:"23-06-10",Note:"Normal"},
            {id:6,beats:85,created_at:"23-06-11",Note:"Good"},
          ],
          count:14,
          // data:[],
          // count:0,
        },
        Calories:{
          data:[
            {id:1,beats:60,created_at:"20-06-06",Note:"Normal",calories:"70PPM"},
            {id:2,beats:70,created_at:"21-06-07",Note:"Normal",calories:"70PPM"},
            {id:3,beats:80,created_at:"22-06-08",Note:"Good",calories:"70PPM"},
            {id:4,beats:65,created_at:"23-06-09",Note:"Normal",calories:"70PPM"},
            {id:5,beats:75,created_at:"23-06-10",Note:"Normal",calories:"70PPM"},
            {id:6,beats:85,created_at:"23-06-11",Note:"Good",calories:"70PPM"},
          ],
          count:14,
          // data:[],
          // count:0,
        },
        GrowthChart:{
          data:[
            {id:1,beats:60,created_at:"20-06-06",Note:"Normal",growth:"70PPM"},
            {id:2,beats:70,created_at:"21-06-07",Note:"Normal",growth:"70PPM"},
            {id:3,beats:80,created_at:"22-06-08",Note:"Good",growth:"70PPM"},
            {id:4,beats:65,created_at:"23-06-09",Note:"Normal",growth:"70PPM"},
            {id:5,beats:75,created_at:"23-06-10",Note:"Normal",growth:"70PPM"},
            {id:6,beats:85,created_at:"23-06-11",Note:"Good",growth:"70PPM"},
          ],
          count:15,
          // data:[],
          // count:0,
        },
        Inbody:{
          data:[
            {id:1,beats:60,created_at:"20-06-06",Note:"Normal",inbody:"70PPM"},
            {id:2,beats:70,created_at:"21-06-07",Note:"Normal",inbody:"70PPM"},
            {id:3,beats:80,created_at:"22-06-08",Note:"Good",inbody:"70PPM"},
            {id:4,beats:65,created_at:"23-06-09",Note:"Normal",inbody:"70PPM"},
            {id:5,beats:75,created_at:"23-06-10",Note:"Normal",inbody:"70PPM"},
            {id:6,beats:85,created_at:"23-06-11",Note:"Good",inbody:"70PPM"},
          ],
          count:16,
          // data:[],
          // count:0,
        },
        PainChart:{
          data:[
            {id:1,beats:60,created_at:"20-06-06",Note:"Normal",painChart:"70PPM"},
            {id:2,beats:70,created_at:"21-06-07",Note:"Normal",painChart:"70PPM"},
            {id:3,beats:80,created_at:"22-06-08",Note:"Normal",painChart:"70PPM"},
            {id:4,beats:65,created_at:"23-06-09",Note:"Normal",painChart:"70PPM"},
            {id:5,beats:75,created_at:"23-06-10",Note:"Normal",painChart:"70PPM"},
            {id:6,beats:85,created_at:"23-06-11",Note:"Normal",painChart:"70PPM"},
          ],
          count:16,
          // data:[],
          // count:0,
        },

      }
    },
    listLoading: false,
    listError: null,
    ///////////////////////
  },
  // get the currant state value
  getters: {
    getListResponse: state => state.listResponse,
    getListLoading: state => state.listLoading,
    getListError: state => state.listError,
    //////////////////////
  },
  // use to perform un mutate or change states getDeleteLoading,getUpsertLoading,getUpsertError
  mutations: {
    setListResponse(state, data) {
      state.listResponse = data
    },
    setListLoading(state, loading) {
      state.listLoading = loading
    },
    setListError(state, error) {
      state.listError = error
    },
    ////////////////////
    create(state, payload) {
      console.log("create from measurements rate: " + JSON.stringify(payload))
      state.listResponse.data[payload.key].data.unshift(payload.value);
      state.listResponse.count = state.listResponse.count + 1;
    },
    update(state, payload) {
      let index = state.listResponse.data[payload.key].data.findIndex((item) => item.code == payload.code);
      if (index > -1) {
        state.listResponse.data[payload.key].data[index] = payload.value;
      }
    },
    delete(state, payload) {
      let filteredList = []
      filteredList = state.listResponse.data[payload.key].data.filter(item => item.id !== payload.value);
      state.listResponse.data[payload.key].data = [...filteredList];
    },
  },
  // use to perform un asynchronous tasks
  actions: {
    setListResponse({ commit }, payload) {
      commit('setListResponse', payload);
    },
    setListError({ commit }, payload){
      commit('setListError', payload);
    },
    /////////////////////////
    async list({ commit }, params) {
      commit('setListLoading', true)
      try {
        const response = await axios.get(`${prefix}/search-insurance-agent?page=${params.pageNumber}&limit=${params.rows}&name=${params.name}&mobile=${params.mobile}`);
        console.log(response);
        commit("setListResponse", response.data);
        commit('setListError', null)
        return Promise.resolve(response.data)
      } catch (error) {
        console.log(error)
        commit('setListError', error.data)
        return Promise.reject(error.data)
      }
      finally {
        commit('setListLoading', false)
      }
    },
  },
  modules:{
    pulseRate,
    BloodPressure,
    OxygenLevel,
    BMI,
    Length,
    Weight,
    Temprature,
    Diabetes,
    Tooth,
    EyeRefraction,
    Period,
    Smoking,
    Steps,
    SleepCalculator,
    // SleepCalculator: sleepCalculator,
    Calories,
    GrowthChart,
    Inbody,
    PainChart
  }
};;


