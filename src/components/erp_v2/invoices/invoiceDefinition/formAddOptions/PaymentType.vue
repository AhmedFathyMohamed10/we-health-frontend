<template>
  <div class="payment-type">
    <AddButton @add="openForm"></AddButton>
    <Form
      v-model="form"
      :isLoading="upsertLoading"
      :displayForm="displayForm"
      @close="resetForm"
      @cancel="resetForm"
      @save="create"
      :error="upsertError"
      :isUpdating="isUpdating"
      :header="$t('newPaymentType')"
    >
    </Form>
  </div>
</template>
<i18n lang="json5">
  {
      "en":{
        "newPaymentType":"New Payment Type"
      },
      "ar":{
        "newPaymentType":"نوع دفع جديد"
      }
  }
  </i18n>
<script>
import AddButton from "@/components/global/utilities/AddButton.vue";
import Form from "@/components/erp_v2/invoices/paymentType/Form.vue";
import { mapGetters, mapActions } from "vuex";
import toast from "@/mixins/global/toast";

export default {
  mixins:[toast],
  components: {
    AddButton,
    Form,
  },
  data(){
    return {
      form: {
        name_en:"",
        name_ar:"",
        account:null
      },
      displayForm: false,
      isUpdating:false,
    }
  },
  computed:{
    ...mapGetters("erp_v2/items/price", {
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

  created(){
    this.list()
  },
  methods:{
    ...mapActions("erp_v2/items/price", [
      "setUpsertResponse",
      "setUpsertError",
    ]),
    openForm() {
      this.displayForm = true;
    },
    closeForm() {
      this.displayForm = false;
    },
    resetForm() {
      this.form = {
        name_en:"",
        name_ar:"",
        account:null
      },
      this.closeForm();
      this.upsertResponse = null;
      this.upsertError = null;
    },
    create() {
      this.$store
        .dispatch("erp_v2/items/price/create", this.form)
        .then((res) => {
          this.resetForm();
          const summery = res.statusText;
          const details = res.data.message;
          this.successToast(summery, details);
        })
        .catch((err) => {
          console.log(err)
          const summery = err.statusText;
          const details = err.message;
          this.errorToast(summery, details);
        });
    }, 
    list() {
      let params = {pageNumber:1,rows:1000000,name_en:""}
      this.$store.dispatch("erp_v2/items/price/list", params)
    }, 
  },
}
</script>