import { minLength, maxLength, required } from "vuelidate/lib/validators";
import { notContainsHtmlTags } from "@/validation/customValidators";
/////////////////////////////////////////////////////////////////////////////
export default {
    data() {
        return {};
    },
    computed: {
        productObject() {
            return Object.assign(this.$store.getters["erp_v2/items/product/getForm"],);
        },
    },
    validations: {
        productObject: {
            name_en: {
                required,
                minLength: minLength(4),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                    return notContainsHtmlTags(value);
                },
            },
            name_ar: {
                required,
                minLength: minLength(4),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                    return notContainsHtmlTags(value);
                },
            },
            group: {
                required
            },
            location: {},
            item_type: { required, },
        mic:{
                    indication:{
                        minLength: minLength(4),
                        maxLength: maxLength(255),
                        notContainsHtmlTags: (value) => {
                            return notContainsHtmlTags(value);
                        },
                    },
                    pharmaceutical_group:{
                        minLength: minLength(4),
                        maxLength: maxLength(255),
                        notContainsHtmlTags: (value) => {
                            return notContainsHtmlTags(value);
                        },
                    },
                    dose:{
                        minLength: minLength(4),
                        maxLength: maxLength(255),
                        notContainsHtmlTags: (value) => {
                            return notContainsHtmlTags(value);
                        },
                    },
                    contra_indication:{
                        minLength: minLength(4),
                        maxLength: maxLength(255),
                        notContainsHtmlTags: (value) => {
                            return notContainsHtmlTags(value);
                        },
                    },
                    pharmacological_group:{
                        minLength: minLength(4),
                        maxLength: maxLength(255),
                        notContainsHtmlTags: (value) => {
                            return notContainsHtmlTags(value);
                        },
                    },
                    other:{
                        minLength: minLength(4),
                        maxLength: maxLength(255),
                        notContainsHtmlTags: (value) => {
                            return notContainsHtmlTags(value);
                        },
                    },
                    precaution:{
                        minLength: minLength(4),
                        maxLength: maxLength(255),
                        notContainsHtmlTags: (value) => {
                            return notContainsHtmlTags(value);
                        },
                    },
                    side_effect:{
                        minLength: minLength(4),
                        maxLength: maxLength(255),
                        notContainsHtmlTags: (value) => {
                            return notContainsHtmlTags(value);
                        },
                    },
                    active_ingredient:{
                        minLength: minLength(4),
                        maxLength: maxLength(255),
                        notContainsHtmlTags: (value) => {
                            return notContainsHtmlTags(value);
                        },
                    },
                    pregnancy:{
                        minLength: minLength(4),
                        maxLength: maxLength(255),
                        notContainsHtmlTags: (value) => {
                            return notContainsHtmlTags(value);
                        },
                    },
    
            },
        general: {
            min_limit:{},
            max_limit:{},
            last_supplier:{
                required
            },
            in_active:{},
            prevent_give_discount:{},
            prevent_negative_quantity_take_out:{},
            stop_selling:{},
            prevent_price_modification:{},
            tax_free:{},
            alert_before_expiration_date:{},
            expiration_date_value:{},
            expiration_date_selection:{},
        },
        pricing:{},
        alternatives:{},
        alternativeBarcode:{},
        status:{},
        // pricing:{},
        // general:{},
        // alternatives:{},
        // alternativeBarcode:{},
        // mic:{},
        // status:{},
        
        },
    },
};
