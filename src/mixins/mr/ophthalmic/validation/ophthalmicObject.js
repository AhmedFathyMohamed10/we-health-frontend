////////////////////////////////////////////////////////
import {minLength,maxLength,numeric,maxValue } from "vuelidate/lib/validators";
import {validDate,notContainsHtmlTags} from "@/validation/customValidators";
//////////////////////////////////////////////////////////
import moment from 'moment';
///////////////////////////////////////
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
      const {form,recall,summery} = this.generalObject
      return {form,recall,summery}
    },
    ophthalmicObject() {
      return Object.assign(this.$store.getters["detailsOphthalmic/ophthalmic/getOphthalmicObject"],this.generalObjectModified);
    },
  },
  // computed: {
  //   ophthalmicObject() {
  //     return this.$store.getters["ophthalmic/getOphthalmicObject"];
  //   },
  // },
  validations: {
    ophthalmicObject: {
      form: {
        maxLength: maxLength(20),
      },
      recall: {
        
      },
      summery: {},
      chiefComplaint: {
        reasonForVisit: {
          lastEyeExam: {
            validDate(value) {
              return validDate(value);
            },
          },
          reasons:{
            maxLength: maxLength(2),
          }
        },
        chiefComplaint: {
          complaints:{
            maxLength: maxLength(2),
          },
          note: {
            minLength: minLength(1),
            maxLength: maxLength(255),
            notContainsHtmlTags(value) {
              return notContainsHtmlTags(value);
            },
          },
        },
      },
      history: {
        medicalCondition: {
          other: {
            minLength: minLength(1),
            maxLength: maxLength(255),
            notContainsHtmlTags(value) {
              return notContainsHtmlTags(value);
            },
          },
          note: {
            minLength: minLength(1),
            maxLength: maxLength(255),
            notContainsHtmlTags(value) {
              return notContainsHtmlTags(value);
            },
          },
        },
        ocularMedication: {
          rx:{
            maxLength: maxLength(2)
          },
          note: {
            minLength: minLength(1),
            maxLength: maxLength(255),
            notContainsHtmlTags(value) {
              return notContainsHtmlTags(value);
            },
          },
        },
        ocularHistory: {
          conditions:{
            maxLength: maxLength(2)
          },
          note: {
            minLength: minLength(1),
            maxLength: maxLength(255),
            notContainsHtmlTags(value) {
              return notContainsHtmlTags(value);
            },
          },
        },
        clHabits: {
          habits:{ 
            maxLength: maxLength(2)
          },
          typeReplacement:{
            maxLength: maxLength(2)
          },
          note: {
            minLength: minLength(1),
            maxLength: maxLength(255),
            notContainsHtmlTags(value) {
              return notContainsHtmlTags(value);
            },
          },
        },
      },
      entranceTesting: {
        pupils: {
          od: {
            sizeInLight: {
              minLength: minLength(1),
              maxLength: maxLength(255),
              notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
              },            
            },
            sizeInDark: {
              minLength: minLength(1),
              maxLength: maxLength(255),
              notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
              },
            },
            shape: {
              selection :{},
              other:{
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              }
            },
            reaction: {
              minLength: minLength(1),
              maxLength: maxLength(255),
              notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
              },
            },
            mGunn: {
              minLength: minLength(1),
              maxLength: maxLength(255),
              notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
              },
            },
            accom: {
              selection:{},
              other:{
                  minLength: minLength(1),
                  maxLength: maxLength(255),
                  notContainsHtmlTags(value) {
                    return notContainsHtmlTags(value);
                  },
              }
            },
            diagnose:{
              selection:{},
                other:{
                    minLength: minLength(1),
                    maxLength: maxLength(255),
                    notContainsHtmlTags(value) {
                      return notContainsHtmlTags(value);
                    },
              }
            },
          },
          os: {
            sizeInLight: {
              minLength: minLength(1),
              maxLength: maxLength(255),
              notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
              },            
            },
            sizeInDark: {
              minLength: minLength(1),
              maxLength: maxLength(255),
              notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
              },
            },
            shape: {
              selection :{},
              other:{
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              }
            },
            reaction: {
              minLength: minLength(1),
              maxLength: maxLength(255),
              notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
              },
            },
            mGunn: {
              minLength: minLength(1),
              maxLength: maxLength(255),
              notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
              },
            },
            accom:{
              selection:{},
                other:{
                    minLength: minLength(1),
                    maxLength: maxLength(255),
                    notContainsHtmlTags(value) {
                      return notContainsHtmlTags(value);
                    },
              }
            },
            diagnose:{
              selection:{},
                other:{
                    minLength: minLength(1),
                    maxLength: maxLength(255),
                    notContainsHtmlTags(value) {
                      return notContainsHtmlTags(value);
                    },
              }
            },
          },
          note: {
            minLength: minLength(1),
            maxLength: maxLength(255),
            notContainsHtmlTags(value) {
              return notContainsHtmlTags(value);
            },
          },
        },
        dominance: {
          eyes:{ 
            maxLength: maxLength(2)
          },
          note:{
            minLength: minLength(1),
            maxLength: maxLength(255),
            notContainsHtmlTags(value) {
              return notContainsHtmlTags(value);
            },
          },
        },
        eom: {
          extraOcularMotilities: {
            od: {
              selection:{},
              other: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                }
              }
            },
            os: {
              selection:{},
              other: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                }
              }
            },
          },
          npc: {
            npcBreak: {
              minLength: minLength(1),
              maxLength: maxLength(255),
              notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
              },
            },
            npcRecovery: {
              minLength: minLength(1),
              maxLength: maxLength(255),
              notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
              },
            },
          },
          broadHTest: {
            od: {
              sr: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
              lr: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
              ir: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
              io: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
              mr: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
              so: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
            },
            os: {
              sr: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
              lr: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
              ir: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
              io: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
              mr: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
              so: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
            },
          },
          note: {
            minLength: minLength(1),
            maxLength: maxLength(255),
            notContainsHtmlTags(value) {
              return notContainsHtmlTags(value);
            },
          },
        },
        coverTest: {
          hirschbergTest: {
            os: {
              selection:{},
              other: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
            },
            od: {
              selection:{},
              other: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
            },
          },
          brucknerTest: {
            os: {
              selection:{},
              other: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
            },
            od: {
              selection:{},
              other: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
            },
          },
          unilateralCoverTest: {
            distantVision: {
              uLateral: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
              uVertical: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
            },
            nearVision: {
              uLateral: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
              uVertical: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
            },
          },
          alternatingCoverTest: {
            distantVision: {
              lateral: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
              vertical: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
            },
            nearVision: {
              lateral: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
              vertical: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
            },
          },
          note: {
            minLength: minLength(1),
            maxLength: maxLength(255),
            notContainsHtmlTags(value) {
              return notContainsHtmlTags(value);
            },
          },
        },
        visualField: {
          confrontation: {
            os: {
              selection:{},
              other: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
            },
            od: {
              selection:{},
              other: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
            },
          },
          autoPerimetry: {
            instrument: {
              selection:{},
              other: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
            },
            od: {
              selection:{},
              other: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
            },
            os: {
              selection:{},
              other: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
            },
          },
          tangentScreen: {
            scale:{
              selection:{},
              other: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
            }
          },
          note: {
            minLength: minLength(1),
            maxLength: maxLength(255),
            notContainsHtmlTags(value) {
              return notContainsHtmlTags(value);
            },
          },
        },
        colourVision: {
          tests:{
            maxLength: maxLength(2)
          },
          note: {
            minLength: minLength(1),
            maxLength: maxLength(255),
            notContainsHtmlTags(value) {
              return notContainsHtmlTags(value);
            },
          }
        },
        stereopsis: {
          stereoFly: {
            selection:{
              // required: requiredIf(function () {
              //   return !this.stereoFly.other;
              // }),
            },
            other: {
              minLength: minLength(1),
              maxLength: maxLength(255),
              notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
              },
            },
          },
          brewster: {
            selection:{},
            other: {
              minLength: minLength(1),
              maxLength: maxLength(255),
              notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
              },
            },
          },
          circles: {
            selection:{},
            other: {
              minLength: minLength(1),
              maxLength: maxLength(255),
              notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
              },
            },
          },
          forms: {
            selection:{},
            other: {
              minLength: minLength(1),
              maxLength: maxLength(255),
              notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
              },
            },
          },
          animals: {
            selection:{},
            other: {
              minLength: minLength(1),
              maxLength: maxLength(255),
              notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
              },
            },
          },
          note: {
            minLength: minLength(1),
            maxLength: maxLength(255),
            notContainsHtmlTags(value) {
              return notContainsHtmlTags(value);
            },
          },
        },
      },
      visionTest: {
        overRefraction:{
          near: {
            od: {
              spherical: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },            
              },
              cylindrical: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
              axis: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
              prism: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
              dva: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
              add: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
              nva:{
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              }
            },
            os: {
              spherical: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },            
              },
              cylindrical: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
              axis: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
              prism: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
              dva: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
              add: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
              nva:{
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              }
            },
            ou: {
              dva: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
              nva: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
            }
          },
          distant: {
            od: {
              spherical: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },            
              },
              cylindrical: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
              axis: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
              prism: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
              dva: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
              add: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
              nva:{
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              }
            },
            os: {
              spherical: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },            
              },
              cylindrical: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
              axis: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
              prism: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
              dva: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
              add: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
              nva:{
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              }
            },
            ou: {
              dva: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
              nva: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
            }
          },
          note: {
            minLength: minLength(1),
            maxLength: maxLength(255),
            notContainsHtmlTags(value) {
              return notContainsHtmlTags(value);
            }
          }
        },
        refraction: {
          type: {
            selection :{},
            other: {
              minLength: minLength(1),
              maxLength: maxLength(255),
              notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
              },
            },
          },
          near: {
            od: {
              spherical: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },            
              },
              cylindrical: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
              axis: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
              prism: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
              dva: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
              add: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
              nva:{
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              }
            },
            os: {
              spherical: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },            
              },
              cylindrical: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
              axis: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
              prism: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
              dva: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
              add: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
              nva:{
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              }
            },
            ou: {
              dva: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
              nva: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
            }
          },
          distant: {
            od: {
              spherical: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },            
              },
              cylindrical: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
              axis: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
              prism: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
              dva: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
              add: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
              nva:{
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              }
            },
            os: {
              spherical: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },            
              },
              cylindrical: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
              axis: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
              prism: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
              dva: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
              add: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
              nva:{
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              }
            },
            ou: {
              dva: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
              nva: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
            }
          },
          note: {
            minLength: minLength(1),
            maxLength: maxLength(255),
            notContainsHtmlTags(value) {
              return notContainsHtmlTags(value);
            }
          }
        },
        binoculor: {
          phorias: {
            distantVision: {
              h: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
              v: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
            },
            nearVision: {
              h: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
              v: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
            },
          },
          pursuits: {
            od: {
              selection: {},
              other: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
            },
            os: {
              selection: {},
              other: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
            },
          },
          saccades: {
            od: {
              selection: {},
              other: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
            },
            os: {
              selection: {},
              other: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
            },
          },
          vergenceBi: {
            distantVision: {
              visionBlur: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
              visionBreak: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
              visionRecov: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
            },
            nearVision: {
              visionBlur: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
              visionBreak: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
              visionRecov: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
            },
          },
          vergenceBo: {
            distantVision: {
              visionBreak: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
              visionBlur: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
              visionRecov: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
            },
            nearVision: {
              visionBlur: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
              visionBreak: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
              visionRecov: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
            },
          },
          vergenceBu: {
            distantVision: {
              visionBlur: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
              visionBreak: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
              visionRecov: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
            },
            nearVision: {
              visionBlur: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
              visionBreak: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
              visionRecov: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
            },
          },
          vergenceBd: {
            distantVision: {
              visionBlur: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
              visionBreak: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
              visionRecov: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
            },
            nearVision: {
              visionBlur: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
              visionBreak: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
              visionRecov: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
            },
          },
          accomodation: {
            ampOd: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
            ampOs: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
            acaRatio: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
            nra: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
            pra: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
          },
          note: {
            minLength: minLength(1),
            maxLength: maxLength(255),
            notContainsHtmlTags(value) {
              return notContainsHtmlTags(value);
            },
          },
        },
        vaCc: {
          aide: {
            minLength: minLength(1),
            maxLength: maxLength(255),
            notContainsHtmlTags(value) {
              return notContainsHtmlTags(value);
            },
          },
          scale: {
            minLength: minLength(1),
            maxLength: maxLength(255),
            notContainsHtmlTags(value) {
              return notContainsHtmlTags(value);
            },
          },
          od: {
            dva: {
              minLength: minLength(1),
              maxLength: maxLength(255),
              notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
              },
            },
            ph: {
              minLength: minLength(1),
              maxLength: maxLength(255),
              notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
              },
            },
            nva: {
              minLength: minLength(1),
              maxLength: maxLength(255),
              notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
              },
            },
          },
          os: {
            dva: {
              minLength: minLength(1),
              maxLength: maxLength(255),
              notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
              },
            },
            ph: {
              minLength: minLength(1),
              maxLength: maxLength(255),
              notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
              },
            },
            nva: {
              minLength: minLength(1),
              maxLength: maxLength(255),
              notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
              },
            },
          },
          ou: {
            dva: {
              minLength: minLength(1),
              maxLength: maxLength(255),
              notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
              },
            },
            nva: {
              minLength: minLength(1),
              maxLength: maxLength(255),
              notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
              },
            },
          },
          note: {
            minLength: minLength(1),
            maxLength: maxLength(255),
            notContainsHtmlTags(value) {
              return notContainsHtmlTags(value);
            },
          },
        },
        vaSc: {
          scale: {
            minLength: minLength(1),
            maxLength: maxLength(255),
            notContainsHtmlTags(value) {
              return notContainsHtmlTags(value);
            },
          },
          od: {
            dva: {
              minLength: minLength(1),
              maxLength: maxLength(255),
              notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
              },
            },
            ph: {
              minLength: minLength(1),
              maxLength: maxLength(255),
              notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
              },
            },
            nva: {
              minLength: minLength(1),
              maxLength: maxLength(255),
              notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
              },
            },
          },
          os: {
            dva: {
              minLength: minLength(1),
              maxLength: maxLength(255),
              notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
              },
            },
            ph: {
              minLength: minLength(1),
              maxLength: maxLength(255),
              notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
              },
            },
            nva: {
              minLength: minLength(1),
              maxLength: maxLength(255),
              notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
              },
            },
          },
          ou: {
            dva: {
              minLength: minLength(1),
              maxLength: maxLength(255),
              notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
              },
            },
            nva: {
              minLength: minLength(1),
              maxLength: maxLength(255),
              notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
              },
            },
          },
          note: {
            minLength: minLength(1),
            maxLength: maxLength(255),
            notContainsHtmlTags(value) {
              return notContainsHtmlTags(value);
            },
          },
        },
        lensometry: {
          lensType: {
            selection: {},
            other: {
              minLength: minLength(1),
              maxLength: maxLength(255),
              notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
              },
            },
          },
          od: {
            spherical: {
              minLength: minLength(1),
              maxLength: maxLength(255),
              notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
              },            
            },
            cylindrical: {
              minLength: minLength(1),
              maxLength: maxLength(255),
              notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
              },
            },
            axis: {
              minLength: minLength(1),
              maxLength: maxLength(255),
              notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
              },
            },
            add: {
              minLength: minLength(1),
              maxLength: maxLength(255),
              notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
              },
            }
          },
          os: {
            spherical: {
              minLength: minLength(1),
              maxLength: maxLength(255),
              notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
              },            
            },
            cylindrical: {
              minLength: minLength(1),
              maxLength: maxLength(255),
              notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
              },
            },
            axis: {
              minLength: minLength(1),
              maxLength: maxLength(255),
              notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
              },
            },
            add: {
              minLength: minLength(1),
              maxLength: maxLength(255),
              notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
              },
            }
          },
          note: {
            minLength: minLength(1),
            maxLength: maxLength(255),
            notContainsHtmlTags(value) {
              return notContainsHtmlTags(value);
            },
          },
        },
      },
      anteriorExam: {
        tonometry: {
          test: {
            selection: {},
            other: {
              minLength: minLength(1),
              maxLength: maxLength(255),
              notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
              },
            },
          },
          drug: {
            selection: {},
            other: {
              minLength: minLength(1),
              maxLength: maxLength(255),
              notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
              },
            },
          },
          
          time:{
            validDateTime: (value) => {
              if(value == null || value == ''){
                 return true;
                }
 
              else {
                return moment(value).isValid();
              }
          },
          },
          os: {
            tension: {
              minLength: minLength(1),
              maxLength: maxLength(255),
              notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
              },
            },
            pachCor: {
              minLength: minLength(1),
              maxLength: maxLength(255),
              notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
              },
            },
            adjTn: {
              minLength: minLength(1),
              maxLength: maxLength(255),
              notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
              },
            },
            pachymetry: {
              minLength: minLength(1),
              maxLength: maxLength(255),
              notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
              },
            },
          },
          od: {
            tension: {
              minLength: minLength(1),
              maxLength: maxLength(255),
              notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
              },
            },
            pachCor: {
              minLength: minLength(1),
              maxLength: maxLength(255),
              notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
              },
            },
            adjTn: {
              minLength: minLength(1),
              maxLength: maxLength(255),
              notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
              },
            },
            pachymetry: {
              minLength: minLength(1),
              maxLength: maxLength(255),
              notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
              },
            },
          },
          note: {
            minLength: minLength(1),
            maxLength: maxLength(255),
            notContainsHtmlTags(value) {
              return notContainsHtmlTags(value);
            },
          },
        },
        biomicroscopy: {
          od: {
            lid: {
              minLength: minLength(1),
              maxLength: maxLength(255),
              notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
              },
            },
            conjunctiva: {
              minLength: minLength(1),
              maxLength: maxLength(255),
              notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
              },
            },
            cornea: {
              minLength: minLength(1),
              maxLength: maxLength(255),
              notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
              },
            },
            ac: {
              minLength: minLength(1),
              maxLength: maxLength(255),
              notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
              },
            },
            viterous: {
              selection: {},
              other: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
            },
            iris: {
              selection: {},
              other: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
            },
            eyeColour: {
              selection: {},
              other: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
            },
            lens: {
              minLength: minLength(1),
              maxLength: maxLength(255),
              notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
              },
            },
            angle: {
              minLength: minLength(1),
              maxLength: maxLength(255),
              notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
              },
            },
            tbut: {
              minLength: minLength(1),
              maxLength: maxLength(255),
              notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
              },
            },
            tvol: {
              minLength: minLength(1),
              maxLength: maxLength(255),
              notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
              },
            },
          },
          os: {
            lid: {
              minLength: minLength(1),
              maxLength: maxLength(255),
              notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
              },
            },
            conjunctiva: {
              minLength: minLength(1),
              maxLength: maxLength(255),
              notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
              },
            },
            cornea: {
              minLength: minLength(1),
              maxLength: maxLength(255),
              notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
              },
            },
            ac: {
              minLength: minLength(1),
              maxLength: maxLength(255),
              notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
              },
            },
            viterous: {
              selection: {},
              other: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
            },
            iris: {
              selection: {},
              other: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
            },
            eyeColour: {
              selection: {},
              other: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
            },
            lens: {
              minLength: minLength(1),
              maxLength: maxLength(255),
              notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
              },
            },
            angle: {
              minLength: minLength(1),
              maxLength: maxLength(255),
              notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
              },
            },
            tbut: {
              minLength: minLength(1),
              maxLength: maxLength(255),
              notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
              },
            },
            tvol: {
              minLength: minLength(1),
              maxLength: maxLength(255),
              notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
              },
            },
          },
          note: {
            minLength: minLength(1),
            maxLength: maxLength(255),
            notContainsHtmlTags(value) {
              return notContainsHtmlTags(value);
            },
          },
        },
        gonioscopy: {
          od: {
            box: {
              north: {
                selection: {},
                number: {
                  numeric,
                  maxValue:maxValue(100),
                },
              },
              south: {
                selection: {},
                number: {
                  numeric,
                  maxValue:maxValue(100),
                },
              },
              east: {
                selection: {},
                number: {
                  numeric,
                  maxValue:maxValue(100),
                },
              },
              west: {
                selection: {},
                number: {
                  numeric,
                  maxValue:maxValue(100),
                },
              },
            },
            iris: {
              selection: {},
              other: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
            },
            lens: {
              selection: {},
              other: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
            },
          },
          os: {
            box: {
              north: {
                selection: {},
                number: {
                  numeric,
                  maxValue:maxValue(100),
                },
              },
              south: {
                selection: {},
                number: {
                  numeric,
                  maxValue:maxValue(100),
                },
              },
              east: {
                selection: {},
                number: {
                  numeric,
                  maxValue:maxValue(100),
                },
              },
              west: {
                selection: {},
                number: {
                  numeric,
                  maxValue:maxValue(100),
                },
              },
            },
            iris:{
              selection: {},
              other: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
            },
            lens: {
              selection: {},
              other: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
            },
          },
          note: {
            minLength: minLength(1),
            maxLength: maxLength(255),
            notContainsHtmlTags(value) {
              return notContainsHtmlTags(value);
            },
          },
        },
      },
      posteriorExam: {
        fundusExam: {
          ophthalmoscopy: {
            selection:{},
            other: {
              minLength: minLength(1),
              maxLength: maxLength(255),
              notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
              },
            },
          },
          od: {
            pupillaryReflex: {
              selection:{},
              other: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
            },
            vitreous: {
              selection:{},
              other: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
            },
            vessels: {
              selection:{},
              other: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
            },
            macula: {
              selection:{},
              other: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
            },
            retina: {
              selection:{},
              other: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
            },
            posteriorPole: {
              selection:{},
              other: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
            },
            periphery: {
              selection:{},
              other: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
            },
            opticDisc: {
              minLength: minLength(1),
              maxLength: maxLength(255),
              notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
              },
            },
            cdRatio: {
              minLength: minLength(1),
              maxLength: maxLength(255),
              notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
              },
            },
          },
          os: {
            pupillaryReflex: {
              selection:{},
              other: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
            },
            vitreous: {
              selection:{},
              other: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
            },
            vessels: {
              selection:{},
              other: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
            },
            macula: {
              selection:{},
              other: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
            },
            retina: {
              selection:{},
              other: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
            },
            posteriorPole: {
              selection:{},
              other: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
            },
            periphery: {
              selection:{},
              other: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
            },
            opticDisc: {
              minLength: minLength(1),
              maxLength: maxLength(255),
              notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
              },
            },
            cdRatio: {
              minLength: minLength(1),
              maxLength: maxLength(255),
              notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
              },
            },
          },
          lens: {
            minLength: minLength(1),
            maxLength: maxLength(255),
            notContainsHtmlTags(value) {
              return notContainsHtmlTags(value);
            },
          },
          note: {
            minLength: minLength(1),
            maxLength: maxLength(255),
            notContainsHtmlTags(value) {
              return notContainsHtmlTags(value);
            },
          },

        },
        dilation: {
          drug: {
            selection:{},
            other: {  
              minLength: minLength(1),
              maxLength: maxLength(255),
              notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
              },
            },
          },
          time:{ 
            validTime: (value) => {
                if(value == null || value == ''){
                   return true;
                  }
   
                else {
                   return moment(value,'HH:mm',false).isValid();
                }
            },
          },
          quantity: {
            minLength: minLength(1),
            maxLength: maxLength(255),
            notContainsHtmlTags(value) {
              return notContainsHtmlTags(value);
            },
          },
          note: {
            minLength: minLength(1),
            maxLength: maxLength(255),
            notContainsHtmlTags(value) {
              return notContainsHtmlTags(value);
            },
          },
        },
      },
      contactLength: {
        fitting: {
          expirationDate: {
            validDate(value) {
              return validDate(value);
            },
          },
          type: {
            od: {
              manufacturer: {
                selection:{},
                other: {
                  minLength: minLength(1),
                  maxLength: maxLength(255),
                  notContainsHtmlTags(value) {
                    return notContainsHtmlTags(value);
                  },
                },
              },
              brand: {
                selection:{},
                other: {
                  minLength: minLength(1),
                  maxLength: maxLength(255),
                  notContainsHtmlTags(value) {
                    return notContainsHtmlTags(value);
                  },
                },
              },
              design: {
                selection:{},
                other: {
                  minLength: minLength(1),
                  maxLength: maxLength(255),
                  notContainsHtmlTags(value) {
                    return notContainsHtmlTags(value);
                  },
                },
              },
              qtyBox: {
                selection:{},
                other: {
                  minLength: minLength(1),
                  maxLength: maxLength(255),
                  notContainsHtmlTags(value) {
                    return notContainsHtmlTags(value);
                  },
                },
              },
              type: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
              material: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
              wearingPeriod: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
              replacement: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
              comfort: {
                selection:{},
                other: {
                  minLength: minLength(1),
                  maxLength: maxLength(255),
                  notContainsHtmlTags(value) {
                    return notContainsHtmlTags(value);
                  },
                },
              },
              vision: {
                selection:{},
                other: {
                  minLength: minLength(1),
                  maxLength: maxLength(255),
                  notContainsHtmlTags(value) {
                    return notContainsHtmlTags(value);
                  },
                },
              },
              rotation: {
                selection:{},
                other: {
                  minLength: minLength(1),
                  maxLength: maxLength(255),
                  notContainsHtmlTags(value) {
                    return notContainsHtmlTags(value);
                  },
                },
              },
              movement: {
                selection:{},
                other: {
                  minLength: minLength(1),
                  maxLength: maxLength(255),
                  notContainsHtmlTags(value) {
                    return notContainsHtmlTags(value);
                  },
                },
              },
              centration: {
                selection:{},
                other: {
                  minLength: minLength(1),
                  maxLength: maxLength(255),
                  notContainsHtmlTags(value) {
                    return notContainsHtmlTags(value);
                  },
                },
              },
              tear: {
                selection:{},
                other: {
                  minLength: minLength(1),
                  maxLength: maxLength(255),
                  notContainsHtmlTags(value) {
                    return notContainsHtmlTags(value);
                  },
                },
              },
              sclera: {
                selection:{},
                other: {
                  minLength: minLength(1),
                  maxLength: maxLength(255),
                  notContainsHtmlTags(value) {
                    return notContainsHtmlTags(value);
                  },
                },
              },
              limbal: {
                selection:{},
                other: {
                  minLength: minLength(1),
                  maxLength: maxLength(255),
                  notContainsHtmlTags(value) {
                    return notContainsHtmlTags(value);
                  },
                },
              },
              cornea: {
                selection:{},
                other: {
                  minLength: minLength(1),
                  maxLength: maxLength(255),
                  notContainsHtmlTags(value) {
                    return notContainsHtmlTags(value);
                  },
                },
              },
              lid: {
                selection:{},
                other: {
                  minLength: minLength(1),
                  maxLength: maxLength(255),
                  notContainsHtmlTags(value) {
                    return notContainsHtmlTags(value);
                  },
                },
              },
            },
            os: {
              manufacturer: {
                selection:{},
                other: {
                  minLength: minLength(1),
                  maxLength: maxLength(255),
                  notContainsHtmlTags(value) {
                    return notContainsHtmlTags(value);
                  },
                },
              },
              brand: {
                selection:{},
                other: {
                  minLength: minLength(1),
                  maxLength: maxLength(255),
                  notContainsHtmlTags(value) {
                    return notContainsHtmlTags(value);
                  },
                },
              },
              design: {
                selection:{},
                other: {
                  minLength: minLength(1),
                  maxLength: maxLength(255),
                  notContainsHtmlTags(value) {
                    return notContainsHtmlTags(value);
                  },
                },
              },
              qtyBox: {
                selection:{},
                other: {
                  minLength: minLength(1),
                  maxLength: maxLength(255),
                  notContainsHtmlTags(value) {
                    return notContainsHtmlTags(value);
                  },
                },
              },
              type: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
              material: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
              wearingPeriod: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
              replacement: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
              comfort: {
                selection:{},
                other: {
                  minLength: minLength(1),
                  maxLength: maxLength(255),
                  notContainsHtmlTags(value) {
                    return notContainsHtmlTags(value);
                  },
                },
              },
              vision: {
                selection:{},
                other: {
                  minLength: minLength(1),
                  maxLength: maxLength(255),
                  notContainsHtmlTags(value) {
                    return notContainsHtmlTags(value);
                  },
                },
              },
              rotation: {
                selection:{},
                other: {
                  minLength: minLength(1),
                  maxLength: maxLength(255),
                  notContainsHtmlTags(value) {
                    return notContainsHtmlTags(value);
                  },
                },
              },
              movement: {
                selection:{},
                other: {
                  minLength: minLength(1),
                  maxLength: maxLength(255),
                  notContainsHtmlTags(value) {
                    return notContainsHtmlTags(value);
                  },
                },
              },
              centration: {
                selection:{},
                other: {
                  minLength: minLength(1),
                  maxLength: maxLength(255),
                  notContainsHtmlTags(value) {
                    return notContainsHtmlTags(value);
                  },
                },
              },
              tear: {
                selection:{},
                other: {
                  minLength: minLength(1),
                  maxLength: maxLength(255),
                  notContainsHtmlTags(value) {
                    return notContainsHtmlTags(value);
                  },
                },
              },
              sclera: {
                selection:{},
                other: {
                  minLength: minLength(1),
                  maxLength: maxLength(255),
                  notContainsHtmlTags(value) {
                    return notContainsHtmlTags(value);
                  },
                },
              },
              limbal: {
                selection:{},
                other: {
                  minLength: minLength(1),
                  maxLength: maxLength(255),
                  notContainsHtmlTags(value) {
                    return notContainsHtmlTags(value);
                  },
                },
              },
              cornea: {
                selection:{},
                other: {
                  minLength: minLength(1),
                  maxLength: maxLength(255),
                  notContainsHtmlTags(value) {
                    return notContainsHtmlTags(value);
                  },
                },
              },
              lid: {
                selection:{},
                other: {
                  minLength: minLength(1),
                  maxLength: maxLength(255),
                  notContainsHtmlTags(value) {
                    return notContainsHtmlTags(value);
                  },
                },
              },
            },
          },
          measurements: {
            near: {
              od: {
                spherical: {
                  minLength: minLength(1),
                  maxLength: maxLength(255),
                  notContainsHtmlTags(value) {
                    return notContainsHtmlTags(value);
                  },            
                },
                cylindrical: {
                  minLength: minLength(1),
                  maxLength: maxLength(255),
                  notContainsHtmlTags(value) {
                    return notContainsHtmlTags(value);
                  },
                },
                axis: {
                  minLength: minLength(1),
                  maxLength: maxLength(255),
                  notContainsHtmlTags(value) {
                    return notContainsHtmlTags(value);
                  },
                },
                prism: {
                  minLength: minLength(1),
                  maxLength: maxLength(255),
                  notContainsHtmlTags(value) {
                    return notContainsHtmlTags(value);
                  },
                },
                dva: {
                  minLength: minLength(1),
                  maxLength: maxLength(255),
                  notContainsHtmlTags(value) {
                    return notContainsHtmlTags(value);
                  },
                },
                add: {
                  minLength: minLength(1),
                  maxLength: maxLength(255),
                  notContainsHtmlTags(value) {
                    return notContainsHtmlTags(value);
                  },
                },
                nva:{
                  minLength: minLength(1),
                  maxLength: maxLength(255),
                  notContainsHtmlTags(value) {
                    return notContainsHtmlTags(value);
                  },
                },
                bc:{
                  minLength: minLength(1),
                  maxLength: maxLength(255),
                  notContainsHtmlTags(value) {
                    return notContainsHtmlTags(value);
                  },
                },
                dia:{
                  minLength: minLength(1),
                  maxLength: maxLength(255),
                  notContainsHtmlTags(value) {
                    return notContainsHtmlTags(value);
                  },
                },
              },
              os: {
                spherical: {
                  minLength: minLength(1),
                  maxLength: maxLength(255),
                  notContainsHtmlTags(value) {
                    return notContainsHtmlTags(value);
                  },            
                },
                cylindrical: {
                  minLength: minLength(1),
                  maxLength: maxLength(255),
                  notContainsHtmlTags(value) {
                    return notContainsHtmlTags(value);
                  },
                },
                axis: {
                  minLength: minLength(1),
                  maxLength: maxLength(255),
                  notContainsHtmlTags(value) {
                    return notContainsHtmlTags(value);
                  },
                },
                prism: {
                  minLength: minLength(1),
                  maxLength: maxLength(255),
                  notContainsHtmlTags(value) {
                    return notContainsHtmlTags(value);
                  },
                },
                dva: {
                  minLength: minLength(1),
                  maxLength: maxLength(255),
                  notContainsHtmlTags(value) {
                    return notContainsHtmlTags(value);
                  },
                },
                add: {
                  minLength: minLength(1),
                  maxLength: maxLength(255),
                  notContainsHtmlTags(value) {
                    return notContainsHtmlTags(value);
                  },
                },
                nva:{
                  minLength: minLength(1),
                  maxLength: maxLength(255),
                  notContainsHtmlTags(value) {
                    return notContainsHtmlTags(value);
                  },
                },
                bc:{
                  minLength: minLength(1),
                  maxLength: maxLength(255),
                  notContainsHtmlTags(value) {
                    return notContainsHtmlTags(value);
                  },
                },
                dia:{
                  minLength: minLength(1),
                  maxLength: maxLength(255),
                  notContainsHtmlTags(value) {
                    return notContainsHtmlTags(value);
                  },
                },
              },
              ou: {
                dva: {
                  minLength: minLength(1),
                  maxLength: maxLength(255),
                  notContainsHtmlTags(value) {
                    return notContainsHtmlTags(value);
                  },
                },
                nva: {
                  minLength: minLength(1),
                  maxLength: maxLength(255),
                  notContainsHtmlTags(value) {
                    return notContainsHtmlTags(value);
                  },
                },
              },
              // solution: {
              //   selection:{},
              //   other: {
              //     minLength: minLength(1),
              //     maxLength: maxLength(255),
              //     notContainsHtmlTags(value) {
              //       return notContainsHtmlTags(value);
              //     },
              //   },
              // },
            },
            distant: {
              od: {
                spherical: {
                  minLength: minLength(1),
                  maxLength: maxLength(255),
                  notContainsHtmlTags(value) {
                    return notContainsHtmlTags(value);
                  },            
                },
                cylindrical: {
                  minLength: minLength(1),
                  maxLength: maxLength(255),
                  notContainsHtmlTags(value) {
                    return notContainsHtmlTags(value);
                  },
                },
                axis: {
                  minLength: minLength(1),
                  maxLength: maxLength(255),
                  notContainsHtmlTags(value) {
                    return notContainsHtmlTags(value);
                  },
                },
                prism: {
                  minLength: minLength(1),
                  maxLength: maxLength(255),
                  notContainsHtmlTags(value) {
                    return notContainsHtmlTags(value);
                  },
                },
                dva: {
                  minLength: minLength(1),
                  maxLength: maxLength(255),
                  notContainsHtmlTags(value) {
                    return notContainsHtmlTags(value);
                  },
                },
                add: {
                  minLength: minLength(1),
                  maxLength: maxLength(255),
                  notContainsHtmlTags(value) {
                    return notContainsHtmlTags(value);
                  },
                },
                nva:{
                  minLength: minLength(1),
                  maxLength: maxLength(255),
                  notContainsHtmlTags(value) {
                    return notContainsHtmlTags(value);
                  },
                },
                bc:{
                  minLength: minLength(1),
                  maxLength: maxLength(255),
                  notContainsHtmlTags(value) {
                    return notContainsHtmlTags(value);
                  },
                },
                dia:{
                  minLength: minLength(1),
                  maxLength: maxLength(255),
                  notContainsHtmlTags(value) {
                    return notContainsHtmlTags(value);
                  },
                },
              },
              os: {
                spherical: {
                  minLength: minLength(1),
                  maxLength: maxLength(255),
                  notContainsHtmlTags(value) {
                    return notContainsHtmlTags(value);
                  },            
                },
                cylindrical: {
                  minLength: minLength(1),
                  maxLength: maxLength(255),
                  notContainsHtmlTags(value) {
                    return notContainsHtmlTags(value);
                  },
                },
                axis: {
                  minLength: minLength(1),
                  maxLength: maxLength(255),
                  notContainsHtmlTags(value) {
                    return notContainsHtmlTags(value);
                  },
                },
                prism: {
                  minLength: minLength(1),
                  maxLength: maxLength(255),
                  notContainsHtmlTags(value) {
                    return notContainsHtmlTags(value);
                  },
                },
                dva: {
                  minLength: minLength(1),
                  maxLength: maxLength(255),
                  notContainsHtmlTags(value) {
                    return notContainsHtmlTags(value);
                  },
                },
                add: {
                  minLength: minLength(1),
                  maxLength: maxLength(255),
                  notContainsHtmlTags(value) {
                    return notContainsHtmlTags(value);
                  },
                },
                nva:{
                  minLength: minLength(1),
                  maxLength: maxLength(255),
                  notContainsHtmlTags(value) {
                    return notContainsHtmlTags(value);
                  },
                },
                bc:{
                  minLength: minLength(1),
                  maxLength: maxLength(255),
                  notContainsHtmlTags(value) {
                    return notContainsHtmlTags(value);
                  },
                },
                dia:{
                  minLength: minLength(1),
                  maxLength: maxLength(255),
                  notContainsHtmlTags(value) {
                    return notContainsHtmlTags(value);
                  },
                },
              },
              ou: {
                dva: {
                  minLength: minLength(1),
                  maxLength: maxLength(255),
                  notContainsHtmlTags(value) {
                    return notContainsHtmlTags(value);
                  },
                },
                nva: {
                  minLength: minLength(1),
                  maxLength: maxLength(255),
                  notContainsHtmlTags(value) {
                    return notContainsHtmlTags(value);
                  },
                },
              },
              // solution: {
              //   selection:{},
              //   other: {
              //     minLength: minLength(1),
              //     maxLength: maxLength(255),
              //     notContainsHtmlTags(value) {
              //       return notContainsHtmlTags(value);
              //     },
              //   },
              // },
            },
          },
          note: {
            minLength: minLength(1),
            maxLength: maxLength(255),
            notContainsHtmlTags(value) {
              return notContainsHtmlTags(value);
            },
          },
        },
        keratometry: {
            os: {
              powerH:{
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
              powerV:{
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
              meridian:{
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
              },
            },
            },
            od: {
              powerH:{
              minLength: minLength(1),
              maxLength: maxLength(255),
              notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
              },
            },
              powerV:{
              minLength: minLength(1),
              maxLength: maxLength(255),
              notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
              },
            },
              meridian:{
              minLength: minLength(1),
              maxLength: maxLength(255),
              notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
              },
            },
            },
            note: {
              minLength: minLength(1),
              maxLength: maxLength(255),
              notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
              },
            },
        },
      },
      // form: {
      //   note: {
      //     minLength: minLength(1),
      //     maxLength: maxLength(255),
      //     notContainsHtmlTags(val) {
      //       if (!val) return true;
      //       return notContainsHtmlTags(val);
      //     },
      //   },
      // },
      finalRx: {
        measurements: {
          near: {
            od: {
              spherical: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },            
              },
              cylindrical: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
              axis: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
              prism: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
              dva: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
              add: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
              nva:{
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
            },
            os: {
              spherical: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },            
              },
              cylindrical: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
              axis: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
              prism: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
              dva: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
              add: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
              nva:{
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
            },
            ou: {
              dva: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
              nva: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
            },
          },
          distant: {
            od: {
              spherical: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },            
              },
              cylindrical: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
              axis: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
              prism: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
              dva: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
              add: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
              nva:{
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
            },
            os: {
              spherical: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },            
              },
              cylindrical: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
              axis: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
              prism: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
              dva: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
              add: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
              nva:{
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
            },
            ou: {
              dva: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
              nva: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                },
              },
            },
          },
          note: {
            minLength: minLength(1),
            maxLength: maxLength(255),
            notContainsHtmlTags(value) {
              return notContainsHtmlTags(value);
            },
          },
        },
        pd: {
          od: {
            spherical: {
              minLength: minLength(1),
              maxLength: maxLength(255),
              notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
              },            
            },
            cylindrical: {
              minLength: minLength(1),
              maxLength: maxLength(255),
              notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
              },
            },
          },          
          os: {
            spherical: {
              minLength: minLength(1),
              maxLength: maxLength(255),
              notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
              },            
            },
            cylindrical: {
              minLength: minLength(1),
              maxLength: maxLength(255),
              notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
              },
            },
          },          
          note: {
            minLength: minLength(1),
            maxLength: maxLength(255),
            notContainsHtmlTags(value) {
              return notContainsHtmlTags(value);
            },
          },
        },
        recommendation: {
          od: {
            spherical: {
              minLength: minLength(1),
              maxLength: maxLength(255),
              notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
              },            
            },
            cylindrical: {
              minLength: minLength(1),
              maxLength: maxLength(255),
              notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
              },
            },
            axis: {
              minLength: minLength(1),
              maxLength: maxLength(255),
              notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
              },
            },
            add: {
              minLength: minLength(1),
              maxLength: maxLength(255),
              notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
              },
            },
          },          
          os: {
            spherical: {
              minLength: minLength(1),
              maxLength: maxLength(255),
              notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
              },            
            },
            cylindrical: {
              minLength: minLength(1),
              maxLength: maxLength(255),
              notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
              },
            },
            axis: {
              minLength: minLength(1),
              maxLength: maxLength(255),
              notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
              },
            },
            add: {
              minLength: minLength(1),
              maxLength: maxLength(255),
              notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
              },
            },
          },            
          lensType: {
            selection:{},
            other: {
              minLength: minLength(1),
              maxLength: maxLength(255),
              notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
              },
            },
          },
          note: {
            minLength: minLength(1),
            maxLength: maxLength(255),
            notContainsHtmlTags(value) {
              return notContainsHtmlTags(value);
            },
          },
        },
      },
      medicalRx: {
        maxLength: maxLength(2),
    
      },
      billing:{},

    },
  },
};
