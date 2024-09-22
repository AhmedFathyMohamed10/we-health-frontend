////////////////////////////////////////////////////////
import {minLength,maxLength,decimal,numeric} from "vuelidate/lib/validators";
import {validDate,notContainsHtmlTags} from "@/validation/customValidators";
//////////////////////////////////////////////////////////
export default {
  data() {
    return {
    };
  }, 
  computed: {
    ophthalmicObject() {
      return this.$store.getters["ophthalmic/getOphthalmicObject"];
    },
  },
  validations: {
    ophthalmicObject: {
      chiefComplaint: {
        reasonForVisit: {
          lastEyeExam: {
            validDate(value) {
              return validDate(value);
            },
          },
        },
        chiefComplaint: {
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
          note: {
            minLength: minLength(1),
            maxLength: maxLength(255),
            notContainsHtmlTags(value) {
              return notContainsHtmlTags(value);
            },
          },
        },
        ocularMedication: {
          note: {
            minLength: minLength(1),
            maxLength: maxLength(255),
            notContainsHtmlTags(value) {
              return notContainsHtmlTags(value);
            },
          },
        },
        ocularHistory: {
          note: {
            minLength: minLength(1),
            maxLength: maxLength(255),
            notContainsHtmlTags(value) {
              return notContainsHtmlTags(value);
            },
          },
        },
        clHabits: {
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
          eyes:{},
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
            selection:{},
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
      anteriorexam: {
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
          // time:{
          //     time(value){
          //         return time(value)
          //     },
          // },
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
                },
              },
              south: {
                selection: {},
                number: {
                  numeric,
                },
              },
              east: {
                selection: {},
                number: {
                  numeric,
                },
              },
              west: {
                selection: {},
                number: {
                  numeric,
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
                },
              },
              south: {
                selection: {},
                number: {
                  numeric,
                },
              },
              east: {
                selection: {},
                number: {
                  numeric,
                },
              },
              west: {
                selection: {},
                number: {
                  numeric,
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
          // time: "",
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
      form: {
        note: {
          minLength: minLength(1),
          maxLength: maxLength(255),
          notContainsHtmlTags(val) {
            if (!val) return true;
            return notContainsHtmlTags(val);
          },
        },
      },
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
        note: {
          minLength: minLength(1),
          maxLength: maxLength(255),
          notContainsHtmlTags(val) {
            if (!val) return true;
            return notContainsHtmlTags(val);
          },
        },
      },
    },
  },
};
