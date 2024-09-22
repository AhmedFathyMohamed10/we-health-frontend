/////////////////////////////// validators //////////////////////////////////
// import {minLength,maxLength,decimal,numeric} from "vuelidate/lib/validators";
import {
  minLength,
  maxLength,
  minValue,
  maxValue,
  required,
  decimal,
} from "vuelidate/lib/validators";
import { validDate, notContainsHtmlTags} from "@/validation/customValidators";
/////////////////////////////////////////////////////////////////////////////
export default {
  data() {
    return {
    };
  },
  computed: {
    generalObject() {
      return this.$store.getters["detailsGeneral/general/getGeneralObject"];
    },
    generalObjectModified() {
      const {diagnosis,rx,referral,form,recall,summery} = this.generalObject
      return {diagnosis,rx,referral,form,recall,summery}
    },
    physiotherapyObject() {
      return Object.assign(this.$store.getters["detailsPhysiotherapy/physiotherapy/getPhysiotherapyObject"],this.generalObjectModified);
    },
  },
  validations: {
    physiotherapyObject: {
      diagnosis: {
        complaints:{
          maxLength: maxLength(20),
        },
        diagnosis:{
          maxLength: maxLength(20),
        },
      },
      rx: {
        maxLength: maxLength(20),
      },
      referral: {
        maxLength: maxLength(20),
      },
      form: {
        maxLength: maxLength(20),
      },
      recall: {},
      summery: {},
      ////////////////////////
      chiefComplaint:{
        maxLength: maxLength(2),
      },
      history:{},
      entranceTest:{
        physicalExamination:{
            skin :{
            maxLength: maxLength(2)
            },
            reflexes :{
              maxLength: maxLength(2)
            },
            sensation :{
              maxLength: maxLength(2)
            }
        },
        bodyChart:{
          neurodynamics:{
            maxLength: maxLength(1)
          },
          bodyOfChart:{
            maxLength: maxLength(1)
          }
        },
        motion:{
          maxLength: maxLength(2)
        },
        muscleTest:{
          maxLength: maxLength(2)
        },
        muscleTone:{
          maxLength: maxLength(2)
        },
        functionalEvaluation:{
          balance:{
              comment: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                    return notContainsHtmlTags(value);
                },
              }
          },
          coordination:{
              upperLimps:{
                  comment: {
                      minLength: minLength(1),
                      maxLength: maxLength(255),
                      notContainsHtmlTags(value) {
                          return notContainsHtmlTags(value);
                      },
                  },       
              },
              lowerLimps:{
                  comment: {
                      minLength: minLength(1),
                      maxLength: maxLength(255),
                      notContainsHtmlTags(value) {
                          return notContainsHtmlTags(value);
                      },
                  },       
              },
          },
          gait:{
                  frontal:{
                      minLength: minLength(1),
                      maxLength: maxLength(255),
                      notContainsHtmlTags(value) {
                          return notContainsHtmlTags(value);
                      },
                  },
                  sagittal:{
                      minLength: minLength(1),
                      maxLength: maxLength(255),
                      notContainsHtmlTags(value) {
                          return notContainsHtmlTags(value);
                      },
                  },
                  safety:{
                      comment:{
                          minLength: minLength(1),
                          maxLength: maxLength(255),
                          notContainsHtmlTags(value) {
                              return notContainsHtmlTags(value);
                          },
                      }
                  },
                  cadence:{
                      comment:{
                          minLength: minLength(1),
                          maxLength: maxLength(255),
                          notContainsHtmlTags(value) {
                              return notContainsHtmlTags(value);
                          },
                      }
                  },
                  speed:{
                      comment:{
                          minLength: minLength(1),
                          maxLength: maxLength(255),
                          notContainsHtmlTags(value) {
                              return notContainsHtmlTags(value);
                          },
                      }
                  },
                  fatigue:{
                      comment:{
                          minLength: minLength(1),
                          maxLength: maxLength(255),
                          notContainsHtmlTags(value) {
                              return notContainsHtmlTags(value);
                          },
                      }
                  },
                  remarks:{
                      minLength: minLength(1),
                      maxLength: maxLength(255),
                      notContainsHtmlTags(value) {
                          return notContainsHtmlTags(value);
                      },
                  }
          }
      },
        inbody:{},
        physicalMeasuring:{
            humerus: {
              right: {
                // required,
                decimal,
                minValue: minValue(1),
                maxValue: maxValue(100),
              },
              left: {
                decimal,
                minValue: minValue(1),
                maxValue: maxValue(100),
              },
            },
            thigh: {
              right: {
                decimal,
                minValue: minValue(1),
                maxValue: maxValue(100),
              },
              left: {
                decimal,
                minValue: minValue(1),
                maxValue: maxValue(100),
              },
            },
            ventricle: {
              right: {
                decimal,
                minValue: minValue(1),
                maxValue: maxValue(100),
              },
              left: {
                decimal,
                minValue: minValue(1),
                maxValue: maxValue(100),
              },
            },
            chest: {
              decimal,
              minValue: minValue(1),
              maxValue: maxValue(100),
            },
            aquarium: {
              decimal,
              minValue: minValue(1),
              maxValue: maxValue(100),
            },
            belly: {
              decimal,
              minValue: minValue(1),
              maxValue: maxValue(100),
            },
            center: {
              decimal,
              minValue: minValue(1),
              maxValue: maxValue(100),
            },
            comment: {
              minLength: minLength(1),
              maxLength: maxLength(255),
              notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
              },
            },
        },
        conclusion:{
            rom: {
              // required,
              minLength: minLength(1),
              maxLength: maxLength(255),
              notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
              },
            },
            muscle: {
              minLength: minLength(1),
              maxLength: maxLength(255),
              notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
              },
            },
            skin: {
              minLength: minLength(1),
              maxLength: maxLength(255),
              notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
              },
            },
            cardio: {
              minLength: minLength(1),
              maxLength: maxLength(255),
              notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
              },
            },
            gait: {
              minLength: minLength(1),
              maxLength: maxLength(255),
              notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
              },
            },
            transfers: {
              minLength: minLength(1),
              maxLength: maxLength(255),
              notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
              },
            },
            balance: {
              minLength: minLength(1),
              maxLength: maxLength(255),
              notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
              },
            },
            upper: {
              minLength: minLength(1),
              maxLength: maxLength(255),
              notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
              },
            },
            lower: {
              minLength: minLength(1),
              maxLength: maxLength(255),
              notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
              },
            },
        },        
      },
      planning:{
        sessions:{},
        diet:{
          maxLength: maxLength(20),
        },
      },
      procedures:{
        sessions:{},
        diet:{},
      },
    },
  },
};
