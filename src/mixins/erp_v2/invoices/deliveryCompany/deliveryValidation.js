import { minLength, maxLength, required, email, numeric } from "vuelidate/lib/validators";
import { notContainsHtmlTags } from "@/validation/customValidators";
/////////////////////////////////////////////////////////////////////////////
export default {
    data() {
        return {};
    },
    computed: {
        deliveryCompanyObject() {
            return Object.assign(this.$store.getters["erp_v2/invoices/deliveryCompany/getForm"],);
        },
    },
    validations: {
        deliveryCompanyObject: {
            company_name_en:{
                required,
                minLength: minLength(4),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                    return notContainsHtmlTags(value);
                },
            },
            company_name_ar:{
                required,
                minLength: minLength(4),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                    return notContainsHtmlTags(value);
                },
            },
            serial:{},
            city:{
                required,
            },
            phone_number:{
                numeric,
                required,
                maxLength: maxLength(11),
            },
            other_phone_number:{
                numeric,
                maxLength: maxLength(11),
            },
            email_address:{
                email,
                notContainsHtmlTags: (value) => {
                    return notContainsHtmlTags(value);
                },
            },
            address:{
                minLength: minLength(4),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                    return notContainsHtmlTags(value);
                },
            },
            vehicle_type:{},
            vehicle_license:{},
            expiration_date:{
                required,
                validDateTime: (value) => {
                    if (value == null || value == "") {
                    return true;
                    } else {
                    return moment(value, "hh:mm:ss", true).isValid();
                    }
                },
            },
            personal_license:{},
            personal_license_attach:{},
            national_id:{},
            national_id_attach:{},
        //     name_en: {
        //         required,
        //         minLength: minLength(4),
        //         maxLength: maxLength(255),
        //         notContainsHtmlTags(value) {
        //             return notContainsHtmlTags(value);
        //         },
        //     },
        //     name_ar: {
        //         required,
        //         minLength: minLength(4),
        //         maxLength: maxLength(255),
        //         notContainsHtmlTags(value) {
        //             return notContainsHtmlTags(value);
        //         },
        //     },
        //     group: {
        //         required
        //     },
        //     location: {},
        //     item_type: { required, },
        // mic:{
        //             indication:{
        //                 minLength: minLength(4),
        //                 maxLength: maxLength(255),
        //                 notContainsHtmlTags: (value) => {
        //                     return notContainsHtmlTags(value);
        //                 },
        //             },
        //             pharmaceutical_group:{
        //                 minLength: minLength(4),
        //                 maxLength: maxLength(255),
        //                 notContainsHtmlTags: (value) => {
        //                     return notContainsHtmlTags(value);
        //                 },
        //             },
        //             dose:{
        //                 minLength: minLength(4),
        //                 maxLength: maxLength(255),
        //                 notContainsHtmlTags: (value) => {
        //                     return notContainsHtmlTags(value);
        //                 },
        //             },
        //             contra_indication:{
        //                 minLength: minLength(4),
        //                 maxLength: maxLength(255),
        //                 notContainsHtmlTags: (value) => {
        //                     return notContainsHtmlTags(value);
        //                 },
        //             },
        //             pharmacological_group:{
        //                 minLength: minLength(4),
        //                 maxLength: maxLength(255),
        //                 notContainsHtmlTags: (value) => {
        //                     return notContainsHtmlTags(value);
        //                 },
        //             },
        //             other:{
        //                 minLength: minLength(4),
        //                 maxLength: maxLength(255),
        //                 notContainsHtmlTags: (value) => {
        //                     return notContainsHtmlTags(value);
        //                 },
        //             },
        //             precaution:{
        //                 minLength: minLength(4),
        //                 maxLength: maxLength(255),
        //                 notContainsHtmlTags: (value) => {
        //                     return notContainsHtmlTags(value);
        //                 },
        //             },
        //             side_effect:{
        //                 minLength: minLength(4),
        //                 maxLength: maxLength(255),
        //                 notContainsHtmlTags: (value) => {
        //                     return notContainsHtmlTags(value);
        //                 },
        //             },
        //             active_ingredient:{
        //                 minLength: minLength(4),
        //                 maxLength: maxLength(255),
        //                 notContainsHtmlTags: (value) => {
        //                     return notContainsHtmlTags(value);
        //                 },
        //             },
        //             pregnancy:{
        //                 minLength: minLength(4),
        //                 maxLength: maxLength(255),
        //                 notContainsHtmlTags: (value) => {
        //                     return notContainsHtmlTags(value);
        //                 },
        //             },
    
        //     },
        // general: {
        //     min_limit:{},
        //     max_limit:{},
        //     last_supplier:{
        //         required
        //     },
        //     in_active:{},
        //     prevent_give_discount:{},
        //     prevent_negative_quantity_take_out:{},
        //     stop_selling:{},
        //     prevent_price_modification:{},
        //     tax_free:{},
        //     alert_before_expiration_date:{},
        //     expiration_date_value:{},
        //     expiration_date_selection:{},
        // },
        // pricing:{},
        // alternatives:{},
        // alternativeBarcode:{},
        // status:{},
        // pricing:{},
        // general:{},
        // alternatives:{},
        // alternativeBarcode:{},
        // mic:{},
        // status:{},
        
        },
    },
};
