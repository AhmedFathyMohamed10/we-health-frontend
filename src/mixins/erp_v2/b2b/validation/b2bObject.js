import { minLength, maxLength, required , numeric,email,} from "vuelidate/lib/validators";
import { notContainsHtmlTags } from "@/validation/customValidators";
/////////////////////////////////////////////////////////////////////////////
export default {
  data() {
    return {};
  },
  computed: {
    // b2bObject() {
    //   return Object.assign(this.$store.getters["erp_v2/b2b/getForm"]);
    // },
  },
  validations: {
    form: {
      company_name_en: {
        required,
        maxLength: maxLength(255),
        notContainsHtmlTags: (value) => {
          return notContainsHtmlTags(value);
        },
      },
      company_name_ar: {
        required,
        minLength: minLength(2),
        maxLength: maxLength(255),
        notContainsHtmlTags: (value) => {
          return notContainsHtmlTags(value);
        },
      },
      company_type: {
        required,
      },
      group: {
        required,
      },
      company_code: {
      },

      contact: {
        city: { required },
        address: { 
          maxLength: maxLength(255),
          notContainsHtmlTags: (value) => {
            return notContainsHtmlTags(value);
          }, },
        email: { required ,email, 
          maxLength: maxLength(255),
          notContainsHtmlTags: (value) => {
            return notContainsHtmlTags(value);
          },},
        phone_number: {  
          required,
          numeric,
          minLength: minLength(11),
          maxLength: maxLength(11),
          notContainsHtmlTags: (value) => {
            return notContainsHtmlTags(value);
          }, },
        other_phone_number: { 
          numeric,
          minLength: minLength(11),
          maxLength: maxLength(11),
          notContainsHtmlTags: (value) => {
            return notContainsHtmlTags(value);
          }, },
        industry_type: { 
          required ,
          maxLength: maxLength(255),
          notContainsHtmlTags: (value) => {
            return notContainsHtmlTags(value);
          }, },
      },
      permission: {
        discount: {
          maxLength: maxLength(255),
        
        },
        profit: {},
        max_debit: {},
        treat_as: {},
        prevent_dealing: {},
        alert_dealing: {},
        prevent_give: {},
        alert_give: {},
        payment_method: {},
      },

      contracts: {
        maxLength: maxLength(10),
      },
    },
  },
};
