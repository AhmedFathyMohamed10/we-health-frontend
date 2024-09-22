import { minLength, maxLength, required } from "vuelidate/lib/validators";
import { notContainsHtmlTags } from "@/validation/customValidators";
import moment from "moment";

/////////////////////////////////////////////////////////////////////////////
export default {
    data() {
        return {};
    },
    computed: {
        attendanceObject() {
            return Object.assign(this.$store.getters["erp_v2/hr/attendance/getForm"],);
        },
    },
    validations: {
        attendanceObject: {
                date:{  
                    required,
                    validDateTime: (value) => {
                        if (value == null || value == "") {
                            return true;
                        } else {
                            return moment(value, "YYYY-MM-DD", true).isValid();
                        }
                    },},
                status:{
                    required
                },
                employee:{
                    required,
                },
                shift:{},
                note:{
                    minLength: minLength(4),
                    maxLength: maxLength(255),
                    notContainsHtmlTags: (value) => {
                        return notContainsHtmlTags(value);
                    },
                },
                departed:{
                    validDateTime: (value) => {
                        if (value == null || value == "") {
                            return true;
                        } else {
                            return moment(value, "hh:mm:ss", true).isValid();
                        }
                    },
                },
                note_departed:{
                    minLength: minLength(4),
                    maxLength: maxLength(255),
                    notContainsHtmlTags: (value) => {
                        return notContainsHtmlTags(value);
                    },
                },
                attended:{
                    validDateTime: (value) => {
                        if (value == null || value == "") {
                            return true;
                        } else {
                            return moment(value, "hh:mm:ss", true).isValid();
                        }
                    },
                },
                note_attended:{
                    minLength: minLength(4),
                    maxLength: maxLength(255),
                    notContainsHtmlTags: (value) => {
                        return notContainsHtmlTags(value);
                    },
                },
            },
 
        },
};
