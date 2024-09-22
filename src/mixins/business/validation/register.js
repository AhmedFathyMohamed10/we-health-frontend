/////////////////////////////// validators //////////////////////////////////
import {minLength,maxLength,decimal,numeric} from "vuelidate/lib/validators";
import { arabic, english, notContainsHtmlTags} from "@/validation/customValidators";
/////////////////////////////////////////////////////////////////////////////
export default {
  data() {
    return {};
  },
  computed: {
    form() {
      return this.$store.getters["business/register/getForm"];
    },
  },
  validations: {
    form: {
      name: {
        arabic: {
          required,
          minLength: minLength(4),
          maxLength: maxLength(255),
          arabic(value) {
            return arabic(value);
          },
        },
        english: {
          required,
          minLength: minLength(4),
          maxLength: maxLength(255),
          english(value) {
            return english(value);
          },
        },
      },
      title: {
        required,
      },
      subspecialty: {
        required,
      },
      service_type: {
        required,
      },
      bio: {
        maxLength: maxLength(255),
      },
       /////////
       img: {},
       cover_img: {},
       /////////
       location:{
         address:{
             required,
             minLength: minLength(3),
             maxLength: maxLength(255),
         },
         zipCode:{
             required,
             numeric,
             minLength: minLength(3),
             maxLength: maxLength(6),
         },
         city:{
            required,
         }
       },
       ///////////
       email:{
           required,
           email
       },
       /////////
       org_phone_numbers :{
         maxLength:maxLength(3)
       },
       ////////
       website: {
       },
       equipment:{},
       /////////////
       businessHours:{},
       /////////////
       waiting_time:{
           required,
           numeric,
           maxValue: maxValue(1000)
       },
       insurance:{},
       fees:{
           value:{
             required,
             numeric,
             maxValue: maxValue(1000000)
           }
       }
    },
  },
};
