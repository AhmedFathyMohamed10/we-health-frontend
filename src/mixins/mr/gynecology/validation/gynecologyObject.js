/////////////////////////////// validators //////////////////////////////////
import { minLength, maxLength, decimal, numeric } from "vuelidate/lib/validators";
import { validDate, notContainsHtmlTags } from "@/validation/customValidators";
/////////////////////////////////////////////////////////////////////////////
export default {
    data() {
        return {};
    },
    computed: {
        generalObject() {
            return this.$store.getters["detailsGeneral/general/getGeneralObject"];
        },
        // gynecologyObject() {
        //     return this.$store.getters["obstetric/getObstetricObject"];
        // },
        gynecologyObject() {
            return Object.assign(this.$store.getters["detailsGynecology/gynecology/getGynecologyObject"],this.generalObject);
        },
    },
    validations: {
        gynecologyObject: {
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
            obstetric: {
                pregFollowUp: {
                  maxLength: maxLength(20),
                },
                womanHealth: {
                  maxLength: maxLength(20),
                },
                antenatal: {
                  maxLength: maxLength(20),
                }
            },
            gyn: {
                infertility: {
                    infertility:{
                      maxLength: maxLength(20),
                    },
                    hormones:{
                      maxLength: maxLength(20),
                    }
                },
                folliculometry: {
                  maxLength: maxLength(20),
                },
                pid: {
                  maxLength: maxLength(20),
                },
                contraception: {
                  maxLength: maxLength(20),
                },
                pBleeding: {
                  maxLength: maxLength(20),
                },
                pmBleeding: {
                  maxLength: maxLength(20),
                }
            },
            borns:{
              maxLength: maxLength(20),
            },
            usMedia:{
                pregnancy:{},
                pelvic:{},
            },
        },
    },
};