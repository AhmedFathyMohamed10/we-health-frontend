////////////////////////////////////////////////////////
const erp_employees= "erp_v2/hr/employees/";
import {
  required,
  minLength,
  maxLength,
  email,
  numeric,
  helpers,
  requiredIf 
} from "vuelidate/lib/validators";
import { notContainsHtmlTags } from "@/validation/customValidators";
import moment from "moment";
function customRule(value) {
  return value
}
//////////////////////////////////////////////////////////
export default {
  data() {
    return {
      // isValid:false
    };
  },
  computed: {
    // form() {
    //   return this.$store.getters[`${erp_employees}getForm`];
    // },
    // form() {
    //   return this.$store.getters[`${erp_employees}getForm`];
    // },
    getOneEmployee() {
      return this.$store.getters[`${erp_employees}listResponse`];
    },
    oneEmployee() {
      if (this.listResponse) return this.listResponse;
        else return [];
    },
    isValid(){
      return this.oneEmployee && this.oneEmployee.length > 0;
    },
    validatedFiles() {
      let valid = true;
      this.form.otherInfo.files.forEach((element) => {
        valid = element.isValidExtension && element.isValidSize;
      });
      return valid;
    },
  },
  // created() {
 
  //   if (!this.employeesOptions.Length > 0) {
  //     this.$store.dispatch("erp/hr/employees/getOptions");
  //   }
  // },
  validations (){
   return { form: {
      name: {
        required,
        minLength: minLength(2),
        maxLength: maxLength(255),
        notContainsHtmlTags: (value) => {
          return notContainsHtmlTags(value);
        },
      },
      email: {
          email,
        },
      department: { required ,
        invalidChoice: (value) => {
          if (typeof value === "string"  || value == null || value == ""){
            return false;
          }else{
            return true
          }
       },
      },
      role: { required ,
        invalidChoice: (value) => {
          if (typeof value === "string"  || value == null || value == ""){
            return false;
          }else{
            return true
          }
          
       },
      },
      gender: {
        required,
      },
      dob: {
        required,
          validDateTime: (value) => {
            if (value == null || value == "") {
              return true;
            } else {
              return moment(value, "YYYY-MM-DD", true).isValid();
            }
          },
        },
     
     
      marital_status: {
        required,
      },
      phone_number: {
        required,
        numeric,
        minLength: minLength(11),
        maxLength: maxLength(11),
        notContainsHtmlTags: (value) => {
          return notContainsHtmlTags(value);
        },
      },
      address: {
        notContainsHtmlTags: (value) => {
          return notContainsHtmlTags(value);
        },
        maxLength: maxLength(255),
      },
      expiration_date: {
         
         validDateTime: (value) => {
           if (value == null || value == "") {
             return true;
           } else {
             return moment(value, "YYYY-MM-DD", true).isValid();
           }
       },
      },
      empolymentInfo: {
        username: {
          required,
          minLength: minLength(1),
          maxLength: maxLength(255),
          notContainsHtmlTags(value) {
            return notContainsHtmlTags(value);
          },
        },
        salary: {
          required,
          minLength: minLength(4),
          maxLength: maxLength(20),
        },
        hourly_pay: {
          maxLength: maxLength(20),
        },
        password: {
          required,
          minLength: minLength(6),
          maxLength: maxLength(20),
          notContainsHtmlTags(value) {
            return notContainsHtmlTags(value);
          },
        },
        weekend_days:{
          required,
        },
        annual_increase:{
          numeric,
          maxLength: maxLength(5),
        },
        direct_manager: {
          required:requiredIf(() => {
            return this.isValid && !this.isUpdating;
          }),
        },
        
      
      },
      contract:{
        job_start_date: {
          required,
          validDateTime: (value) => {
            if (value == null || value == "") {
              return true;
            } else {
              return moment(value, true).isValid();
            }
          },
        },
        job_end_date:{
          required,
          validDateTime: (value) => {
            if (value == null || value == "") {
              return true;
            } else {
              return moment(value, true).isValid();
            }
          },
        }
      },
      otherInfo:{
        profession: {
          required,
          minLength: minLength(4),
          notContainsHtmlTags: (value) => {
            return notContainsHtmlTags(value);
          },
          maxLength: maxLength(255),
        },
        treat_as: {},
      files: {},
      serial: {},
        emergency_numbers: {
          // numeric,
          maxLength: maxLength(4),
          // name:{
          //   required,
          //   minLength: minLength(4),
          //   notContainsHtmlTags: (value) => {
          //     return notContainsHtmlTags(value);
          //   },
          //   maxLength: maxLength(255),
          // },
        //   number:{
        //     required,
        // numeric,
        // minLength: minLength(11),
        // maxLength: maxLength(11),
        //   }
        },
        graduation_date :{
          validDateTime: (value) => {
            if (value == null || value == "") {
              return true;
            } else {
              return moment(value, true).isValid();
            }
          },
        },
        // profession:{
        //   require
        // },
        status:{
          required
        }
      }
    },}
  },
};
