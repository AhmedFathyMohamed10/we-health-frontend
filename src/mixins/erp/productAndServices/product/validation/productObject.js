import {
    minLength,
    maxLength,
    required,
} from "vuelidate/lib/validators";
import {notContainsHtmlTags } from "@/validation/customValidators";
/////////////////////////////////////////////////////////////////////////////
export default {
    data() {
        return {
        };
    },
    computed: {

        productObject() {
            return Object.assign(this.$store.getters["erp/ProductAndService/productAndService/product/getForm"]);
        },
    },
    validations: {
        productObject: {
            name_en: {
                required,
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                    return notContainsHtmlTags(value);
                },
            },
            name_ar: {
                required,
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                    return notContainsHtmlTags(value);
                },
            },
            codeProduct: {},
            subCategory: { required, },
            productClassification:{
                required,
            },
            medical:
            {  indications:{
                
            },
            },
            chemicalComposition:{
                
            },
            alternativeBarcode:{},
            status: {},
            general: {
                provider: {
                    required,
                },
                },
                materialType: {},
                shortcutKey: {},
                checkExpiryDate: {},
                negativeDrawPrevention: {},
                stopSelling: {},
            },
            materialPicture: {
            },
            alternativeMaterial: {
                maxLength: maxLength(5),
            },
            medical: {}
        },
};
