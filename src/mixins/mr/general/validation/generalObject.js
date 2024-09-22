/////////////////////////////// validators //////////////////////////////////
import {minLength,maxLength,decimal,numeric} from "vuelidate/lib/validators";
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
  },
  validations: {
    generalObject: {
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
        maxLength: maxLength(2),
      },
      recall: {},
      summery: {},
    },
  },
};
