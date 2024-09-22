import { minLength, maxLength, required } from "vuelidate/lib/validators";
import { notContainsHtmlTags } from "@/validation/customValidators";

export default {
  data() {
    return {};
  },
  computed: {
    fixedAssetObject() {
      return Object.assign(this.$store.getters["erp_v2/assets/fixedAsset/getForm"],);
    },
  },
  validations: {
    fixedAssetObject: {
      name_en: {
        required,
        minLength: minLength(4),
        maxLength: maxLength(255),
        notContainsHtmlTags: (value) => {
          return notContainsHtmlTags(value);
        },
      },
      name_ar: {
        required,
        minLength: minLength(4),
        maxLength: maxLength(255),
        notContainsHtmlTags: (value) => {
          return notContainsHtmlTags(value);
        },
      },
      group: {
        required
      },
      location: {
        minLength: minLength(4),
        maxLength: maxLength(255),
        notContainsHtmlTags: (value) => {
          return notContainsHtmlTags(value);
        },
      },
      item_code: {},
      accounting_code: {},
      description: {},
      purchasing_date: {},
      expiration_date: {},
      in_active: {},
      in_maintenance: {},
      total_destruction: {},
      price: {},
      barcode: {
        minLength: minLength(4),
        maxLength: maxLength(255),
        // notContainsHtmlTags: (value) => {
        //   return notContainsHtmlTags(value);
        // },
      },
      last_purchasing_date_maintenance: {},
      end_in_value: {},
      end_in_selection: {},
      last_purchasing_date_warranty: {},
      maintenance_every_value: {},
      maintenance_every_selection: {},
      next_maintenance: {
        minLength: minLength(4),
        maxLength: maxLength(255),
        notContainsHtmlTags: (value) => {
          return notContainsHtmlTags(value);
        },
      }
    },
  },
};
