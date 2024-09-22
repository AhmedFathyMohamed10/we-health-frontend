/////////////////////////////// validators //////////////////////////////////
import {minLength,maxLength,decimal,numeric,minValue, maxValue} from "vuelidate/lib/validators";
import { validDate, notContainsHtmlTags} from "@/validation/customValidators";
/////////////////////////////////////////////////////////////////////////////
export default {
  data() {
    return {};
  },
  computed: {
    generalObject() {
      return this.$store.getters["detailsGeneral/general/getGeneralObject"];
    },
    pediatricObject() {
      return Object.assign(this.$store.getters["detailsPediatric/pediatric/getPediatricObject"],this.generalObject);
    },
  },
  validations: {
    pediatricObject: {
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
      medicalTest: {
        maxLength: maxLength(20),
      },
      diet: {
        maxLength: maxLength(20),
      },
      physicalTherapy: {
        maxLength: maxLength(20),
      },
      referral: {
        maxLength: maxLength(20),
      },
      surgery: {
        maxLength: maxLength(20),
      },
      form: {
         maxLength: maxLength(20),
      },
      recall: {},
      summery: {},
      ////////////////////////
      growthCharts :{},
      bilirubinChart :{},
      feeding :{
        formula: {
          maxLength: maxLength(20),
        },
        diet:{
          maxLength: maxLength(20),
        },
        breast:
        {
          minLength: minLength(1),
            maxLength: maxLength(2000),
            notContainsHtmlTags(value) {
              return notContainsHtmlTags(value);
            }}
      },
      vaccination: {
        maxLength: maxLength(3),
      },
      physicalExam :{
        physical:
         {
          $each: {
                comment: {
                    minLength: minLength(1),
                    maxLength: maxLength(255),
                    notContainsHtmlTags(value) {
                        return notContainsHtmlTags(value);
                    },
                }
        }},
      
        behavioral: 
        {  $each: {
            comment: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                    return notContainsHtmlTags(value);
                },
            }
        } 
    },
        history:[]
      },
      growthCharts:{
            length:{
                decimal,
                minValue:minValue(1),
                maxValue:maxValue(220),
            },
            weight:{
                decimal,
                minValue:minValue(1),
                maxValue:maxValue(170),
            },
            head:{
                decimal,
                minValue:minValue(1),
                maxValue:maxValue(55),
            },
            bmi:{
                decimal,
            },
      },
      bilirubinChart:{
            serum:{
                decimal,
                minValue:minValue(1),
                maxValue:maxValue(220),
            },
            comment: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                    return notContainsHtmlTags(value);
                },
            }
        }
    },
  },
};
