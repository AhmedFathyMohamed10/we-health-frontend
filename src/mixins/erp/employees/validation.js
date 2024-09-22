////////////////////////////////////////////////////////
import {
  required,
  minLength,
  maxLength,
  email,
  numeric,
  helpers,
} from "vuelidate/lib/validators";
import { notContainsHtmlTags } from "@/validation/customValidators";
import moment from "moment";
function customRule(value) {
  return value
}
//////////////////////////////////////////////////////////
export default {
  data() {
    return {};
  },
  computed: {
    form() {
      return this.$store.getters["erp/hr/employees/getForm"];
    },
    validatedFiles() {
      let valid = true;
      this.form.otherInfo.files.forEach((element) => {
        valid = element.isValidExtension && element.isValidSize;
      });
      return valid;
    },
  },
  validations: {
    form: {
      mainInfo: {
        name: {
          required,
          validator: (value) => {
            if (typeof value == "object" || value == null || value == "")
              return true;
            else {
              return (
                value.length > 0 &&
                value.length < 255 &&
                notContainsHtmlTags(value)
              );
            }
          },
        },
        mobile: {
          required,
          numeric,
          minLength: minLength(11),
          maxLength: maxLength(11),
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
        address: {
          minLength: minLength(1),
          maxLength: maxLength(255),
          notContainsHtmlTags(value) {
            return notContainsHtmlTags(value);
          },
        },
        gender: {
          required,
        },
        marital_status: {
          required,
        },
        email: {
          required,
          email,
        },
      },

      empolymentInfo: {
        role: {
          required,
        },
        shift: {
          required,
        },
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
        password: {
          required,
          minLength: minLength(6),
          maxLength: maxLength(20),
        },
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
      },

      otherInfo: {
        uploaded_files: {
          maxLength: maxLength(10),
          // $model:
        //  $each:{
          
        //     isValidSize: (value) => {
        //      return value
        //     },
         
        //  }
        },
        emergency_numbers: {
          // numeric,
          maxLength: maxLength(4),
        },
        education: {
          minLength: minLength(1),
          maxLength: maxLength(600),
          notContainsHtmlTags(value) {
            return notContainsHtmlTags(value);
          },
        },
      },
    },
  },
};
