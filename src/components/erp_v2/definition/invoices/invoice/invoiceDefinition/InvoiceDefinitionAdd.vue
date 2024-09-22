<template>
  <div class="asset">
    <Form 
      v-model="form" 
      :isLoading="upsertLoading" 
      :isUpdating="isUpdating"
      :paymentMethodOptions="paymentMethodOptions"
      :invoiceTypeOptions="invoiceTypeOptions"
      :displayForm="displayForm"
      @close="resetForm"
      @cancel="resetForm" 
      @save="create" 
      :error="upsertError"
      :header="isUpdating ? $t('dialog.header.edit') : $t('dialog.header.new')">
    </Form>
  </div>
</template>
<i18n src="@/lang/erp_v2/invoices/invoiceDefinition.json"></i18n>
<script>
import Form from "@/components/erp_v2/invoices/invoiceDefinition/Form.vue";
import toast from "@/mixins/global/toast";
import { mapGetters, mapActions } from "vuex";
import pagination from "@/mixins/global/pagination";

export default {
  mixins: [toast, pagination],
  props: {
    display: {
      type: Boolean,
      required: true,
      default() {
        return false;
      },
    }
  },
  watch: {
    display() {
      this.displayForm=this.display;
    }
  },
  components: {
    Form,
  },
  data() {
    return {
      displayForm: this.display,
      isUpdating: false,
      paymentMethodOptions:[
        { en: "Debit", ar: "اجل", id: 1 },
        { en: "Cash", ar: "كاش", id: 2 },
        { en: "Both", ar: "كلاهما", id: 3 },
      ],
      invoiceTypeOptions:[
        { en: "Items of Opening Inventory", ar: "عناصر المخزون الافتتاحي", id: 1 },
        { en: "Sales", ar: "مبيعات", id: 2 },
        { en: "Sales returned", ar: "عاد المبيعات", id: 3 },
        { en: "Purchase", ar: "شراء", id: 4 },
        { en: "Purchase returned", ar: "عاد الشراء", id: 5 },
        { en: "Transport", ar: "النقل", id: 6 },
        { en: "Input", ar: "المدخلات", id: 7 },
        { en: "Output", ar: "المخرجات", id: 8 },
        { en: "Items of Inventory Ending", ar: "عناصر نهاية المخزون", id: 9 },
      ],
      form:{
        invoice_name_en:"",
        invoice_name_ar:"",
        account:null,
        invoice_type:null,
        group:null,
        serial:"",
        customer_account:null,
        items:[],
        cash_account:null,
        discount:null,
        vat:null,
        description:"",
        pricing_policy:null,
        payment_type:null,
        payment_method:null,
      }
    };
  },
  computed: {
    listResponse() {
      return this.getListResponse;
    },
    invoiceDefinitions() {
      if (this.listResponse) return this.listResponse.results;
      else return [];
    },
    ...mapGetters("erp_v2/invoices/invoiceDefinition", {
      getListResponse: "getListResponse",
      listLoading: "getListLoading",
      getListError: "getListError",

      getUpsertResponse: "getUpsertResponse",
      upsertLoading: "getUpsertLoading",
      getUpsertError: "getUpsertError",

    }),
    upsertResponse: {
      get() {
        return this.getUpsertResponse;
      },
      set(value) {
        this.setUpsertResponse(value);
      },
    },

    upsertError: {
      get() {
        return this.getUpsertError;
      },
      set(value) {
        this.setUpsertError(value);
      },
    },
    filterParams() {
      return {
        pageNumber: this.pagination.pageNumber + 1,
        rows: this.pagination.rows,
        invoice_name_en: "",
        group_id: "",
      };
    },
  },
  mounted() {
      if (!this.invoiceDefinitions.length > 0) {
        this.list();
      }
    },
  methods: {
    ...mapActions("erp_v2/invoices/invoiceDefinition", [
      "setUpsertResponse",
      "setUpsertError",
    ]),
    closeForm() {
      this.isUpdating = false;
      this.displayForm = false;
      this.$emit('close');
    },
    resetForm() {
      this.form = {
        invoice_name_en:"",
        invoice_name_ar:"",
        account:null,
        invoice_type:null,
        group:null,
        serial:"",
        customer_account:null,
        items:null,
        cash_account:null,
        discount:null,
        vat:null,
        description:"",
        pricing_policy:null,
        payment_type:null,
        payment_method:null,
      };
      this.closeForm();
      this.upsertResponse = null;
      this.upsertError = null;
    },
    create() {
      this.$store.dispatch("erp_v2/invoices/invoiceDefinition/create", this.form)
        .then((res) => {
          console.log(res);
          this.resetForm();
          const summery = res.statusText;
          const details = res.message;
          this.successToast(summery, details);
        })
        .catch((err) => {
          console.error(err);
          const summery = err.statusText;
          const details = err.message;
          this.errorToast(summery, details);
        });
    },
    ///////////////// LIST /////////////////////////////
    list() {
      this.$store.dispatch("erp_v2/invoices/invoiceDefinition/list", this.filterParams)
    },
  },
};
</script>