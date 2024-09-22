export default {
  data() {
    return {
      
      // physicalOptions: [
      //   {
      //     key: "temp",
      //     en: "Temp",
      //     ar: "Temp",
      //     comment: "",
      //     checked: false,
      //   },
      //   {
      //     key: "skin",
      //     en: "Skin",
      //     ar: "Skin",
      //     comment: "",
      //     checked: false,
      //   },
      //   {
      //     key: "nodes",
      //     en: "Nodes",
      //     ar: "Nodes",
      //     comment: "",
      //     checked: false,
      //   },
      //   {
      //     key: "head",
      //     en: "Head",
      //     ar: "Head",
      //     comment: "",
      //     checked: false,
      //   },
      //   {
      //     key: "eyesLeftRight",
      //     en: "Eyes left/right",
      //     ar: "Eyes left/right",
      //     comment: "",
      //     checked: false,
      //   },
      //   {
      //     key: "earsLeftRight",
      //     en: "Ears left/right",
      //     ar: "Ears left/right",
      //     comment: "",
      //     checked: false,
      //   },
      //   {
      //     key: "nose",
      //     en: "Nose",
      //     ar: "Nose",
      //     comment: "",
      //     checked: false,
      //   },
      //   {
      //     key: "oropharynx",
      //     en: "Oropharynx",
      //     ar: "Oropharynx",
      //     comment: "",
      //     checked: false,
      //   },
      //   {
      //     key: "neck",
      //     en: "Neck",
      //     ar: "Neck",
      //     comment: "",
      //     checked: false,
      //   },
      //   {
      //     key: "chestBreast",
      //     en: "Chest / Breast",
      //     ar: "Chest / Breast",
      //     comment: "",
      //     checked: false,
      //   },
      //   {
      //     key: "lung",
      //     en: "Lung",
      //     ar: "Lung",
      //     comment: "",
      //     checked: false,
      //   },
      //   {
      //     key: "cardiovascular",
      //     en: "Cardiovascular (murmurs)",
      //     ar: "Cardiovascular (murmurs)",
      //     comment: "",
      //     checked: false,
      //   },
      //   {
      //     key: "abdomen",
      //     en: "Abdomen",
      //     ar: "Abdomen",
      //     comment: "",
      //     checked: false,
      //   },
      //   {
      //     key: "genitalia",
      //     en: "Genitalia",
      //     ar: "Genitalia",
      //     comment: "",
      //     checked: false,
      //   },
      //   {
      //     key: "hips",
      //     en: "Hips (clicks)",
      //     ar: "Hips (clicks)",
      //     comment: "",
      //     checked: false,
      //   },
      //   {
      //     key: "neuro",
      //     en: "Neuro (tone/strength)",
      //     ar: "Neuro (tone/strength)",
      //     comment: "",
      //     checked: false,
      //   },
      //   {
      //     key: "evidence",
      //     en: "Evidence",
      //     ar: "Evidence",
      //     comment: "",
      //     checked: false,
      //   },
      //   {
      //     key: "footLeft",
      //     en: "Foot left",
      //     ar: "Foot left",
      //     comment: "",
      //     checked: false,
      //   },
      //   {
      //     key: "footRight",
      //     en: "Foot right",
      //     ar: "Foot right",
      //     comment: "",
      //     checked: false,
      //   },
      //   {
      //     key: "handLeft",
      //     en: "Hand left",
      //     ar: "Hand left",
      //     comment: "",
      //     checked: false,
      //   },
      //   {
      //     key: "handRight",
      //     en: "Hand right",
      //     ar: "Hand right",
      //     comment: "",
      //     checked: false,
      //   },
      //   {
      //     key: "handFingersLeft",
      //     en: "Hand fingers left",
      //     ar: "Hand fingers left",
      //     comment: "",
      //     checked: false,
      //   },
      //   {
      //     key: "handFingersRight",
      //     en: "Hand fingers right",
      //     ar: "Hand fingers right",
      //     comment: "",
      //     checked: false,
      //   },
      //   {
      //     key: "footFingersLeft",
      //     en: "Foot fingers left",
      //     ar: "Foot fingers left",
      //     comment: "",
      //     checked: false,
      //   },
      //   {
      //     key: "footFingerRight",
      //     en: "Foot fingers right",
      //     ar: "Foot fingers right",
      //     comment: "",
      //     checked: false,
      //   },
      // ],
      // behavioralOptions: [
      //   {
      //     key: "vocalizesBabbles",
      //     en: "Vocalizes / Babbles",
      //     ar: "Vocalizes / Babbles",
      //     comment: "",
      //     checked: false,
      //   },
      //   {
      //     key: "recognizesParentsVoice",
      //     en: "Recognizes parents' voice",
      //     ar: "Recognizes parents' voice",
      //     comment: "",
      //     checked: false,
      //   },
      //   {
      //     key: "graspingObjects",
      //     en: "Grasping objects",
      //     ar: "Grasping objects",
      //     comment: "",
      //     checked: false,
      //   },
      //   {
      //     key: "rollsOver",
      //     en: "Rolls over",
      //     ar: "Rolls over",
      //     comment: "",
      //     checked: false,
      //   },
      //   {
      //     key: "hearingFromBirth",
      //     en: "Hearing from birth",
      //     ar: "Hearing from birth",
      //     comment: "",
      //     checked: false,
      //   },
      //   {
      //     key: "vision",
      //     en: "Vision (exam only)",
      //     ar: "Vision (exam only)",
      //     comment: "",
      //     checked: false,
      //   },
      //   {
      //     key: "headNeckControl",
      //     en: "Head/Neck control",
      //     ar: "Head/Neck control",
      //     comment: "",
      //     checked: false,
      //   },
      //   {
      //     key: "liftsChest",
      //     en: "Lifts chest (prone position)",
      //     ar: "Lifts chest (prone position)",
      //     comment: "",
      //     checked: false,
      //   },
      // ]
    };
  },
  computed: {
    physicalExam() {
      console.log(this.$store.getters['detailsPediatric/pediatricStaticData/physicalExam'])
       return this.$store.getters['detailsPediatric/pediatricStaticData/physicalExam']
    },
    behavioralOptions() {
      return this.physicalExam['Behavioral']['Behavioral']
    },
    physicalOptions() {
      return  this.physicalExam['Physical']['Physical']
    }
  },
  methods: {

  destructOptionsList(list){
    console.log(list)
    const result = [];
    for (const item of list) {
    
        result.push({ id: item.id, value: item.value, comment:"", checked: false });
     
    }
    return result;
}

  }
};
