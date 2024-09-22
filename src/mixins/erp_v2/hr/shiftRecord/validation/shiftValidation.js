import { minLength, maxLength, required } from "vuelidate/lib/validators";
import { notContainsHtmlTags } from "@/validation/customValidators";
/////////////////////////////////////////////////////////////////////////////
export default {
    data() {
        return {};
    },
    computed: {
        shiftObject() {
            return Object.assign(this.$store.getters["erp_v2/hr/shiftRecord/getForm"],);
        },
    },
    validations: {
        shiftObject: {
          fixed:{
            employee:{},
            shift:{},
          },
          variable:{
            validation_from:{},
            validation_to:{},
            report_type:{},
            // employee:{},
            // shift:{},
            arr:{},
          },

 
        },
    },
};
