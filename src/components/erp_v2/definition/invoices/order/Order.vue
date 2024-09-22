<template>
  <div class="asset">
    <Form 
      v-model="form" 
      :isLoading="upsertLoading" 
      :isUpdating="isUpdating"
      :displayForm="displayForm"
      @close="resetForm"
      @cancel="resetForm" 
      @save="create" 
      :error="upsertError"
      :header="isUpdating ? $t('dialog.header.edit') : $t('dialog.header.new')">
    </Form>
  </div>
</template>
<i18n src="@/lang/erp_v2/invoices/order.json"></i18n>
<script>
import Form from "@/components/erp_v2/invoices/order/Form.vue";
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
      form: {
        branch:null,
        employee:null,
        date:null,
        time:null,
        description:"",
        order_items: [],
      },
    };
  },
  computed: {
    listResponse() {
      return this.getListResponse;
    },
    assets() {
      if (this.listResponse) return this.listResponse.results;
      else return [];
    },
    ...mapGetters("erp_v2/invoices/order", {
      getForm: "getForm",
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
  },
  methods: {
    ...mapActions("erp_v2/invoices/order", [
      "setUpsertResponse",
      "setUpsertError",
      "setForm",
    ]),
    closeForm() {
      this.isUpdating = false;
      this.displayForm = false;
      this.$emit('close');
    },
    resetForm() {
      console.log("tests")
      this.form = {
        branch:null,
        employee:null,
        date:null,
        time:null,
        description:"",
        order_items: []
      };
      this.closeForm();
      this.upsertResponse = null;
      this.upsertError = null;
    },
    create() {
      this.$store.dispatch("erp_v2/invoices/order/create", this.form)
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
  },
};
</script>